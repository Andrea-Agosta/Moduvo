import express, { Request, Response } from 'express';
import { getProducts } from '../../controllers/products.controller';
import { getCategories } from '../../controllers/categories.controller';

const router = express.Router();

router.get('/products', async (req: Request, res: Response) => {
  const products = await getProducts();
  res.json(products);
});

router.get('/categories', async (req: Request, res: Response) => {
  const products = await getCategories();
  res.json(products);
});

export default router;