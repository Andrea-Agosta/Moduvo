import { createReducer, on } from "@ngrx/store";

import { addProduct } from "./cart.actions";

export interface CartState {
	id: number,
	name: string,
	price: number,
	image: string,
	cartItems: number
}

const initialState = <CartState[]>[]

export const cartReducer = createReducer(
	initialState,
	on(addProduct, (state, action) => {
		const isProductInCart = state.find((item) => item.id === action.id);
		if (isProductInCart) {
			return state.map((item) =>
				item.id === action.id
					? { ...item, cartItems: item.cartItems + 1 }
					: item
			);
		}
		return [...state, action]
	})
);