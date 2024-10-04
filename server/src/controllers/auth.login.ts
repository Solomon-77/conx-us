import { Context } from 'hono';
import { User } from '../models/User';
import * as argon2 from 'argon2';
import * as jwt from 'jsonwebtoken';

interface LoginBody {
   email: string;
   password: string;
}

export const login = async (c: Context) => {
   const { email, password } = await c.req.json<LoginBody>();

   // Basic validation
   if (!email || !password) {
      return c.json({ message: 'Email and password are required.' }, 400);
   }

   // Find the user
   const user = await User.findOne({ email });
   if (!user || !(await argon2.verify(user.password, password))) {
      return c.json({ message: 'Invalid credentials.' }, 401);
   }

   // Generate JWT token
   const token = jwt.sign(
      {
         userId: user._id,
         email: user.email
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
   );

   return c.json({ message: 'Login successful', token }, 200);
};