import cors from 'cors';
import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';

import { errorHandler } from './middleware/errorHandler';
import productRouter from './V1/products'; 
import categoryRouter from './V1/categories';

const app: Application = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/V1/products', productRouter);
app.use('/V1/categories', categoryRouter);

app.get('/', (_req: Request, res: Response) => {
  res.json({ 'message': 'Read our documentation for more details' });
});

app.use(errorHandler);

export default app;