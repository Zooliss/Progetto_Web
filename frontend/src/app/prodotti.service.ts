import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  private URLprodotti= `${environment.baseUrl}/api/prodotti`
  private URLofferte= `${environment.baseUrl}/api/offerte`
  constructor(private http: HttpClient) { }

  ottieniprodotti(){
    return this.http.get<any>(this.URLprodotti)
  }

  ottieniofferte(){
    return this.http.get<any>(this.URLofferte)
  }

}
