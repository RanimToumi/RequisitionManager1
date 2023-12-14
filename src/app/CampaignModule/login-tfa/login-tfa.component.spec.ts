import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTfaComponent } from './login-tfa.component';

describe('LoginTfaComponent', () => {
  let component: LoginTfaComponent;
  let fixture: ComponentFixture<LoginTfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
