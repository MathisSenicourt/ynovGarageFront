import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './routing/app-routing/app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
