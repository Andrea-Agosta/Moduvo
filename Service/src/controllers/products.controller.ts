import { Request } from 'express';
import { IProducts } from '../types/products.type';
import { getProductById as getProductByIdService, getProducts as getProductsService, getProducstDeals as getProducstDealsService, getProductDealsDuration as getDealsDurationService } from '../services/products.services';

export const getProducts = async (): Promise<IProducts[] | null> => {
    return await getProductsService();
};

export const getProductById = async (req: Request): Promise<IProducts | null> => {
    return await getProductByIdService(req);
};

export const getProducstDeals = async (): Promise<IProducts[] | null> => {
    return await getProducstDealsService();
};

export const getProductDealsDuration = async (): Promise<string> => {
    return await getDealsDurationService();
};