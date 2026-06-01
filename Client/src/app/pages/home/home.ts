import { Component } from '@angular/core';

import { HeroSection } from "./sections/hero/hero";
import { TrustIndicator } from "./sections/trust-indicator/trust-indicator";
import { Categories } from './sections/categories/categories';
import { FeaturedProducts } from './sections/featured-products/featured-products';
import { Newsletter } from './sections/newsletter/newsletter';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-home',
  imports: [HeroSection, TrustIndicator, Categories, FeaturedProducts, Newsletter, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
