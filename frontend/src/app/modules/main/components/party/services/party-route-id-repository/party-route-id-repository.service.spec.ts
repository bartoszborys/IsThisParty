import { TestBed } from '@angular/core/testing';

import { PartyRouteIdRepositoryService } from './party-route-id-repository.service';

describe('PartyRouteIdRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartyRouteIdRepositoryService = TestBed.get(PartyRouteIdRepositoryService);
    expect(service).toBeTruthy();
  });
});
