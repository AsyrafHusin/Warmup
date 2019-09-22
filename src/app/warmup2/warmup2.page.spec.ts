import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Warmup2Page } from './warmup2.page';

describe('Warmup2Page', () => {
  let component: Warmup2Page;
  let fixture: ComponentFixture<Warmup2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Warmup2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Warmup2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
