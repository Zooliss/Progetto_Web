import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent{

  datiregistrazione = {
    email: "",
    user: "",
    psw: ""
  }

  constructor(private auth: AuthService, private router: Router) { }

  registrautente(){
    this.auth.utentedaregistrare(this.datiregistrazione)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this.router.navigate(['/offerte'])
        },
        err => console.log(err),
      )
  }

}
