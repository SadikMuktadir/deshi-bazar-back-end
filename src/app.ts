import express, { Request, Response } from 'express';
import config from './app/config';
import authRouter from './app/modules/auth/auth.router';

const app = express();

app.use(express.json());

app.use('/api/v1', authRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: `Server is running at ${config.port}`,
  });
});
export default app;
