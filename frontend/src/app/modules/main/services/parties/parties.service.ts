import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PartyRouteIdRepositoryService } from '../../components/party/services/party-route-id-repository/party-route-id-repository.service';
import { PartyDetails } from '../../components/party/models/party-details.model';
import { parties } from '../../components/party/services/database.mock';

@Injectable({
  providedIn: 'root'
})
export class PartiesService {  
  constructor(
    private partyIdRepository: PartyRouteIdRepositoryService
  ) { }
  
  public setCurrentPartyId(routeInstance: ActivatedRoute){
    this.partyIdRepository.setPartyId(routeInstance);
  }

  public getParties(): Observable<PartyDetails[]> {
    return parties;
  }
}
