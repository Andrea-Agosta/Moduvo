import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { LucideFunnel, LucideStar } from "@lucide/angular";

import { ProductsFiltersStore } from '../../state/products-filters.store';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { Slider } from '../../../../components/slider/slider';
import { Button } from '../../../../components/button/button';

@Component({
  selector: 'app-filter-sidebar',
  imports: [Checkbox, Slider, FormsModule, LucideFunnel, LucideStar, Button],
  templateUrl: './filter-sidebar.html',
  styleUrl: './filter-sidebar.scss'
})
export class FilterSidebar implements OnInit {

  store = inject(ProductsFiltersStore);

  ngOnInit() {
    if (!this.store.categories().length) {
      this.store.loadCategories();
    }
  }
}