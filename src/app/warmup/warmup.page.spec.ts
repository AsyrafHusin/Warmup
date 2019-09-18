import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmupPage } from './warmup.page';

describe('WarmupPage', () => {
  let component: WarmupPage;
  let fixture: ComponentFixture<WarmupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
