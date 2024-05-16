import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudDeInscripcionSearchComponent } from './solicitud-de-inscripcion-search.component';
import { TranslocoRootModule } from '@app/transloco-root.module';
import { HttpClientModule } from '@angular/common/http';

describe('SolicitudDeInscripcionSearchComponent', () => {
  let component: SolicitudDeInscripcionSearchComponent;
  let fixture: ComponentFixture<SolicitudDeInscripcionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslocoRootModule, HttpClientModule],
      declarations: [SolicitudDeInscripcionSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudDeInscripcionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
