import { Schema, model } from 'mongoose';

const userSchema = new Schema({
   email: {
      type: String,
      required: true,
      unique: true,
   },
   username: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
}, { versionKey: false });

export const User = model('User', userSchema);