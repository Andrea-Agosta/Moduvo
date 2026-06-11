import { Component, inject, input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ImageGallery } from "./sections/image-gallery/image-gallery";
import { Product } from '../../services/product.model';
import { ProductService } from '../../services/product.service';
import { LucideArrowLeft } from '@lucide/angular';
import { ProductInfo } from "./sections/product-info/product-info";

@Component({
  selector: 'app-product-detail',
  imports: [ImageGallery, RouterLink, LucideArrowLeft, ProductInfo],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  private productService = inject(ProductService);
  product = signal<Product | undefined>(undefined);
  isProductLoading = signal<boolean>(true);
  error = signal<any>(null);
  childName = "products"
  id = input.required<string>();

  ngOnInit(): void {
    this.productService.getProductById(this.id()).subscribe({
      next: (data) => {
        this.product.set(data);
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
