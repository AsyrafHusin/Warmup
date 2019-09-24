import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Warmup5Page } from './warmup5.page';

describe('Warmup5Page', () => {
  let component: Warmup5Page;
  let fixture: ComponentFixture<Warmup5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Warmup5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Warmup5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
