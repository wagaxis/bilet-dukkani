import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationNoteComponent } from './reservation-note.component';

describe('ReservationNoteComponent', () => {
  let component: ReservationNoteComponent;
  let fixture: ComponentFixture<ReservationNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
