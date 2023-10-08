import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

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

  constructor(private auth: AuthService) { }

  registrautente(){
    this.auth.utentedaregistrare(this.datiregistrazione)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
      )
  }

}
