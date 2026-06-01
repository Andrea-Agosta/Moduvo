import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideLucideIcons } from '@lucide/angular';
import { LucideTruck, LucideShield, LucideHeadphones } from '@lucide/angular';

import { routes } from './app.routes';
import { AppConfigService } from '../core/services/app-config';

function initializeAppConfig() {
  const appConfigService = inject(AppConfigService);
  return () => appConfigService.loadConfig();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideLucideIcons(LucideTruck, LucideShield, LucideHeadphones),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppConfig,
      multi: true,
    },
  ],
};
