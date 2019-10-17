import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { PartiesService } from '../../services/parties/parties.service';
import { Observable } from 'rxjs';
import { PartyService } from './services/party/party.service';
import { PartyNavigationButton } from './models/party-navigation-button.model';
import { navigationButtons } from './party.data';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {
  public partyData$: Observable<any>;
  public navigationButtons: PartyNavigationButton[] = navigationButtons;

  constructor(
    private router: ActivatedRoute,
    private party: PartyService,
    private parties: PartiesService
  ) {}

  ngOnInit() {
    console.log(this.navigationButtons);
    this.router.firstChild.url.subscribe( (segment: UrlSegment[]) => {
      const currentPath = (segment.length > 0) ? segment[0].path : "";
      this.markActivatedRoute(currentPath);
    });
    this.parties.setCurrentPartyId(this.router);
    this.partyData$ = this.party.getCurrentParty();
  }

  public markActivatedRoute(routeUrl: string) {
    this.navigationButtons.forEach( item => item.activated = item.routerLink == routeUrl );
  }
}