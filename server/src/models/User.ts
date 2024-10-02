import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
   email: string;
   username: string;
   password: string;
}

const userSchema = new Schema<IUser>({
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

export const User = model<IUser>('User', userSchema);