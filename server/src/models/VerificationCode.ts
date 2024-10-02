import { Schema, model, Document } from 'mongoose';

interface IVerificationCode extends Document {
   email: string;
   code: string;
   username: string;
   hashedPassword: string;
   createdAt: Date;
}

const verificationCodeSchema = new Schema<IVerificationCode>({
   email: {
      type: String,
      required: true,
      unique: true,
   },
   code: {
      type: String,
      required: true,
   },
   username: {
      type: String,
      required: true,
   },
   hashedPassword: {
      type: String,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now,
      expires: 300, // 5 minutes expiration
   },
}, { versionKey: false });

export const VerificationCode = model<IVerificationCode>('VerificationCode', verificationCodeSchema);