import { Context } from 'hono';
import { VerificationCode } from '../models/VerificationCode';
import { User } from '../models/User';

interface VerifyBody {
   email: string;
   code: string;
}

export const verify = async (c: Context) => {
   const { email, code } = await c.req.json<VerifyBody>();

   // Validate input
   if (!email || !code) {
      return c.json({ message: 'Email and code are required.' }, 400);
   }

   // Find the verification entry
   const verificationEntry = await VerificationCode.findOne({ email, code });
   if (!verificationEntry) {
      return c.json({ message: 'Invalid or expired verification code.' }, 400);
   }

   // Check if the user already exists
   const existingUser = await User.findOne({ email });
   if (existingUser) {
      return c.json({ message: 'User already exists.' }, 400);
   }

   // Create the user
   await User.create({
      email: verificationEntry.email,
      username: verificationEntry.username,
      password: verificationEntry.hashedPassword,
   });

   // Delete the verification entry
   await VerificationCode.deleteOne({ email, code });

   return c.json({ message: 'User verified and created successfully.' }, 200);
};