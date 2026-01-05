import config from '../../config';
import { ILoginUser, IRegisterUser } from './auth.interface';
import bcrypt from 'bcrypt';
import User from './auth.model';
import jwt from 'jsonwebtoken';

const registerUser = async (payload: IRegisterUser) => {
  const hashedPassword = await bcrypt.hash(payload?.password, 12);

  const userData = { ...payload, password: hashedPassword };
  const result = await User.create(userData);

  const token = jwt.sign(
    {
      _id: result._id,
      email: result?.email,
      name: result?.name,
      role: result?.role,
    },
    config.jwt_secret || 'secret-token',
    { expiresIn: '30d' },
  );
  return { token, user: result };
};

const loginUser = async (payload: ILoginUser) => {
  const result = await User.findOne({
    email: payload?.email,
  }).select('+password');

  if (!result) {
    throw new Error('User not found');
  }

  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    result?.password,
  );

  if (!isPasswordMatched) {
    throw new Error('Incorrect password');
  }
  const token = jwt.sign(
    {
      _id: result?._id,
      email: result?.email,
      name: result?.name,
      role: result?.role,
    },
    config.jwt_secret || 'secret-token',
    { expiresIn: '30d' },
  );

  return { token, user: result };
};

export const authService = {
  registerUser,
  loginUser,
};
