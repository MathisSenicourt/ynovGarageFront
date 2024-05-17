import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRoutes} from '../app-routes.enum';

import {ShowroomComponent} from "../../pages/showroom/showroom.component";


export const routes: Routes = [
  {path: AppRoutes.SHOWROOM, component: ShowroomComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
