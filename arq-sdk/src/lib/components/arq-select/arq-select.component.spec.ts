import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ArqSelectComponent } from './arq-select.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArqFormControlErrorModule, ArqList } from '@arq-sdk';
import { of } from 'rxjs';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSelectHarness } from '@angular/material/select/testing';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ArqSelectComponent', () => {
  let component: ArqSelectComponent;
  let fixture: ComponentFixture<ArqSelectComponent>;
  let loader: HarnessLoader;
  let formGroup: FormGroup;

  const valencia: ArqList = { value: '46', description: 'Valencia', descriptionV: 'Valencia' };
  const castellon: ArqList = { value: '12', description: 'Castellón', descriptionV: 'Castellón' };
  const alicante: ArqList = { value: '03', description: 'Alicante', descriptionV: 'Alicante' };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTooltipModule,
        ArqFormControlErrorModule,
        TranslocoModule,
        BrowserAnimationsModule
      ],
      declarations: [ArqSelectComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArqSelectComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    component.disabled = false;
    component.emptyOption = false;
    component.showValue = false;
    component.selectOptionsList = of([alicante, castellon, valencia]);
    formGroup = new FormGroup({ provincia: new FormControl('') });
  });

  const prepareValueComponent = (cmp: any, value: any) => {
    cmp.fGroup = formGroup;
    cmp.value = 'provincia';
    cmp.fullObject = false;
    cmp.fGroup.controls[cmp.value].value = structuredClone(value);
    cmp.ngOnInit();
  };

  const prepareFullObjectComponent = (cmp: any, value: any) => {
    /* Cuando se usaba FormGroup dentro del FormGroup principal

    formGroup.setControl(
      'provincia',
      new FormGroup({
        value: new FormControl(''),
        description: new FormControl(''),
        descriptionV: new FormControl('')
      })
    );*/
    cmp.fGroup = formGroup;
    cmp.value = 'provincia';
    cmp.fGroup.controls[cmp.value].value = structuredClone(value);
    cmp.ngOnInit();
  };

  it('Select de valor, deberia tener valor recibiendo al inicio valor', () => {
    prepareValueComponent(component, valencia.value);
    expect(formGroup.controls[component.value].value).toBe(valencia.value);
  });

  it('Select de valor, deberia tener valor null recibiendo al inicio null', () => {
    prepareValueComponent(component, null);
    expect(formGroup.controls[component.value].value).toBe(null);
  });

  it('Select de valor, deberia mostrarse la descripcion', async () => {
    prepareValueComponent(component, valencia.value);

    const select = await loader.getHarness(MatSelectHarness);
    expect((await select.getValueText()).toString()).toEqual(valencia.description);
  });

  it('Select de valor, deberia saltar excepción si no recibe un valor primitivo o vacio', () => {
    const msg = 'El valor del select no acepta objetos, solo valores primitivos';
    expect(() => prepareValueComponent(component, valencia.value)).not.toThrowError(msg);
    expect(() => prepareValueComponent(component, 5)).not.toThrowError(msg);
    expect(() => prepareValueComponent(component, undefined)).not.toThrowError(msg);
    expect(() => prepareValueComponent(component, null)).not.toThrowError(msg);
    expect(() => prepareValueComponent(component, '')).not.toThrowError(msg);
    expect(() => prepareValueComponent(component, { cosa: '' })).toThrowError(msg);
    expect(() => prepareValueComponent(component, { value: 'x' })).toThrowError(msg);
    expect(() => prepareValueComponent(component, valencia)).toThrowError(msg);
  });

  it('Select de valor, deberia tener valor al clicar sobre un elemento de la lista', async () => {
    prepareValueComponent(component, valencia.value);

    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    const option = await select.getOptions({ text: castellon.description });
    await option[0].click();
    expect(formGroup.controls[component.value].value).toBe(castellon.value);
  });

  it('Select fullObject, deberia tener valor ArqList recibiendo al inicio ArqList', () => {
    prepareFullObjectComponent(component, valencia);
    expect(formGroup.controls['provincia'].value).toEqual(valencia);
  });

  it('Select fullObject, deberia tener valor null recibiendo al inicio null', () => {
    prepareFullObjectComponent(component, null);
    expect(formGroup.controls['provincia'].value).toEqual(null);
  });

  it('Select fullObject, deberia mostrarse descripción', async () => {
    prepareFullObjectComponent(component, valencia);

    const select = await loader.getHarness(MatSelectHarness);
    expect((await select.getValueText()).toString()).toEqual(valencia.description);
  });

  it('Select fullObject, deberia saltar excepción recibiendo al inicio un string/primitivo no vacio', () => {
    const msg = 'El valor del select debe debe heredar de ArqList (con propiedades value, description, descriptionV)';
    expect(() => prepareFullObjectComponent(component, valencia.value)).toThrowError(msg);
    expect(() => prepareFullObjectComponent(component, 5)).toThrowError(msg);
    expect(() => prepareFullObjectComponent(component, undefined)).not.toThrowError(msg);
    expect(() => prepareFullObjectComponent(component, null)).not.toThrowError(msg);
    expect(() => prepareFullObjectComponent(component, '')).not.toThrowError(msg);
    expect(() => prepareFullObjectComponent(component, { cosa: '' })).toThrowError(msg);
    expect(() => prepareFullObjectComponent(component, { value: 'x' })).not.toThrowError(msg);
    expect(() => prepareFullObjectComponent(component, valencia)).not.toThrowError(msg);
  });

  it('Select fullObject, deberia tener valor ArqList al clicar sobre un elemento de la lista', async () => {
    prepareFullObjectComponent(component, valencia);
    expect(component.fGroup.controls[component.value].value).toEqual(valencia);

    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    const option = await select.getOptions({ text: castellon.description });
    await option[0].click();
    expect(formGroup.controls['provincia'].value).toEqual(castellon);
  });
});
