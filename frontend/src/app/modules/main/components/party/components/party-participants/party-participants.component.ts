import { Component, OnInit } from '@angular/core';
import { PartiesService } from '../../../services/parties/parties.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-party-participants',
  templateUrl: './party-participants.component.html',
  styleUrls: ['./party-participants.component.scss']
})
export class PartyParticipantsComponent implements OnInit {
  constructor(private service: PartiesService) { }

  ngOnInit() {
  }

}
