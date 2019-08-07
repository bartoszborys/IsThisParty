import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private service: AuthService){}

  ngOnInit(): void{}
  
  logOut(): void{
    this.service.logOut();
    this.service.redirectToSign();
  }
}
