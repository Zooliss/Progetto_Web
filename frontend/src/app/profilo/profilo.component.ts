import { Component, OnInit } from '@angular/core';
import { ProfiloService } from '../profilo.service';
import { StrProfilo } from '../StrProfilo';
import { AuthService } from '../auth.service';

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
  constructor(private ProfiloServ: ProfiloService, private AuthServ: AuthService) { }

  tastoelimina(){
    this.ProfiloServ.eliminautente()
    this.AuthServ.uscita()
  }

  ngOnInit() {
    this.ProfiloServ.ottieniutente()
      .subscribe(
        res => this.datiutente = res,
        err => console.log(err)
      )
  }

}
