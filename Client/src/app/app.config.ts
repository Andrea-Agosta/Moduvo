import {
  provideAppInitializer,
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideLucideIcons } from '@lucide/angular';
import { LucideTruck, LucideShield, LucideHeadphones } from '@lucide/angular';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { AppConfigService } from '../core/services/app-config';
import { cartReducer } from './store/cart/cart.reducer';
import { authReducer } from './store/auth/auth.reducer';
import { AuthEffects } from './store/auth/auth.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideLucideIcons(LucideTruck, LucideShield, LucideHeadphones),
    provideRouter(routes),
    provideAppInitializer(() => {
      const appConfigService = inject(AppConfigService);
      return appConfigService.loadConfig();
    }),
    provideStore({
      cart: cartReducer,
      auth: authReducer,
    }),
    provideEffects(AuthEffects),
  ],
};
