import { Request } from 'express';
import { ICategories } from '../types/categories.type';
import { getCategories as getCategoriesService } from '../services/categories.services';
import { BadRequestError } from '../utils/customErrors';

export const getCategories = async (): Promise<ICategories[] | null> => {
    return await getCategoriesService();
};
