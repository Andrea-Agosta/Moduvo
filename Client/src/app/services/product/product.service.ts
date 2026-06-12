import { inject, Injectable, signal } from '@angular/core';
import { finalize, Observable } from 'rxjs';

import { Product } from './product.model';
import { ProductApiService } from './product.api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private api = inject(ProductApiService);
  readonly products = signal<Product[]>([]);
  readonly productDeals = signal<Product[]>([]);
  readonly currentProduct = signal<Product | null>(null);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<any>(null);
  readonly productDealsDuration = signal<string>('');

  private runLoader<T>(request$: Observable<T>, onSuccess: (data: T) => void): void {
    this.isLoading.set(true);
    this.error.set(null);

    request$.pipe(
      finalize(() => this.isLoading.set(false))
    ).subscribe({
      next: (data) => onSuccess(data),
      error: (err) => this.error.set(err)
    });
  }

  loadProducts(): void {
    this.runLoader(this.api.getProducts(), (data) => this.products.set(data));
  }

  loadProductDeals(): void {
    this.runLoader(this.api.getProductDeals(), (data) => this.productDeals.set(data));
  }

  loadProductById(id: string): void {
    this.runLoader(this.api.getProductById(id), (data) => this.currentProduct.set(data));
  }

  loadProductDealsDuration(): void {
    this.runLoader(this.api.getProductDealsDuration(), (data) => this.productDealsDuration.set(data));
  }
}
