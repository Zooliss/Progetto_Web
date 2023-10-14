import { Component, OnInit } from '@angular/core';
import { ProfiloService } from '../profilo.service';
import { StrProfilo } from '../StrProfilo';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent {

  datiutente: StrProfilo[] = [{
    email: "",
    user: "",
    psw: ""
  }]
  datiaccesso = {
    email: "",
    psw: ""
  }
  inmodifica = 1
  constructor(private ProfiloServ: ProfiloService, private AuthServ: AuthService, private router: Router) { }

  tastoelimina() {
    this.ProfiloServ.eliminautente()
      .subscribe(
        res => res,
        err => console.log(err)
      )
    this.AuthServ.uscita()
  }

  tastomodificautente() {
    this.ProfiloServ.modificautente(this.datiaccesso)
      .subscribe(
        res => res,
        err => console.log(err)
      )
    this.inmodifica = 1
    window.location.reload();
  }

  tastomodifica() {
    this.inmodifica = 0
  }

  tastoindietro() {
    this.inmodifica = 1
  }

  sonoinmodifica() {
    if (this.inmodifica == 0) {
      return false;
    } else {
      return true;
    }
  }

  nonsonoinmodifica() {
    if (this.inmodifica == 0) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.ProfiloServ.ottieniutente()
      .subscribe(
        res => this.datiutente = res,
        err => console.log(err)
      )
  }

}
