import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdInfoPage } from './rd-info.page';

describe('RdInfoPage', () => {
  let component: RdInfoPage;
  let fixture: ComponentFixture<RdInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
