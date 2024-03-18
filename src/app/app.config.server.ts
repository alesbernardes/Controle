import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // Add other server-specific providers as needed, e.g., for environment-specific configurations
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

