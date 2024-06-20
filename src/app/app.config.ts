import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import {provideHttpClient} from "@angular/common/http";

import { routes } from './routing/app-routing/app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
