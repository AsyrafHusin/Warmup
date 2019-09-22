import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesSPage } from './routines-s.page';

describe('RoutinesSPage', () => {
  let component: RoutinesSPage;
  let fixture: ComponentFixture<RoutinesSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinesSPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
