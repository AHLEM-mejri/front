import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { BiblioComponent } from './biblio/biblio.component';


const routes: Routes = [
  { path: 'reservation', component: ReservationComponent },
  { path: 'intro', component: BiblioComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
