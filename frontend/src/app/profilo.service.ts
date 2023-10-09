import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProfiloService {

  private URLprofilo= `${environment.baseUrl}/api/profilo`
  private URLeliminaprofilo= `${environment.baseUrl}/api/profilo/elimina`
  constructor(private http: HttpClient) { }

  ottieniutente(){
    return this.http.get<any>(this.URLprofilo)
  }

  eliminautente(){
    console.log("ciao")
    this.http.delete(this.URLeliminaprofilo)
  }

}
