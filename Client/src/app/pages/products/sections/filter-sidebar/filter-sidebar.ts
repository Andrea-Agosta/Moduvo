import { Component, inject, OnInit, signal, input } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { LucideFunnel, LucideStar } from "@lucide/angular";

import { CategoryService } from '../../../../services/category/category.service';
import { Checkbox } from '../../../../components/ui/checkbox/checkbox';
import { Slider } from '../../../../components/ui/slider/slider';
import { Button } from '../../../../components/ui/button/button';

@Component({
  selector: 'app-filter-sidebar',
  imports: [Checkbox, FormsModule, LucideFunnel, Slider, LucideStar, Button],
  templateUrl: './filter-sidebar.html',
  styleUrl: './filter-sidebar.scss',
})
export class FilterSidebar implements OnInit {
  rating = input<number>(0);
  private categoryService = inject(CategoryService);
  selectedCategories = signal<string[]>([]);
  categories = this.categoryService.categories
  isCategoryLoading = this.categoryService.isLoading
  error = this.categoryService.error
  currentPrice = signal<number>(0);
  priceRange = signal<[number, number]>([0, 2000]);

  updatePrice(newValue: number) {
    this.currentPrice.set(newValue);
    this.priceRange.set([newValue, 2000])
  }

  toggleCategory(isChecked: boolean, categoryName: string) {
    if (isChecked) {
      this.selectedCategories.update(current => [...current, categoryName]);
    } else {
      this.selectedCategories.update(current => current.filter(name => name !== categoryName));
    }
  }
  
  ngOnInit(): void {
    this.categoryService.loadCategories()
  }
}

function loadCategories() {
  throw new Error('Function not implemented.');
}
