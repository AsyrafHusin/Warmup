import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Warmup1Page } from './warmup1.page';

describe('Warmup1Page', () => {
  let component: Warmup1Page;
  let fixture: ComponentFixture<Warmup1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Warmup1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Warmup1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
