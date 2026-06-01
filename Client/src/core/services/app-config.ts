import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, firstValueFrom, shareReplay } from 'rxjs';

export interface AppConfig {
  serviceUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private http = inject(HttpClient);

  private configSignal = signal<AppConfig | null>(null);
  readonly config = this.configSignal.asReadonly();

  private configRequest$?: Observable<AppConfig>;

  loadConfig(): Promise<AppConfig> {
    return firstValueFrom(this.ensureConfig());
  }

  ensureConfig(): Observable<AppConfig> {
    const cached = this.configSignal();
    if (cached) {
      return new Observable((subscriber) => {
        subscriber.next(cached);
        subscriber.complete();
      });
    }

    if (!this.configRequest$) {
      this.configRequest$ = this.http.get<AppConfig>('/assets/config.json').pipe(
        tap((config) => this.configSignal.set(config)),
        shareReplay(1),
      );
    }

    return this.configRequest$;
  }
}