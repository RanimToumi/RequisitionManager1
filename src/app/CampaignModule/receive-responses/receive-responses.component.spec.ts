import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveResponsesComponent } from './receive-responses.component';

describe('ReceiveResponsesComponent', () => {
  let component: ReceiveResponsesComponent;
  let fixture: ComponentFixture<ReceiveResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveResponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
