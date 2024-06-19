import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRoutes} from '../app-routes.enum';

import { ShowroomComponent } from "../../pages/showroom/showroom.component";
import { SalesComponent } from '../../pages/sales/sales.component';


export const routes: Routes = [
  {path: AppRoutes.SHOWROOM, component: ShowroomComponent},
  {path: AppRoutes.SALES, component: SalesComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
