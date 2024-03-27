import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Pipe,
  PipeTransform,
  ViewEncapsulation
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Observable, takeUntil } from 'rxjs';

import { ArqCampo, ArqDynamic } from '../../interfaces/arq-dynamic.interface';
import { ArqList } from '../../interfaces/arq-list.interface';
import { ArqBaseComponent } from '../../utils/arq-base.component';
import { ArqDatatableColumnsSchema, ArqDatatableConfig } from '../components';
import {
  ArqAutocompleteSearchFn,
  ArqPageableRequest,
  ArqPageableResponse
} from './../../interfaces/arq-basic.interface';
import { ArqHttpClient } from './../../services/arq-http-client.service';

@Component({
  selector: 'arq-listado',
  templateUrl: './arq-listado.component.html',
  styleUrls: ['./arq-listado.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqListadoComponent extends ArqBaseComponent implements OnInit, OnDestroy {
  public readonly LANG_ES = 'es';
  public readonly NAME_FC_DP_RANGE = '_2';
  public readonly SEPARATOR_DP_RANGE = '-';
  public readonly REQUERIDO_S = 'S';
  public readonly DATEPICKER_STR = 'datepicker';
  public readonly DATEPICKER_RANGE_STR = 'datepicker-range';
  public readonly SELECT_STR = 'select';
  public readonly SELECT_MULTIPLE_STR = 'select-multiple';
  public readonly AUTOCOMPLETE_STR = 'autocomplete';
  public readonly CHECKBOX_BASIC_STR = 'checkbox-basic';
  public readonly INPUT_MONEY_STR = 'input-money';
  public readonly INPUT_NUMBER_STR = 'input-number';
  private readonly DEPENDIENTE_REQUERIDO: string = '!';
  private readonly SEPARADOR: string = ',';
  private readonly PARAM_REGEXP = /{\d+}/g;

  public fGroup!: FormGroup;

  @Input()
  public urlBaseBack!: string;
  @Output()
  public dataEvent$ = new EventEmitter<ArqDynamic>();
  @Input()
  public observableData!: Observable<any>;

  //Style
  @Input()
  public numCols: string = '3';
  @Input()
  public rowHeight: string = '4:1';

  // Titulos generales
  @Input()
  public label!: string;
  @Input()
  public subLabel!: string;
  @Input()
  public lang: string = this.LANG_ES;

  // Button Export
  @Input()
  public showBtnExport: boolean = false;
  @Input()
  public labelBtnExport!: string;
  @Input()
  public colorBtnExport: string = 'primary';
  @Input()
  public typeBtnExport: string = 'submit';
  @Input()
  public iconBtnExport: string = 'save_alt';
  @Input('btnExportFn')
  public _btnExportFn!: () => any;

  // Button Search
  @Input()
  public showBtnSearch: boolean = false;
  @Input()
  public labelBtnSearch!: string;
  @Input()
  public colorBtnSearch: string = 'primary';
  @Input()
  public typeBtnSearch: string = 'submit';
  @Input()
  public iconBtnSearch: string = 'search';
  @Input('btnSearchFn')
  public _btnSearchFn!: () => any;

  // Inputs
  @Input()
  public msgError: string = 'El campo es obligatorio';

  // Checkbox-basic
  @Input()
  public colorCheckboxBasic: ThemePalette = 'primary';
  @Input()
  public checkedCheckboxBasic?: boolean = false;

  // Datatable
  @Input('loadedData')
  public loadedData$!: Observable<ArqPageableResponse>;
  @Output('loadDataEvent')
  public loadDataEvent$ = new EventEmitter<ArqPageableRequest>();
  @Input('tableConfig')
  public _tableConfig!: ArqDatatableConfig;

  public columnsSchema: ArqDatatableColumnsSchema[] = [];

  public datos!: ArqDynamic;

  public selectOptionsArray = new Map<string, Observable<ArqList[]>>();

  public autocompletetOptionsArray = new Map<String, ArqAutocompleteSearchFn>();

  public grupos: string[] = [];

  public constructor(protected _arqHttpClient: ArqHttpClient) {
    super();
  }

  public ngOnInit(): void {
    this.observableData.pipe(takeUntil(this.unsubscribe$)).subscribe((data: ArqDynamic) => {
      this.datos = data;
      this.datos.campos.sort((a, b) => a.orden - b.orden);
      this.rellenarIds();
      this.obtenerGrupos();
      this.createFormGroup(data.campos);
      this.cargarListados(data.campos);
      this.createColumnSchema(data.campos);
      this.eventRellenarValuesForm();
    });
  }

  /* Creamos un id de tipo string concatenando el id del formulario con el orden */
  private rellenarIds(): void {
    this.datos.campos.forEach(campo => (campo.idCampo = `${campo.id}#${campo.orden}`));
  }

  private obtenerGrupos(): void {
    const gruposUnicos = new Set<string>();
    this.datos.campos.forEach(campo => {
      gruposUnicos.add(campo.grupo);
    });
    this.grupos = Array.from(gruposUnicos);
  }

  /* Rellena los values del ArqDynamic que llega del back con los valores que tienen los controles del formulario
  cada vez que se actualiza uno */
  private eventRellenarValuesForm(): void {
    this.datos.campos.forEach((campo: ArqCampo) => {
      this.fGroup.controls[campo.idCampo].valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
        // Recuperamos el control modificado
        switch (campo.htmlTipo) {
          case this.DATEPICKER_STR:
            campo.value = this.fGroup.controls[campo.idCampo].value?.toDate().toString();
            break;
          case this.DATEPICKER_RANGE_STR:
            // TODO comprobar funcionamiento
            campo.value =
              campo.value && !campo.value?.includes(this.SEPARATOR_DP_RANGE)
                ? campo.value +
                  this.SEPARATOR_DP_RANGE +
                  this.fGroup.controls[campo.idCampo + this.NAME_FC_DP_RANGE].value?.toDate().toString()
                : this.fGroup.controls[campo.idCampo].value?.toDate().toString();
            break;
          case this.SELECT_STR:
          case this.AUTOCOMPLETE_STR:
          case this.SELECT_MULTIPLE_STR:
            if (campo.listaDependiente && campo.value != this.getControlValue(campo.idCampo)) {
              const dependientes: string[] = campo.listaDependiente.split(this.SEPARADOR);
              dependientes.forEach(dependiente => {
                const requerido = dependiente.includes(this.DEPENDIENTE_REQUERIDO);
                const campoDependiente = this.datos.campos.find(
                  c =>
                    c.orden.toString() == (requerido ? dependiente.split(this.DEPENDIENTE_REQUERIDO)[0] : dependiente)
                )!;
                this.fGroup.controls[campoDependiente.idCampo].reset();
                if (requerido) {
                  if (this.puedeHabilitarDependiente(campoDependiente)) {
                    this.fGroup.controls[campoDependiente!.idCampo].enable();
                    this.cargarListado(campoDependiente, true);
                  } else this.fGroup.controls[campoDependiente.idCampo].disable();
                } else {
                  this.cargarListado(campoDependiente, true);
                }
              });
            }
            campo.value = this.getControlValue(campo.idCampo);
            break;
          default:
            campo.value = this.fGroup.controls[campo.idCampo].value;
            break;
        }
        this.dataEvent$.emit(this.datos);
      });
    });
  }

  private getControlValue(idCampo: string): string {
    return this.fGroup.controls[idCampo].value?.hasOwnProperty('value')
      ? this.fGroup.controls[idCampo].value.value
      : this.fGroup.controls[idCampo].value;
  }

  private puedeHabilitarDependiente(campo: ArqCampo): boolean {
    let habilitar: boolean = true;
    const padres: ArqCampo[] = this.datos.campos.filter(c =>
      c.listaDependiente?.includes(campo.orden + this.DEPENDIENTE_REQUERIDO)
    );
    padres.forEach(c => {
      const controlValue = this.getControlValue(c.idCampo);
      if (!controlValue || (Array.isArray(controlValue) && controlValue.length === 0)) {
        // Si el control no tiene value, deshabilitamos
        habilitar = false;
      }
      const condicion: string | null = this.extraerCondicion(c.listaDependiente, campo.orden);
      if (condicion && !condicion.split(this.SEPARADOR).includes(controlValue)) {
        // si no cumple la condición, deshabilitamos
        habilitar = false;
      }
    });
    return habilitar;
  }

  private extraerCondicion(dependientes: string, orden: number): string | null {
    const regex = new RegExp(`${orden}!\\[([^\\]]+)\\]`);
    const coincidencia = dependientes.match(regex);
    if (coincidencia && coincidencia[1]) {
      return coincidencia[1];
    } else {
      return null;
    }
  }

  // TWO-WAY BINDING TABLE DATA LOGIC
  public requireData(request: ArqPageableRequest): void {
    this.loadDataEvent$.emit(request);
  }

  private cargarListados(campos: ArqCampo[]): void {
    campos.forEach((campo: ArqCampo) => this.cargarListado(campo, false));
  }

  private cargarListado(campo: ArqCampo, recargar: boolean): void {
    // miramos si se está recargando el campo y no existe dato variable
    if (recargar && !this.PARAM_REGEXP.test(campo.origenDatos)) return;
    switch (campo.htmlTipo) {
      case this.SELECT_STR:
      case this.SELECT_MULTIPLE_STR:
        // rellenamos los posibles parametros que vengan en la url
        const endpoint = this.rellenarParametrosUrl(this.urlBaseBack + campo.origenDatos);
        this.selectOptionsArray.set(campo.idCampo, this._arqHttpClient.get<ArqList[]>(endpoint));
        break;
      case this.AUTOCOMPLETE_STR:
        // rellenamos los posibles parametros que vengan en la url y anyadimos los de la paginacion
        this.autocompletetOptionsArray.set(campo.idCampo, (request: ArqPageableRequest) => {
          let endpoint = this.rellenarParametrosUrl(this.urlBaseBack + campo.origenDatos);
          endpoint += (endpoint.includes('?') ? '&' : '?') + this.getUrlParamsFromRequest(request);
          return this._arqHttpClient.get<ArqPageableResponse>(endpoint);
        });
        break;
    }
  }

  private rellenarParametrosUrl(url: string): string {
    if (this.PARAM_REGEXP.test(url)) {
      const matches: RegExpMatchArray = url.match(this.PARAM_REGEXP)!;
      for (var match of matches) {
        const campoFiltro = this.datos.campos.find(c => c.orden.toString() === match.replace(/[{}]/g, ''));
        url = url.replace(match, campoFiltro ? this.getControlValue(campoFiltro.idCampo) || '' : '');
      }
    }
    return url;
  }

  private getUrlParamsFromRequest(request: ArqPageableRequest): string {
    return Object.entries(request)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  }

  private createColumnSchema(campos: ArqCampo[]): void {
    if (this.lang === this.LANG_ES) {
      campos.forEach((campo: ArqCampo) => {
        this.addColumnSchema(campo, campo.htmlLabel, this.addTypeColumnSchema(campo));
      });
    } else {
      campos.forEach((campo: ArqCampo) => {
        this.addColumnSchema(campo, campo.htmlLabelVal, this.addTypeColumnSchema(campo));
      });
    }
  }

  private addTypeColumnSchema(campo: ArqCampo): string {
    let type;
    switch (campo.htmlTipo) {
      case this.INPUT_MONEY_STR:
      case this.INPUT_NUMBER_STR:
        type = 'number';
        break;
      case this.DATEPICKER_RANGE_STR:
      case this.DATEPICKER_STR:
        type = 'date';
        break;
      case this.CHECKBOX_BASIC_STR:
        type = 'boolean';
        break;
      default:
        type = 'text';
        break;
    }
    return type;
  }

  private addColumnSchema(campo: ArqCampo, label: string, type: any): void {
    const columnSchema: ArqDatatableColumnsSchema = {
      key: campo.htmlTipo,
      type: type,
      label: label
    };

    this.columnsSchema.push(columnSchema);
  }

  private createFormGroup(campos: ArqCampo[]): void {
    this.fGroup = new FormGroup({});
    campos.forEach((campo: ArqCampo) => {
      if (campo.htmlTipo === this.SELECT_MULTIPLE_STR && campo.value) {
        campo.value = campo.value.split(this.SEPARADOR);
      }
      this.fGroup.addControl(
        campo.idCampo,
        new FormControl(campo.value, [
          campo.htmlRequerido === this.REQUERIDO_S ? Validators.required : Validators.nullValidator
        ])
      );

      // Si es datepicker-range se añade un formControl más para la fecha fin
      if (campo.htmlTipo === this.DATEPICKER_RANGE_STR) {
        this.fGroup.addControl(
          campo.idCampo + this.NAME_FC_DP_RANGE,
          new FormControl(campo.value, [
            campo.htmlRequerido === this.REQUERIDO_S ? Validators.required : Validators.nullValidator
          ])
        );
      }
      // comprobamos si es dependiente de otro campo y este es requerido
      const padreRequerido = this.datos.campos.some(c =>
        c.listaDependiente?.includes(campo.orden + this.DEPENDIENTE_REQUERIDO)
      );
      // Deshabilitamos el campo si procede
      if (campo.disabled || padreRequerido) {
        this.fGroup.controls[campo.idCampo].disable();
      }
    });
  }

  public search(): void {
    this.datos.campos.forEach(campo => {
      this.fGroup.controls[campo.idCampo].markAsTouched();
      this.fGroup.controls[campo.idCampo].updateValueAndValidity();
    });
    if (this.fGroup.valid) {
      this._btnSearchFn();
    } else {
      console.log('Errores en la validación');
    }
  }

  public export(): void {
    this.datos.campos.forEach(campo => {
      this.fGroup.controls[campo.idCampo].markAsTouched();
      this.fGroup.controls[campo.idCampo].updateValueAndValidity();
    });
    if (this.fGroup.valid) {
      this._btnExportFn();
    } else {
      console.log('Errores en la validación');
    }
  }
}

@Pipe({ name: 'filterByGrupo' })
export class FilterByGrupoPipe implements PipeTransform {
  public transform(campos: ArqCampo[], grupo: string): ArqCampo[] {
    return campos.filter(campo => campo.grupo === grupo);
  }
}
