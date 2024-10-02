import { Context } from 'hono';
import { VerificationCode } from '../models/VerificationCode';
import { sendEmail } from '../utils/sendEmail';
import * as argon2 from 'argon2';

interface SignUpBody {
   email: string;
   username: string;
   password: string;
}

export const signUp = async (c: Context) => {
   const { email, username, password } = await c.req.json<SignUpBody>();

   // Basic validation
   if (!email || !username || !password) {
      return c.json({ message: 'All fields are required.' }, 400);
   }

   // Check if the user already exists
   const existingUser = await VerificationCode.findOne({ email });
   if (existingUser) {
      return c.json({ message: 'A verification code has already been sent to this email.' }, 400);
   }

   // Hash the password and generate the verification code
   const hashedPassword = await argon2.hash(password);
   const code = Math.floor(100000 + Math.random() * 900000).toString();

   // Store the verification code
   await VerificationCode.create({ email, code, username, hashedPassword });

   // Send the verification email
   await sendEmail(email, code);

   return c.json({ message: 'Verification code sent to email.' }, 200);
};
