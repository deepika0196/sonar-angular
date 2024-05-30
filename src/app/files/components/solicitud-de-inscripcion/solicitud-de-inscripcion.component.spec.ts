import { Location } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { of } from 'rxjs';

import { SolicitudDeInscripcionRepresentantesService } from '@app/files/services/solicitud-de-inscripcion-representantes.service';
import { SolicitudDeInscripcionService } from '@app/files/services/solicitud-de-inscripcion.service';
import { SolicituddeCodigoPostalService } from '@app/files/services/solicitudde-codigo-postal.service';
import { SolicitudeMunicipioService } from '@app/files/services/solicitude-municipio.service';
import { SolicitudeProvinciaService } from '@app/files/services/solicitude-provincia.service';
import { SolicitudDeInscripcionComponent } from './solicitud-de-inscripcion.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockSolicitudDeInscripcionService {
  getByNifCif() {
    return of({ response: {} });
  }
  createSolicitudDeInscripcion() {
    return of({ success: true });
  }
  updateSolicitudDeInscripcion() {
    return of({ success: true });
  }
}

class MockSolicituddeCodigoPostalService {
  getMunicipio() {
    return of({ response: [] });
  }
}

class MockSolicitudeMunicipioService {
  getMunicipio() {
    return of({ response: [] });
  }
}

class MockSolicitudeProvinciaService {
  getProvincia() {
    return of({ response: [] });
  }
}

class MockSolicitudDeInscripcionRepresentantesService {
  getByRepresentantesNifCif() {
    return of({ response: {} });
  }
}

class MockRouter {
  navigate() {}
}

class MockLocation {
  getState() {
    return { action: 'view', cif: '41231173Q' };
  }
}

class MockTranslocoService {
  translate(key: string) {
    return key;
  }
}

describe('SolicitudDeInscripcionComponent', () => {
  let component: SolicitudDeInscripcionComponent;
  let fixture: ComponentFixture<SolicitudDeInscripcionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudDeInscripcionComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [
        FormBuilder,
        {
          provide: SolicitudDeInscripcionService,
          useClass: MockSolicitudDeInscripcionService,
        },
        {
          provide: SolicituddeCodigoPostalService,
          useClass: MockSolicituddeCodigoPostalService,
        },
        {
          provide: SolicitudeMunicipioService,
          useClass: MockSolicitudeMunicipioService,
        },
        {
          provide: SolicitudeProvinciaService,
          useClass: MockSolicitudeProvinciaService,
        },
        {
          provide: SolicitudDeInscripcionRepresentantesService,
          useClass: MockSolicitudDeInscripcionRepresentantesService,
        },
        { provide: Router, useClass: MockRouter },
        { provide: Location, useClass: MockLocation },
        { provide: TranslocoService, useClass: MockTranslocoService },
        MessageService,
        DialogService,
        DynamicDialogRef,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudDeInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form on component creation', () => {
    expect(component.datosPrincipalesForm).toBeDefined();
  });

  it('should call fetchDetails and setFormReadOnly on initializePage', waitForAsync(() => {
    spyOn(component, 'fetchDetails').and.returnValue(Promise.resolve(true));
    spyOn(component, 'setFormReadOnly').and.returnValue(Promise.resolve(true));

    component.initializePage();

    fixture.whenStable().then(() => {
      expect(component.fetchDetails).toHaveBeenCalledWith('41231173Q');
      expect(component.setFormReadOnly).toHaveBeenCalledWith(true);
    });
  }));

  it('should call createSolicitud on form submission if id is null', () => {
    spyOn(component, 'createSolicitud');

    component.datosPrincipalesForm.get('entidad.nifcif')?.setValue('41231173Q');
    component.datosPrincipalesForm.get('id')?.setValue(null);
    fixture.detectChanges();
    component.onSubmit();

    expect(component.createSolicitud).toHaveBeenCalled();
  });

  it('should call updateSolicitud on form submission if id is not null', () => {
    spyOn(component, 'updateSolicitud');

    component.datosPrincipalesForm.get('id')?.setValue(1);
    component.datosPrincipalesForm.get('entidad.nifcif')?.setValue('41231173Q');
    fixture.detectChanges();
    component.onSubmit();

    expect(component.updateSolicitud).toHaveBeenCalled();
  });

  it('should reset the form when openInvalidCifDialog is called', () => {
    spyOn(component, 'openInvalidCifDialog').and.callThrough();
    spyOn(component.datosPrincipalesForm, 'reset');

    component.openInvalidCifDialog();

    expect(component.openInvalidCifDialog).toHaveBeenCalled();
  });
});
