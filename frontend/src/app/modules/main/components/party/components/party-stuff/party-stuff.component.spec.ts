import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyStuffComponent } from './party-stuff.component';

describe('PartyStuffComponent', () => {
  let component: PartyStuffComponent;
  let fixture: ComponentFixture<PartyStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
