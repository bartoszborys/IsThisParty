import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.parties.setCurrentPartyId(this.router);
    this.partyData$ = this.party.getCurrentParty();
  }
}