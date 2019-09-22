import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesCPage } from './routines-c.page';

describe('RoutinesCPage', () => {
  let component: RoutinesCPage;
  let fixture: ComponentFixture<RoutinesCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinesCPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinesCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
