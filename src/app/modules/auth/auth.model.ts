import { model, Schema } from 'mongoose';
import { IRegisterUser } from './auth.interface';

const userSchema = new Schema<IRegisterUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'moderator', 'user'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
);

const User = model<IRegisterUser>('User', userSchema);
export default User;
