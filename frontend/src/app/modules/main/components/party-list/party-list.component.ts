import { Component, OnInit } from '@angular/core';
import { PartiesService } from '../party/services/parties/parties.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.scss']
})
export class PartyListComponent implements OnInit {
  public mockData: Observable<any>;
  constructor(private service: PartiesService) { }

  ngOnInit() {
    this.mockData = this.service.getParties();
  }
}
