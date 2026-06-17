import { Request } from 'express';
import { ICategories } from '../types/categories.type';
import { getCategories as getCategoriesFromDb } from '../db'

export const getCategories = async (): Promise<ICategories[]> => {
    return getCategoriesFromDb()
};