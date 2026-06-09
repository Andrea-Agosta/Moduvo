import { Component, OnInit, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LucideHeart, LucideShoppingCart, LucideStar } from "@lucide/angular";

import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../services/product.model';
import { Button } from "../../../../components/button/button";
import { addProduct } from '../../../../store/cart/cart.actions';

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-products-grid',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, RouterLink, FormsModule, Button, LucideHeart, LucideStar, LucideShoppingCart],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid implements OnInit {
  private productService = inject(ProductService);
  private store = inject(Store<{ cart: Product[] }>);
  products = signal<Product[]>([]);
  isProductLoading = signal<boolean>(true);
  error = signal<any>(null);
  selected = 'featured';
  sortOptions: SelectOption[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' }
  ];

  ngOnInit(): void {
    this.productService.getProductss().subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (err) => {
        this.error.set(err);
        this.isProductLoading.set(false);
      },
      complete: () => {
        this.isProductLoading.set(false);
      }
    });
  }

  addToCart(product: Product) {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      cartItems: 1
    }
    this.store.dispatch(addProduct(itemToAdd));
  }
}
