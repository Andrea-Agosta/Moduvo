import { Request } from 'express';
import { IProducts } from '../types/products.type';
import { getProductById as getProductByIdService, getProducts as getProductsService } from '../services/products.services';
import { BadRequestError } from '../utils/customErrors';

export const getProducts = async (): Promise<IProducts[] | null> => {
    return await getProductsService();
};

export const getProductById = async (req: Request): Promise<IProducts | null> => {
    return await getProductByIdService(req);
};
