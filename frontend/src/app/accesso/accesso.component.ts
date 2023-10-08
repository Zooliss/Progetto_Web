import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  constructor(private auth: AuthService, private router: Router) { }

  accediconutente(){
    this.auth.utenteconcuiaccedere(this.datiaccesso)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.router.navigate(['/offerte'])
        },
        err => console.log(err),
      )
  }

}
