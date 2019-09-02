import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PartyRouteIdRepositoryService {
  private partyId: Observable<string>;
  constructor() { }
  
  public getPartyId(): Observable<string>{
    return this.partyId;
  }

  public setPartyId(routeInstance: ActivatedRoute): void{
    this.partyId = routeInstance.paramMap.pipe(
      map( params => params.get('id') )
    )
  }
}
