import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ImageGallery } from "./sections/image-gallery/image-gallery";
import { ProductService } from '../../services/product/product.service';
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
  product = this.productService.currentProduct;
  isProductLoading = this.productService.isLoading
  error = this.productService.error
  childName = "products"
  id = input.required<string>();

  ngOnInit(): void {
    this.productService.loadProductById(this.id());
  }
}
