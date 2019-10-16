import { Injectable } from '@angular/core';
import { PartyRouteIdRepositoryService } from '../party-route-id-repository/party-route-id-repository.service';
import { PartiesService } from '../../../../services/parties/parties.service';
import { Observable } from 'rxjs';
import { PartyDetails } from '../../models/party-details.model';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  constructor(
    private partyIdRepository: PartyRouteIdRepositoryService,
    private partiesService: PartiesService
  ) { }

  public getCurrentParty(): Observable<PartyDetails>{
    return this.partyIdRepository.getPartyId().pipe( mergeMap( id => this.getParty(id) ) )
  }
  
  private getParty(id: string): Observable<PartyDetails>{
    return this.partiesService.getParties().pipe(
      mergeMap( parties => parties.filter( (party: PartyDetails) => party.id.toString() == id ))
    );
  }
}
