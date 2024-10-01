import { Schema, model } from 'mongoose';

const verificationCodeSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   code: {
      type: String,
      required: true
   },
   expiresAt: {
      type: Date,
      required: true
   }
}, { versionKey: false });

export const VerificationCode = model('VerificationCode', verificationCodeSchema);
