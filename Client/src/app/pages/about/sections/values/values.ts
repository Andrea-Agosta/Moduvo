import { Component } from '@angular/core';
import { LucideHeart, LucideShield, LucideTruck, LucideUsers } from '@lucide/angular';

type IconType = 'heart' | 'truck' | 'shield' | 'users';

interface FeatureValue {
  icon: IconType;
  title: string;
  description: string;
}

@Component({
  selector: 'app-values',
  imports: [LucideHeart, LucideTruck, LucideShield, LucideUsers],
  templateUrl: './values.html',
  styleUrl: './values.scss',
})
export class Values {
  values: FeatureValue[] = [
    {
      icon: 'heart',
      title: "Quality Craftsmanship",
      description: "Every piece is carefully selected and crafted with attention to detail and durability."
    },
    {
      icon: 'truck',
      title: "Fast Delivery",
      description: "Free delivery on orders over $500 with professional white-glove service available."
    },
    {
      icon: 'shield',
      title: "Satisfaction Guarantee",
      description: "30-day return policy and lifetime customer support for all our furniture pieces."
    },
    {
      icon: 'users',
      title: "Family Owned",
      description: "A family business serving customers for over 25 years with personalized service."
    }
  ];
}
