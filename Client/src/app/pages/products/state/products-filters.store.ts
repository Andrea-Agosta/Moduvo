import { Injectable, inject, signal } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../services/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsFiltersStore {

  private categoryService = inject(CategoryService);

  categories = signal<Category[]>([]);
  selectedCategories = signal<string[]>([]);

  currentPrice = signal<number>(0);
  priceRange = signal<[number, number]>([0, 2000]);

  isLoading = signal(false);
  error = signal<any>(null);

  loadCategories() {
    this.isLoading.set(true);

    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: (err) => {
        this.error.set(err);
        this.isLoading.set(false);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  toggleCategory(isChecked: boolean, categoryName: string) {
    if (isChecked) {
      this.selectedCategories.update(current => [
        ...current,
        categoryName
      ]);
    } else {
      this.selectedCategories.update(current =>
        current.filter(name => name !== categoryName)
      );
    }
  }

  updatePrice(value: number) {
    this.currentPrice.set(value);
    this.priceRange.set([value, 2000]);
  }
}