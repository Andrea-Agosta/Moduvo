import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideStar } from '@lucide/angular';

import { Button } from '../../../../components/button/button';
import { ProductService } from '../../../../services/product/product.service';
import { Card } from '../../../../components/card/card';

@Component({
  selector: 'app-featured-products',
  imports: [Button, RouterLink, Card],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.scss',
})
export class FeaturedProducts implements OnInit {
  private productService = inject(ProductService);
  products = this.productService.products;
  isProductLoading = this.productService.isLoading
  error = this.productService.error
  childName = "products"

  ngOnInit(): void {
    this.productService.loadProducts();
  }
}
