import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

import { AppConfigService } from '../../../core/services/app-config';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  private http = inject(HttpClient);
  private appConfigService = inject(AppConfigService);
  
  getCategories(): Observable<Category[]> {
    return this.appConfigService.ensureConfig().pipe(
      switchMap((config) => this.http.get<Category[]>(`${config.serviceUrl}/categories`))
    );
  }
}