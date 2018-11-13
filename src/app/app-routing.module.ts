import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './views/home/home.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
    HomeComponent
];
