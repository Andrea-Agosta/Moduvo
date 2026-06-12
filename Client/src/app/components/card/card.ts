import { Component, input, computed } from '@angular/core';

import { Product } from '../../services/product/product.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  data= input<Product>()
  childName = input<String>();

  style = {
    category: 'h-48 group-hover:scale-110',
    products:'h-64 group-hover:scale-105'
  }

  imageStyle = computed(() => {
    const key = this.childName();
    return this.style[key as keyof typeof this.style] || '';
  });
}
