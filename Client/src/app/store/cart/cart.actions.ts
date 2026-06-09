import { createAction, props } from "@ngrx/store";

import { CartState } from "./cart.reducer";

export const addProduct = createAction('[cart] AddProduct', props<CartState>());