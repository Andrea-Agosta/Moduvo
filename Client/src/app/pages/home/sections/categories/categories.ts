import { Component, inject, OnInit, signal } from '@angular/core';

import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../services/category.model';
import { Card } from '../../../../components/card/card';

@Component({
  selector: 'app-categories',
  imports: [Card],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories implements OnInit {
  private categoryService = inject(CategoryService);

  categories = signal<Category[]>([]);
  isCategoryLoading = signal<boolean>(true);
  error = signal<any>(null);
  childName = "category"
  
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
