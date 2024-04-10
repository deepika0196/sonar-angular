import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoDeActuacionComponent } from './campo-de-actuacion.component';

describe('CampoDeActuacionComponent', () => {
  let component: CampoDeActuacionComponent;
  let fixture: ComponentFixture<CampoDeActuacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoDeActuacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoDeActuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
