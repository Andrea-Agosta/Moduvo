import { Component, inject, OnInit, signal } from '@angular/core';

import { ImageGallery } from "./sections/image-gallery/image-gallery";
import { Product } from '../../services/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [ImageGallery],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);
  isProductLoading = signal<boolean>(true);
  error = signal<any>(null);
  childName = "products"

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
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
}
