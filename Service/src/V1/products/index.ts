import express, { Request, Response } from 'express';
import { getProducts, getProductById } from '../../controllers/products.controller';


const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const products = await getProducts();
  res.json(products);
});

router.get('/:id', async (req: Request, res: Response) => {
  const product = await getProductById(req);
  res.json(product);
});

export default router;