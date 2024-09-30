import { Schema, model } from 'mongoose';

const userSchema = new Schema({
   username: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true
   },
   isVerified: {
      type: Boolean,
      default: false
   }
}, { versionKey: false });

export const User = model('User', userSchema);