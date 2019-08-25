import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, animate, group } from '@angular/animations';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
  animations: [
    trigger('authRouteChange', [
      transition('* <=> *', [
        query(':enter', [
          style({transform: "scale(0)"}),
        ]),
        query(':leave', [
          style({position: "absolute", transform: "scale(1)"}),
          animate('250ms ease-out', style({ transform: 'scale(0)'}))
        ], {optional: true}),
        query(':enter', [
          animate('250ms ease-in', style({ transform: 'scale(1)'}))
        ]),
      ])
    ])
  ],
})
export class SignComponent implements OnInit {
  constructor(private service: AuthService) { }

  ngOnInit() {
    if(this.service.isLogged()){
      this.service.redirectToMain();
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
}