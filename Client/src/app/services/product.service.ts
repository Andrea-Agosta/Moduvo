import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

import { Product } from './product.model';
import { AppConfigService } from '../../core/services/app-config';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private appConfigService = inject(AppConfigService);

  getProductss(): Observable<Product[]> {
    return this.appConfigService.ensureConfig().pipe(
      switchMap((config) =>
        this.http.get<Product[]>(`${config.serviceUrl}/products`),
      ),
    );
  }
}