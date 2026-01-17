import express, { Request, Response } from 'express';
import config from './app/config';
import authRouter from './app/modules/auth/auth.router';
import cors from 'cors';
import productRouter from './app/modules/products/product.router';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(express.json());

app.use('/api/v1', authRouter);
app.use('/api/v1', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: `Server is running at ${config.port}`,
  });
});
export default app;
