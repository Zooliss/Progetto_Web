import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-accesso',
  templateUrl: './accesso.component.html',
  styleUrls: ['./accesso.component.scss']
})
export class AccessoComponent {

  datiaccesso = {
    user: "",
    psw: ""
  }

  constructor(private auth: AuthService) { }

  accediconutente(){
    this.auth.utenteconcuiaccedere(this.datiaccesso)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
      )
  }

}
