import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoDeActuacionComponent } from './campo-de-actuacion.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from '@app/transloco-root.module';

describe('CampoDeActuacionComponent', () => {
  let component: CampoDeActuacionComponent;
  let fixture: ComponentFixture<CampoDeActuacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslocoRootModule, HttpClientModule],
      declarations: [CampoDeActuacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CampoDeActuacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
