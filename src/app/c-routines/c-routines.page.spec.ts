import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRoutinesPage } from './c-routines.page';

describe('CRoutinesPage', () => {
  let component: CRoutinesPage;
  let fixture: ComponentFixture<CRoutinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRoutinesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRoutinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
