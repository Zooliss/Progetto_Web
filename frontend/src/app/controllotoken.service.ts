import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ControllotokenService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }) {
    let authserv = this.injector.get(AuthService)
    let richiestaautenticata = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authserv.ottienitoken()}`
      }
    })
    return next.handle(richiestaautenticata)
  }
  
}
