import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sibebar4Component } from './sibebar4.component';

describe('Sibebar4Component', () => {
  let component: Sibebar4Component;
  let fixture: ComponentFixture<Sibebar4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sibebar4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sibebar4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
