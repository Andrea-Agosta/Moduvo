import { Request } from 'express';
import { IProducts } from '../types/products.type';
import { getHomeProducts } from '../db'

export const getProducts = async (): Promise<IProducts[]> => {
    return getHomeProducts()
};