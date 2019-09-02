import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyVoteComponent } from './party-vote.component';

describe('PartyVoteComponent', () => {
  let component: PartyVoteComponent;
  let fixture: ComponentFixture<PartyVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
