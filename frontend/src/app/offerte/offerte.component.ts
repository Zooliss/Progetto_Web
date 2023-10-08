import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../prodotti.service';
import { StrProdotto } from '../StrProdotto';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-offerte',
  templateUrl: './offerte.component.html',
  styleUrls: ['./offerte.component.scss']
})
export class OfferteComponent implements OnInit{

  offerte: StrProdotto[] = [];
  constructor(private ProdottiServ: ProdottiService, private router: Router) { }

  ngOnInit() {
    this.ProdottiServ.ottieniofferte()
      .subscribe(
        res => this.offerte = res,
        err => {
          if(err instanceof HttpErrorResponse){
            if(err.status === 401){
              this.router.navigate(['/accesso'])
            }
          }
        }
      )
  }

}
