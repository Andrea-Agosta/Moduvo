import { Request } from 'express';
import { ICategories } from '../types/categories.type';
import { getHomeCategories } from '../db'

export const getCategories = async (): Promise<ICategories[]> => {
    return getHomeCategories()
};