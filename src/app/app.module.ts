import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RechercheComponent } from './recherche/recherche.component';
import { SupprimerComponent } from './supprimer/supprimer.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { BiblioComponent } from './biblio/biblio.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { RechercheParComponent } from './recherche-par/recherche-par.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AjoutComponent,
    ReservationComponent,
    RechercheComponent,
    SupprimerComponent,
    AjouterComponent,
    BiblioComponent,
    SearchbarComponent,
    RechercheParComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
