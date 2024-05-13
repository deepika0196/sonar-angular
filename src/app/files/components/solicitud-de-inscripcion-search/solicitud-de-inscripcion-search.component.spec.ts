import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudDeInscripcionSearchComponent } from './solicitud-de-inscripcion-search.component';

describe('SolicitudDeInscripcionSearchComponent', () => {
  let component: SolicitudDeInscripcionSearchComponent;
  let fixture: ComponentFixture<SolicitudDeInscripcionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudDeInscripcionSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudDeInscripcionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
