import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Warmup6Page } from './warmup6.page';

describe('Warmup6Page', () => {
  let component: Warmup6Page;
  let fixture: ComponentFixture<Warmup6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Warmup6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Warmup6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
