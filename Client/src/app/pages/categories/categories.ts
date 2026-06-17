import { Component, inject, OnInit } from '@angular/core';

import { CategoryService } from '../../services/category/category.service';
import { RouterLink } from "@angular/router";
import { LucideArrowRight } from "@lucide/angular";
import { Button } from '../../components/ui/button/button';

@Component({
  selector: 'app-categories',
  imports: [RouterLink, LucideArrowRight, Button],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories implements OnInit {
  private categoryService = inject(CategoryService);
  categories = this.categoryService.categories
  isCategoryLoading = this.categoryService.isLoading
  error = this.categoryService.error

  ngOnInit(): void {
    this.categoryService.loadCategories()
  }
}
