import { Component } from '@angular/core';

import { HeroSection } from "./sections/hero/hero";
import { TrustIndicator } from "./sections/trust-indicator/trust-indicator";
import { Categories } from './sections/categories/categories';

@Component({
  selector: 'app-home',
  imports: [HeroSection, TrustIndicator, Categories],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
