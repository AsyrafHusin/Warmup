import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Warmup4Page } from './warmup4.page';

describe('Warmup4Page', () => {
  let component: Warmup4Page;
  let fixture: ComponentFixture<Warmup4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Warmup4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Warmup4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
