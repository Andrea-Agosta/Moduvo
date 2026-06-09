import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CartState } from "./cart.reducer";

export const selectCartState = createFeatureSelector<CartState[]>('cart');

export const selectCartItemsCount = createSelector(
  selectCartState,
  (cartState) => cartState.reduce((total, item) => total + item.cartItems, 0)
);