import { IProducts } from '../types/products.type';
import { getProducts as getProductFromDb } from '../db'

export const getProducts = async (): Promise<IProducts[]> => {
    return getProductFromDb()
};

export const getProductById = async (req): Promise<IProducts> => {
    const products = await getProducts()
    return products.find(product => product.id == req.params.id)
};