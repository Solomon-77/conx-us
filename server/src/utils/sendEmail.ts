import * as nodemailer from 'nodemailer';

export const sendEmail = async (email: string, code: string) => {
   const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
         user: process.env.GMAIL_USER,
         pass: process.env.GMAIL_PASS,
      },
   });

   try {
      await transporter.sendMail({
         from: process.env.GMAIL_USER,
         to: email,
         subject: 'Your Verification Code',
         text: `Your verification code is: ${code}. It will expire in 5 minutes.`,
      });
   } catch (error) {
      throw new Error('Email could not be sent.');
   }
};