import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTimerPage } from './start-timer.page';

describe('StartTimerPage', () => {
  let component: StartTimerPage;
  let fixture: ComponentFixture<StartTimerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTimerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
