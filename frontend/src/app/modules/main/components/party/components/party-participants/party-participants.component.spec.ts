import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyParticipantsComponent } from './party-participants.component';

describe('PartyParticipantsComponent', () => {
  let component: PartyParticipantsComponent;
  let fixture: ComponentFixture<PartyParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
