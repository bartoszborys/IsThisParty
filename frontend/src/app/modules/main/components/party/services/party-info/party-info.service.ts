import { Injectable } from '@angular/core';
import { PartyTagData } from '../../models/party-tag-data.model';
import { Observable, of } from 'rxjs';
import { PartyRouteIdRepositoryService } from '../party-route-id-repository/party-route-id-repository.service';
import { map } from 'rxjs/operators';
import { PartyAdditionalTagData } from '../../models/party-additional-tag-data.model';

@Injectable({
  providedIn: 'root'
})
export class PartyInfoService {
  mockMain: PartyTagData[] = [
    {
      description: "Date",
      value: "20-09-2019"
    },
    {
      description: "Party time!",
      value: "12:00"
    },
    {
      description: "Where",
      value: "Bard home"
    },
    {
      description: "People count",
      value: "12"
    },
  ];
  mockAdditional: PartyAdditionalTagData[] = [
    {
      icon: "🍔",
      description: "Self food",
      remain: null
    },
    {
      icon: "📌",
      description: "Self Alcohol",
      remain: null
    },
    {
      icon: "🛏",
      description: "Sleep",
      remain: "4"
    },
    {
      icon: "🚗",
      description: "Transport",
      remain: "5"
    },
  ];

  constructor(private partyIdRepository: PartyRouteIdRepositoryService) {}

  getMainTags(): Observable<PartyTagData[]> {
    return this.partyIdRepository.getPartyId().pipe(
      map( id => this.mockMain)
    );
  }

  getAdditionalTags(): Observable<PartyAdditionalTagData[]> {
    return this.partyIdRepository.getPartyId().pipe(
      map( id => this.mockAdditional)
    );
  }
}
