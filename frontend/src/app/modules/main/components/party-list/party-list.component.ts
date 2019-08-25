import { Component, OnInit } from '@angular/core';
import { PartiesService } from '../../services/parties/parties.service';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.scss']
})
export class PartyListComponent implements OnInit {
  public mockData: any[];
  constructor(private service: PartiesService) { }

  ngOnInit() {
    this.mockData = this.service.getParties();
  }
}
