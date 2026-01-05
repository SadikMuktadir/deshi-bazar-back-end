export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  role?: 'admin' | 'moderator' | 'user ';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ILoginUser {
  email: string;
  password: string;
}
