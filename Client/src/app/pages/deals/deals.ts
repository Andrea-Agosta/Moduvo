import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { LucideClock, LucideShoppingCart, LucideStar } from '@lucide/angular';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';

import { NewsletterSignup } from "./sections/newsletter-signup/newsletter-signup";
import { Banner } from "../../components/banner/banner";
import { ProductService } from '../../services/product/product.service';
import { Badge } from '../../components/badge/badge';
import { Button } from '../../components/button/button';
import { Product } from '../../services/product/product.model';
import { addProduct } from '../../store/cart/cart.actions';

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

@Component({
  selector: 'app-deals',
  imports: [NewsletterSignup, Banner, LucideClock, Badge, RouterLink, LucideStar, Button, LucideShoppingCart],
  templateUrl: './deals.html',
  styleUrl: './deals.scss',
})
export class Deals implements OnInit {
  private store = inject(Store<{ cart: Product[] }>);
  private productService = inject(ProductService);
  private now = signal(new Date());
  private timerId: any;
  productDeals = this.productService.productDeals;
  isProductDealsLoading = this.productService.isLoading;
  error = this.productService.error;
  dealsDuration = this.productService.productDealsDuration
  hasDeals = computed(() => !this.error() && (this.productDeals() || this.dealsDuration()));

  bannerTitle = "⚡ Flash Sale!"
  bannerDescription = "Limited time offers - Up to 50% off selected items"

  timeLeft = computed<TimeLeft>(() => {
    const duration = this.dealsDuration();
    if (!duration) return { hours: 0, minutes: 0, seconds: 0 };

    const endDealDate = new Date(duration);
    const diffInMs = endDealDate.getTime() - this.now().getTime();
    if (diffInMs <= 0) return { hours: 0, minutes: 0, seconds: 0 };

    const totalSeconds = Math.floor(diffInMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    return {
      hours: totalHours,
      minutes: totalMinutes % 60,
      seconds: totalSeconds % 60,
    };
  });

  ngOnInit(): void {
    this.productService.loadProductDeals();
    this.productService.loadProductDealsDuration();

    this.timerId = setInterval(() => {
      this.now.set(new Date());
    }, 1000);
  }

  addToCart(product: Product) {
    const itemToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images,
      cartItems: 1
    }
    this.store.dispatch(addProduct(itemToAdd));
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
