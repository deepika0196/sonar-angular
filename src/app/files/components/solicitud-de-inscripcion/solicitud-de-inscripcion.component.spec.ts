import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudDeInscripcionComponent } from './solicitud-de-inscripcion.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from '@app/transloco-root.module';

describe('SolicitudDeInscripcionComponent', () => {
  let component: SolicitudDeInscripcionComponent;
  let fixture: ComponentFixture<SolicitudDeInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslocoRootModule, HttpClientModule],
      declarations: [SolicitudDeInscripcionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudDeInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
