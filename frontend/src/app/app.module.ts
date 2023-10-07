import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { AccessoComponent } from './accesso/accesso.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { OfferteComponent } from './offerte/offerte.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    AccessoComponent,
    ProdottiComponent,
    OfferteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
