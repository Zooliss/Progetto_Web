import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../prodotti.service';
import { StrProdotto } from '../StrProdotto';

@Component({
  selector: 'app-offerte',
  templateUrl: './offerte.component.html',
  styleUrls: ['./offerte.component.scss']
})
export class OfferteComponent implements OnInit{

  offerte: StrProdotto[] = [];
  constructor(private ProdottiServ: ProdottiService) { }

  ngOnInit() {
    this.ProdottiServ.ottieniofferte()
      .subscribe(
        res => this.offerte = res,
        err => console.log(err)
      )
  }

}
