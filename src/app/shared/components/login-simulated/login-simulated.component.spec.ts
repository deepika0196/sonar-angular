import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSimulatedComponent } from './login-simulated.component';

describe('LoginSimulatedComponent', () => {
  let component: LoginSimulatedComponent;
  let fixture: ComponentFixture<LoginSimulatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSimulatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSimulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
