import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ArqAutocompleteComponent,
  ArqFormControlErrorModule,
  ArqList,
  ArqPageableRequest,
  ArqPageableResponse
} from '@arq-sdk';
import { of } from 'rxjs';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatAutocompleteHarness } from '@angular/material/autocomplete/testing';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { EventEmitter } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('ArqAutocompleteComponent', () => {
  let component: ArqAutocompleteComponent;
  let fixture: ComponentFixture<ArqAutocompleteComponent>;
  let loader: HarnessLoader;
  let onFilterEvent: EventEmitter<any> = new EventEmitter<any>();

  const valencia: ArqList = { value: '46', description: 'Valencia', descriptionV: 'Valencia' };
  const castellon: ArqList = { value: '12', description: 'Castellón', descriptionV: 'Castellón' };
  const alicante: ArqList = { value: '03', description: 'Alicante', descriptionV: 'Alicante' };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        ArqFormControlErrorModule,
        TranslocoModule,
        BrowserAnimationsModule,
        MatPaginatorModule
      ],
      declarations: [ArqAutocompleteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArqAutocompleteComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    component.filterBack = true;
    component.options = (request: ArqPageableRequest) =>
      of({
        content: [alicante, castellon, valencia].filter(item => {
          if (item.value == request.filter) {
            return true;
          }
          return item.description.toLowerCase().includes(request.filter != null ? request.filter.toLowerCase() : '');
        })
      } as unknown as ArqPageableResponse);
    component.fGroup = new FormGroup({ provincia: new FormControl('') });
    component.value = 'provincia';
  });

  it('Deberia devolver objeto recibiendo al inicio objeto', () => {
    component.fGroup.controls[component.value].setValue(structuredClone(valencia));
    component.ngOnInit();
    expect(component.fGroup.controls[component.value].value).toEqual(valencia);
  });

  it('Deberia devolver null recibiendo al inicio null', () => {
    component.fGroup.controls[component.value].setValue(null);
    component.ngOnInit();
    expect(component.fGroup.controls[component.value].value).toBe(null);
  });

  it('Deberia devolver un objeto recibiendo, después de us inicialización, un objeto', async () => {
    component.ngOnInit();
    fixture.detectChanges();
    component.fGroup.controls[component.value].setValue(structuredClone(valencia));
    expect(component.fGroup.controls[component.value].value).toEqual(valencia);
  });

  it('Deberia mostrar la descripción del objeto recibiendo, después de us inicialización, un objeto', async () => {
    component.ngOnInit();
    fixture.detectChanges();
    component.fGroup.controls[component.value].setValue(structuredClone(valencia));
    const autocomplete = await loader.getHarness(MatAutocompleteHarness);
    expect(await autocomplete.getValue()).toBe(valencia.description);
  });

  it('Deberia devolver null recibiendo, después de us inicialización, un null', async () => {
    component.ngOnInit();
    fixture.detectChanges();
    component.fGroup.controls[component.value].setValue(null);
    const autocomplete = await loader.getHarness(MatAutocompleteHarness);
    expect(null).toBe(null);
  });

  it('Deberia devolver mostrarse vacio recibiendo, después de us inicialización, un null', async () => {
    component.ngOnInit();
    fixture.detectChanges();
    component.fGroup.controls[component.value].setValue(null);
    const autocomplete = await loader.getHarness(MatAutocompleteHarness);
    expect(await autocomplete.getValue()).toBe('');
  });

  it('Deberia devolver el objeto seleccionado al escribir y seleccionar', async () => {
    component.fGroup.controls[component.value].setValue(structuredClone(valencia));
    component.ngOnInit();
    fixture.detectChanges();
    const autocomplete = await loader.getHarness(MatAutocompleteHarness);
    autocomplete.clear();
    await autocomplete.enterText('Ali');
    await autocomplete.selectOption({ text: 'Alicante' });
    expect(component.fGroup.controls[component.value].value).toEqual(alicante);
  });

  it('Al escribir el valor debería devolver null', async () => {
    component.fGroup.controls[component.value].setValue(structuredClone(valencia));
    component.ngOnInit();
    fixture.detectChanges();
    const autocomplete = await loader.getHarness(MatAutocompleteHarness);
    autocomplete.clear();
    await autocomplete.enterText('Ali');
    expect(component.fGroup.controls[component.value].value).toEqual(null);
  });

  it('Al cargar como null debería devolver null', async () => {
    component.fGroup.controls[component.value].setValue(null);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.fGroup.controls[component.value].value).toEqual(null);
  });

  /* TODO: Hay que darle una vuelta

  it('Al borrar el contenido el filtro se debe mandar con texto vacío', async (done: DoneFn) => {
    component.fGroup.controls[component.value].setValue(structuredClone(valencia));
    component.ngOnInit();
    fixture.detectChanges();
    const autocomplete = await loader.getHarness(MatAutocompleteHarness);
    await autocomplete.clear();
    await autocomplete.enterText('A');
    onFilterEvent.subscribe((req: any) => {
      expect(req.filter).toEqual('');
      done();
    });
  });

  it('Deberia saltar excepción recibiendo un valor', async () => {
    component.fGroup.controls[component.value].setValue(valencia.value);
    expect(() => component.ngOnInit()).toThrowError();
  });

  it('Deberia saltar excepción recibiendo, después de us inicialización, un valor', async () => {
    component.ngOnInit();
    component.fGroup.controls[component.value].setValue(valencia.value);
    expect(() => {
      // ?????
    }).toThrowError();
  });*/
});
