import { Context } from 'hono';
import { OAuth2Client } from 'google-auth-library';
import * as jwt from 'jsonwebtoken';
import { User } from '../models/User';

const client = new OAuth2Client(
   process.env.GOOGLE_CLIENT_ID,
   process.env.GOOGLE_CLIENT_SECRET,
   process.env.GOOGLE_CALLBACK_URL
);

export const googleOauth = {
   initiateGoogleAuth: async (c: Context) => {
      const authorizeUrl = client.generateAuthUrl({
         access_type: 'offline',
         scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
      });
      return c.redirect(authorizeUrl);
   },

   handleGoogleCallback: async (c: Context) => {
      const code = c.req.query('code');

      if (!code) {
         return c.json({ message: 'Authorization code not found' }, 400);
      }

      try {
         const { tokens } = await client.getToken(code);
         client.setCredentials(tokens);

         const ticket = await client.verifyIdToken({
            idToken: tokens.id_token as string,
            audience: process.env.GOOGLE_CLIENT_ID
         });

         const payload = ticket.getPayload();

         if (!payload || !payload.email) {
            return c.json({ message: 'Failed to verify token or email not found' }, 400);
         }

         // Check if user exists, if not, create new user
         let user = await User.findOne({ email: payload.email });
         if (!user) {
            user = await User.create({
               email: payload.email,
               username: payload.name,
               googleId: payload.sub
            });
         }

         // Generate JWT
         const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
         );

         // In a real application, you might want to set this as an HTTP-only cookie
         // For this example, we're just returning it in the response
         return c.json({ message: 'Authentication successful', token }, 200);

      } catch (error) {
         console.error('Error during Google OAuth callback:', error);
         return c.json({ message: 'Authentication failed' }, 400);
      }
   }
};