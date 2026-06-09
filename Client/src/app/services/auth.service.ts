import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

import { User } from '../store/auth/auth.actions';
import { AppConfigService } from '../../core/services/app-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private appConfigService = inject(AppConfigService);
  private httpOptions = { withCredentials: true };

  // TODO: check this when the Beckend functionality is avaleable

  // verification if cookie JWT from browser is valid
  checkStatus(): Observable<User> {
    return this.appConfigService.ensureConfig().pipe(
      switchMap((config) =>
        this.http.get<User>(`${config.serviceUrl}/auth/me`, this.httpOptions)
      )
    );
  }

  login(email: string, password: string): Observable<User> {
    return this.appConfigService.ensureConfig().pipe(
      switchMap((config) =>
        this.http.post<User>(
          `${config.serviceUrl}/auth/login`, 
          { email, password }, 
          this.httpOptions
        )
      )
    );
  }

  signup(email: string, password: string, name: string): Observable<User> {
    return this.appConfigService.ensureConfig().pipe(
      switchMap((config) =>
        this.http.post<User>(
          `${config.serviceUrl}/auth/signup`, 
          { email, password, name }, 
          this.httpOptions
        )
      )
    );
  }

  logout(): Observable<void> {
    return this.appConfigService.ensureConfig().pipe(
      switchMap((config) =>
        this.http.post<void>(`${config.serviceUrl}/auth/logout`, {}, this.httpOptions)
      )
    );
  }
}
