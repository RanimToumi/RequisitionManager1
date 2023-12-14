import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTfaComponent } from './register-tfa.component';

describe('RegisterTfaComponent', () => {
  let component: RegisterTfaComponent;
  let fixture: ComponentFixture<RegisterTfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
