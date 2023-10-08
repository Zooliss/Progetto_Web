import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { AccessoComponent } from './accesso/accesso.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { OfferteComponent } from './offerte/offerte.component';
import { AuthService } from './auth.service';

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
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
