import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class authGuard implements CanActivate {
  constructor(private AuthServ: AuthService,
    private router: Router) { }

  canActivate(): boolean {
    if (this.AuthServ.effettuatoaccesso()) {
      return true
    } else {          
      this.router.navigate(['/accesso'])
      return false
    }
  }
};