import { Request } from 'express';
import { IProducts } from '../types/products.type';
import { getProducts as getProductsService } from '../services/products.services';
import { BadRequestError } from '../utils/customErrors';

export const getProducts = async (): Promise<IProducts[] | null> => {
    return await getProductsService();
};
