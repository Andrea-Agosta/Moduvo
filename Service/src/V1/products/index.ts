import express, { Request, Response } from 'express';
import { getProducts, getProductById, getProducstDeals, getProductDealsDuration } from '../../controllers/products.controller';



const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const products = await getProducts();
  res.json(products);
});

router.get('/deals', async (req: Request, res: Response) => {
  const productsDeals = await getProducstDeals();
  res.json(productsDeals);
});

router.get('/deals/duration', async (req: Request, res: Response) => {
  const productsDealsDuration = await getProductDealsDuration();
  res.json(productsDealsDuration);
});

router.get('/:id', async (req: Request, res: Response) => {
  const product = await getProductById(req);
  res.json(product);
});

export default router;