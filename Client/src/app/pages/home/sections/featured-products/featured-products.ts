import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideStar } from '@lucide/angular';

import { Button } from '../../../../components/button/button';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../services/product.model';
import { Card } from '../../../../components/card/card';

@Component({
  selector: 'app-featured-products',
  imports: [Button, RouterLink, Card, LucideStar],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.scss',
})
export class FeaturedProducts implements OnInit {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);
  isProductLoading = signal<boolean>(true);
  error = signal<any>(null);
  childName = "products"

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
}
