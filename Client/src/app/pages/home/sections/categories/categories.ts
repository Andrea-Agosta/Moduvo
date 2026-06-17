import { Component, inject, OnInit, signal } from '@angular/core';

import { CategoryService } from '../../../../services/category/category.service';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories implements OnInit {
  private categoryService = inject(CategoryService);

  categories = this.categoryService.categories
  isCategoryLoading = this.categoryService.isLoading
  error = this.categoryService.error
  
  ngOnInit(): void {
    this.categoryService.categories()
  }
}
