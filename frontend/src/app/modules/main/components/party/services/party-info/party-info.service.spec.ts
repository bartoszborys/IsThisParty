import { TestBed } from '@angular/core/testing';

import { PartyInfoService } from './party-info.service';

describe('PartyInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartyInfoService = TestBed.get(PartyInfoService);
    expect(service).toBeTruthy();
  });
});
