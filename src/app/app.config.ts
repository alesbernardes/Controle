import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    // Define routes for your application
    provideRouter(routes),
    // Enable client-side hydration for a smooth user experience
    provideClientHydration()
  ]
};
