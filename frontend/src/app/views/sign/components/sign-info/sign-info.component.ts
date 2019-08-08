import { Component, OnInit } from '@angular/core';
import { faHandshake, faGlassCheers, faMoneyBillAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-sign-info',
  templateUrl: './sign-info.component.html',
  styleUrls: ['./sign-info.component.scss'],
  animations: [
    trigger('anime', [
      state('false', style({
        opacity: 1,
      })),
      state('true', style({
        opacity: 0
      })),
      transition('true <=> false', animate(750))
    ]),
  ]
})
export class SignInfoComponent implements OnInit {
  public icons: Array<any> = [
    {
      icon: faHandshake,
      message: "Have great time with your friends :)",
      color: "#ffb300"
    },
    {
      icon: faGlassCheers,
      message: "Don't drink too much!",
      color: "red"
    },
    {
      icon: faMoneyBillAlt,
      message: "Get your money back!",
      color: "green"
    }
  ];
  public iconCounter = 0;
  public isOpen = false;
  public arrowDown = faChevronDown;
  
  constructor() { }

  ngOnInit() {
    setInterval( ()=> {
      this.isOpen = !this.isOpen;
    }, 2000);
  }

  changeImage(){
    if(this.isOpen){
      this.iconCounter = Math.floor(Math.random() * this.icons.length);
    }
  }
}
