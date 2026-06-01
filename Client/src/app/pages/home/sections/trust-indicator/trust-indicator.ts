import { Component } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideHeadphones,
  LucideShield,
  LucideTruck,
  type LucideIconInput,
} from '@lucide/angular';

interface TrustSection {
  icon: LucideIconInput;
  title: string;
  description: string;
}

@Component({
  selector: 'app-trust-indicator',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './trust-indicator.html',
})
export class TrustIndicator {
  readonly sections: TrustSection[] = [
    {
      icon: LucideTruck,
      title: 'Free Shipping',
      description: 'On orders over $500',
    },
    {
      icon: LucideShield,
      title: 'Quality Guarantee',
      description: '5-year warranty included',
    },
    {
      icon: LucideHeadphones,
      title: 'Expert Support',
      description: '24/7 customer service',
    },
  ];
}
