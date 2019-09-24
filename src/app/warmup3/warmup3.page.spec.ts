import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Warmup3Page } from './warmup3.page';

describe('Warmup3Page', () => {
  let component: Warmup3Page;
  let fixture: ComponentFixture<Warmup3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Warmup3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Warmup3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
