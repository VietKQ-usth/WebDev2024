/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Side_barComponent } from './side_bar.component';

describe('Side_barComponent', () => {
  let component: Side_barComponent;
  let fixture: ComponentFixture<Side_barComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Side_barComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Side_barComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
