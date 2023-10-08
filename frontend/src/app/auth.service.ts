import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URLregistrazione= `${environment.baseUrl}/api/registrazione`
  private URLaccesso= `${environment.baseUrl}/api/accesso`
  constructor(private http: HttpClient, private router: Router) { }

  utentedaregistrare(utente: any){
    return this.http.post<any>(this.URLregistrazione, utente)
  }

  utenteconcuiaccedere(utente: any){
    return this.http.post<any>(this.URLaccesso, utente)
  }

  effettuatoaccesso(){
    //la doppia negazione fa ritornare un boolean
    return !!localStorage.getItem('token')
  }

  negatoeffettuatoaccesso(){
    if(!!localStorage.getItem('token')){
      return false
    }else{
      return true
    }
  }

  ottienitoken(){
    return localStorage.getItem('token')
  }

  uscita(){
    localStorage.removeItem('token')
    this.router.navigate(['/prodotti'])
  }
}
