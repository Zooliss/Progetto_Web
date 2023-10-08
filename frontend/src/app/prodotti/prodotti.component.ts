import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../prodotti.service';
import { StrProdotto } from '../StrProdotto';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent implements OnInit{

  prodotti: StrProdotto[] = [];
  constructor(private ProdottiServ: ProdottiService) { }

  ngOnInit() {
    this.ProdottiServ.ottieniprodotti()
      .subscribe(
        res => this.prodotti = res,
        err => console.log(err)
      )
  }
}
