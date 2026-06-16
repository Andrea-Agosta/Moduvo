import { Component, inject, OnInit, signal, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { LucideFunnel, LucideStar } from "@lucide/angular";

import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../services/category.model';
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
  @Input() rating: number = 0;
  private categoryService = inject(CategoryService);
  selectedCategories = signal<string[]>([]);
  categories = signal<Category[]>([]);
  isCategoryLoading = signal<boolean>(true);
  error = signal<any>(null);
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
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: (err) => {
        this.error.set(err);
        this.isCategoryLoading.set(false);
      },
      complete: () => {
        this.isCategoryLoading.set(false);
      }
    });
  }
}