import { Component, computed, inject, input } from '@angular/core';
import { LucideShoppingCart, LucideStar } from '@lucide/angular';
import { Store } from '@ngrx/store';

import { Product } from '../../../../services/product/product.model';
import { Badge } from '../../../../components/badge/badge';
import { Button } from '../../../../components/button/button';
import { addProduct } from '../../../../store/cart/cart.actions';

@Component({
  selector: 'app-product-info',
  imports: [Badge, LucideStar, LucideShoppingCart, Button],
  templateUrl: './product-info.html',
  styleUrl: './product-info.scss',
})
export class ProductInfo {
  private store = inject(Store<{ cart: Product[] }>);
  product = input<Product | null>();
  protected roundedRating = computed(() => {
    const rating = this.product()?.rating;
    return rating ? Math.floor(rating) : 0;
  });

  addToCart() {
    const currentProduct = this.product();
    if (currentProduct){
      const itemToAdd = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.images,
        cartItems: 1
      }
      this.store.dispatch(addProduct(itemToAdd));
    }
  }
}
