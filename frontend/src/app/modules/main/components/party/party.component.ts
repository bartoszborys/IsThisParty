import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PartiesService } from '../../services/parties/parties.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent implements OnInit {
  public partyData: any;
  constructor(private router: ActivatedRoute, private service: PartiesService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(
      (params: ParamMap) => this.partyData = this.service.getParty( params.get('id') )[0]
    )
  }
}
