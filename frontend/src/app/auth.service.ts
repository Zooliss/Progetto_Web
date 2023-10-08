import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URLregistrazione= `${environment.baseUrl}/api/registrazione`
  private URLaccesso= `${environment.baseUrl}/api/accesso`
  constructor(private http: HttpClient) { }

  utentedaregistrare(utente: any){
    return this.http.post<any>(this.URLregistrazione, utente)
  }

  utenteconcuiaccedere(utente: any){
    return this.http.post<any>(this.URLaccesso, utente)
  }

}
