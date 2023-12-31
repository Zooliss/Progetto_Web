import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoComponent } from './accesso/accesso.component'
import { OfferteComponent } from './offerte/offerte.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { authGuard } from './auth.guard';
import { ProfiloComponent } from './profilo/profilo.component';

const routes: Routes = [
  {
    path: 'accesso',
    component: AccessoComponent
  },
  {
    path: 'registrazione',
    component: RegistrazioneComponent
  },
  {
    path: '',
    redirectTo: '/prodotti',
    pathMatch: 'full'
  },
  {
    path: 'prodotti',
    component: ProdottiComponent
  },
  {
    path: 'offerte',
    component: OfferteComponent,
    canActivate: [authGuard]
  },
  {
    path: 'profilo',
    component: ProfiloComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
