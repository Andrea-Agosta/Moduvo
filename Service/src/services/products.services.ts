import { IProducts } from '../types/products.type';
import { getProductDealsDurationFromDB, getProducts as getProductFromDb } from '../db'

export const getProducts = async (): Promise<IProducts[]> => {
	return getProductFromDb()
};

export const getProductById = async (req): Promise<IProducts> => {
	const products = await getProducts()
	return products.find(product => product.id == req.params.id)
};

export const getProducstDeals = async (): Promise<IProducts[]> => {
	const products = getProductFromDb()
	const dealProducts = products.filter(product => product.isSale)
	return dealProducts
};

export const getProductDealsDuration = async (): Promise<string> => {
	return getProductDealsDurationFromDB()
};