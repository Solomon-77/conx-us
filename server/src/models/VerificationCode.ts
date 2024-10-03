import { Schema, model } from 'mongoose';

const verificationCodeSchema = new Schema({
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

export const VerificationCode = model('VerificationCode', verificationCodeSchema);