import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeroSection } from "../../components/sharedSections/hero/hero";
import { TrustIndicator } from "./sections/trust-indicator/trust-indicator";
import { Categories } from './sections/categories/categories';
import { FeaturedProducts } from './sections/featured-products/featured-products';
import { Newsletter } from './sections/newsletter/newsletter';
import { Footer } from './sections/footer/footer';
import { Button } from '../../components/ui/button/button';

@Component({
  selector: 'app-home',
  imports: [HeroSection, TrustIndicator, Categories, FeaturedProducts, Newsletter, Footer, Button, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // TODO: remember to fix this with Backend
  title = "Transform Your Space with"
  secondLineTitle = "Premium Furniture"
  description = "Discover our curated collection of modern, sustainable furniture designed to elevate your home."
  imgUrl = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop"
  imgAlt = "Modern furniture"
}
