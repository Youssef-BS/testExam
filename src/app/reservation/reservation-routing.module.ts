import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation.component';

const routes: Routes = [{ path: '', component: ReservationComponent } ,
 {path : 'listReservations', component : ListReservationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
