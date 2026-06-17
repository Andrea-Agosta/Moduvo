import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

import { Product } from './product.model';
import { AppConfigService } from '../../../core/services/app-config';


@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  private http = inject(HttpClient);
  private appConfigService = inject(AppConfigService);

  getProducts(): Observable<Product[]> {
    return this.appConfigService.ensureConfig().pipe(
      switchMap((config) => this.http.get<Product[]>(`${config.serviceUrl}/products`))
    );
  }

  getProductById(id: string): Observable<Product> {
    return this.appConfigService.ensureConfig().pipe(
      switchMap((config) => this.http.get<Product>(`${config.serviceUrl}/products/${id}`))
    );
  }

  getProductDeals(): Observable<Product[]> {
    return this.appConfigService.ensureConfig().pipe(
      switchMap((config) => this.http.get<Product[]>(`${config.serviceUrl}/products/deals`))
    );
  }

  getProductDealsDuration(): Observable<string> {
    return this.appConfigService.ensureConfig().pipe(
      switchMap((config) => this.http.get<string>(`${config.serviceUrl}/products/deals/duration`))
    );
  }
}
