import { Component, OnInit } from '@angular/core';
import { PartyService } from '../../services/party/party.service';
import { PartyDetails } from '../../models/party-details.model';
import { Observable } from 'rxjs/internal/Observable';
import { PartyInfoService } from '../../services/party-info/party-info.service';
import { PartyTagData } from '../../models/party-tag-data.model';
import { PartyAdditionalTagData } from '../../models/party-additional-tag-data.model';

@Component({
  selector: 'app-party-info',
  templateUrl: './party-info.component.html',
  styleUrls: ['./party-info.component.scss']
})
export class PartyInfoComponent implements OnInit {
  public current$: Observable<PartyDetails>;
  public mainTags$: Observable<PartyTagData[]>;
  public additionalTags$: Observable<PartyAdditionalTagData[]>;

  constructor(
    private partyService: PartyService,
    private partyInfoService: PartyInfoService
  ) { }

  ngOnInit() {
    this.current$ = this.partyService.getCurrentParty();
    this.mainTags$ = this.partyInfoService.getMainTags();
    this.additionalTags$ = this.partyInfoService.getAdditionalTags();
  }
}
