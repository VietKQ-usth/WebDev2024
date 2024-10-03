/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Side_bar_infoComponent } from './side_bar_info.component';

describe('Side_bar_infoComponent', () => {
  let component: Side_bar_infoComponent;
  let fixture: ComponentFixture<Side_bar_infoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Side_bar_infoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Side_bar_infoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
