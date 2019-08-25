import { Component } from '@angular/core';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeChange', [
      transition('* <=> *', [
        query(':enter', [
          style({opacity: "0"}),
        ]),
        query(':enter, :leave', [
          style({position: "fixed", top: 0, left: 0, width: "100%", height: "100%"}),
        ]),
        group([
          query(':leave', [
            animate('600ms ease', style({ opacity: '0'}))
          ]),
          query(':enter', [
            animate('600ms ease', style({ opacity: '1'}))
          ]),
        ])
      ])
    ])
  ],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
}
