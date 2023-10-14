import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfiloService {

  private URLprofilo= `${environment.baseUrl}/api/profilo`
  private URLeliminaprofilo= `${environment.baseUrl}/api/profilo/elimina`
  private URLmodificaprofilo= `${environment.baseUrl}/api/profilo/modifica`
  constructor(private http: HttpClient, private AuthServ: AuthService) { }

  ottieniutente(){
    return this.http.get<any>(this.URLprofilo)
  }

  eliminautente(){
    return this.http.delete<any>(this.URLeliminaprofilo)
  }

  modificautente(utente: any){
    return this.http.put<any>(this.URLmodificaprofilo, utente)
  }

}
