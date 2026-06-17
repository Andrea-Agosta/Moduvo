import { inject, Injectable, signal } from '@angular/core';
import { finalize, Observable, switchMap } from 'rxjs';

import { Category } from './category.model';
import { CategoryApiService } from './category.api.service';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private api = inject(CategoryApiService);
  readonly categories = signal<Category[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<any>(null);

  private runLoader<T>(request$: Observable<T>, onSuccess: (data: T) => void): void {
    this.isLoading.set(true);
    this.error.set(null);

    request$.pipe(
      finalize(() => this.isLoading.set(false))
    ).subscribe({
      next: (data) => onSuccess(data),
      error: (err) => this.error.set(err)
    });
  }

  loadCategories(): void {
    this.runLoader(this.api.getCategories(), (data) => this.categories.set(data));
  }
}