import { Component, OnInit } from '@angular/core';
import { PartiesService } from '../../../services/parties/parties.service';

@Component({
  selector: 'app-party-info',
  templateUrl: './party-info.component.html',
  styleUrls: ['./party-info.component.scss']
})
export class PartyInfoComponent implements OnInit {
  public currentParty: any;
  constructor(private service: PartiesService) { }

  ngOnInit() {
    this.currentParty = this.service.getCurrentParty();
  }

}
