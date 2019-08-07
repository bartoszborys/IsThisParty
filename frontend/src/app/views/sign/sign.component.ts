import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  constructor(private service: AuthService) { }

  ngOnInit() {
    if(this.service.isLogged()){
      this.service.redirectToMain();
    }
  }

  logIn(){
    this.service.logIn();
    this.service.redirectToMain();
  }
}
