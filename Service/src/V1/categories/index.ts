import express, { Request, Response } from 'express';
import { getCategories } from '../../controllers/categories.controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const products = await getCategories();
  res.json(products);
});

export default router;