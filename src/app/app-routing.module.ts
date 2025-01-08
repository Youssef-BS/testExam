import { DetailsMenuComponent } from './details-menu/details-menu.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes =
[
  { path: '', redirectTo : 'home' , pathMatch : 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'details/:id', component: DetailsMenuComponent },
  { path: 'Reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule) },
  { path: 'Menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) } ,
  {path:'**', component:NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
