import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsInfoPage } from './rs-info.page';

describe('RsInfoPage', () => {
  let component: RsInfoPage;
  let fixture: ComponentFixture<RsInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
