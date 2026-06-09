import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideShoppingCart, LucideLogOut, LucideUser } from '@lucide/angular';
import { Store } from '@ngrx/store';

import { selectCartItemsCount } from '../../store/cart/cart.selectors';
import { AuthActions } from '../../store/auth/auth.actions';
import { selectUser } from '../../store/auth/auth.selectors';
import { AuthState } from '../../store/auth/auth.reducer';
import { CartState } from '../../store/cart/cart.reducer';
import { Button } from "../button/button";

interface AppState {
  cart: CartState;
  auth: AuthState;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LucideShoppingCart, Button, LucideLogOut, LucideUser],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})

export class Navbar {
  private store = inject(Store<AppState>);
  protected user = this.store.selectSignal(selectUser)
  protected totalItems = this.store.selectSignal(selectCartItemsCount);
  protected isCartEmpty = computed(() => this.totalItems() === 0);

  handleLogout() {
    this.store.dispatch(AuthActions.logout());
  }
}
