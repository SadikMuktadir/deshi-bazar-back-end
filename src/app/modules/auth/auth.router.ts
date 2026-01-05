import { Router } from 'express';
import { authController } from './auth.controller';

const authRouter = Router();

authRouter.post('/register-user', authController.registerUser);
authRouter.post('/login-user', authController.loginUser);

export default authRouter;
