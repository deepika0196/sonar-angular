import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import {
  ArqBasicComponent,
  ArqDatatableColumnsSchema,
  ArqDatatableConfig,
  ArqDatatableSelectEvent,
  ArqDialogService,
  ArqPageableRequest,
  ArqSchemaService,
  ArqSnackBarService,
  ArqSnackBoxOptions,
  MenuItem,
} from 'arq-sdk';
import { forkJoin, map, Observable, of, Subject, takeUntil } from 'rxjs';
import { EjemploService } from '@services/ejemplo.service';

@Component({
  selector: 'app-ejemplo-uso',
  templateUrl: './ejemplo-uso.component.html',
  styleUrls: ['./ejemplo-uso.component.css'],
})
export class EjemploUsoComponent
  extends ArqBasicComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  public destroy$: Subject<boolean> = new Subject<boolean>();
  public genders: any;
  public tableConfig!: ArqDatatableConfig;
  public columns!: ArqDatatableColumnsSchema[];
  public menuItemList!: MenuItem[];
  public languages!: Observable<any>;
  public lang: any;
  public options: ArqSnackBoxOptions = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-bottom-right',
  };
  public inputs: any;
  public fgDependedInputs!: FormGroup;
  public fgDatatable!: FormGroup;
  public editing!: boolean;

  public columnsSchema$!: Observable<any>;

  public tableConfig$!: Observable<any>;

  public user!: any[];

  public pruebaBackResponse!: string;

  constructor(
    public ejemploService: EjemploService,
    private readonly dialogService: ArqDialogService,
    private readonly transloco: TranslocoService,
    private readonly cd: ChangeDetectorRef,
    public override _schemaService: ArqSchemaService,
    private readonly service: ArqSnackBarService,
    private readonly fb: FormBuilder
  ) {
    super(_schemaService, ejemploService);

    this.fgDependedInputs = this.fb.group({
      provincia: ['', [Validators.required]],
      municipio: [{ value: '', disabled: true }, [Validators.required]],
      distrito: [
        { value: '', disabled: true },
        [Validators.required, Validators.maxLength(20)],
      ],
    });

    this.fgDatatable = this.fb.group({
      nombre: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  public override ngOnInit(): void {
    this.lang = this.transloco.getActiveLang();
    this.getTableConfig(this.lang);
    this.getMenu(this.lang);
    this.getLanguage(this.lang);
    this.getColumns(this.lang);

    this.columnsSchema$ = this.ejemploService.getColumnsSchema(this.lang);
    this.tableConfig$ = this.ejemploService.getTableConfig(this.lang);

    forkJoin([
      this.ejemploService.getEntidad(),
      this.ejemploService.getInputsFromBack(),
      this.ejemploService.getGenders(),
      this.ejemploService.getUser(this.lang),
    ])
      .pipe(
        takeUntil(this.destroy$),
        map(([entidad, inputs, gender, user]) => {
          this.service.showSuccess(
            this.transloco.translate('snackbar_txt_success'),
            '',
            this.options
          );
          this.fillForm(this.formGroup, entidad);
          this.inputs = inputs;
          this.genders = of(gender);
          this.user = user;
        })
      )
      .subscribe((error) => {
        console.log(error);

        // this.service.showError(
        //   this.transloco.translate('snackbar_txt_error'),
        //   '',
        //   this.options
        // );
      });
  }

  override ngAfterViewInit() {
    this.cd.detectChanges();
  }

  openDialog(obj: any) {
    this.dialogService.open(obj, null);
    setTimeout(() => {
      this.dialogService.close();
    }, 5000);
  }

  selectIdiom(evt: any) {
    this.lang = evt.code;
    this.transloco.setActiveLang(evt.code);
    this.getLanguage(evt.code);
    this.getTableConfig(evt.code);
    this.getMenu(evt.code);
    this.getColumns(evt.code);
  }

  getLanguage(lang: string) {
    this.languages = this.ejemploService.getLanguage(lang);
  }

  getMenu(lang: any) {
    this.ejemploService
      .getMenu(lang)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.menuItemList = data;
      });
  }

  getColumns(lang: any) {
    this.ejemploService
      .getColumnsSchema(lang)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
        this.columns = data;
      });
  }

  getTableConfig(lang: any) {
    this.ejemploService
      .getTableConfig(lang)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.tableConfig = data;

        this.tableConfig?.actions?.forEach((element: any) => {
          if (element.icon == 'edit') {
            element.action = this.action();
          }
        });
        this.tableConfig.eventRow = this.eventRow;
        // this.tableConfig.eventNewRow = this.eventNewRow;
      });
  }

  public setColumnsSchema(): any {
    return [...this.columns];
  }

  public setTableConfig(): any {
    return { ...this.tableConfig };
  }

  private editRow(row: any, id: string): void {
    console.log(row);
  }

  private eventRow(row: any): void {
    console.log(row);
  }

  public action() {
    return (row: any): any => {
      row.isEdit = !row.isEdit;
      for (const key in row) {
        if (Object.prototype.hasOwnProperty.call(row, key)) {
          this.formGroup.controls[key]?.setValue(row[key]);
        }
      }
      this.editing = true;
      row.newRow = false;
    };
  }

  // private eventNewRow(row: any): any {
  //   const dataModal = {
  //     data: {
  //       row,
  //     },
  //     component: DialogContent,
  //   };

  //   return dataModal;
  // }

  public handleSelectEvent(ev: ArqDatatableSelectEvent): void {
    // eslint-disable-next-line no-console
    console.log(ev);
  }
  public requireData(request: ArqPageableRequest): void {
    this.ejemploService.loadData(request);
  }

  protected obtenerNomMuni(): FormControl<any> {
    const country = this.formGroup.controls['country'] as FormGroup;
    return country.controls['denominacion'] as FormControl;
  }

  protected obtenerCodMun(): FormControl<any> {
    const country = this.formGroup.controls['country'] as FormGroup;
    return country.controls['codigoMunicipio'] as FormControl;
  }

  protected enviar(): void {
    if (this.formGroup.valid) {
      this.entidad = this.fillEntity(this.formGroup);
      this.ejemploService.sendData(this.entidad);

      const objDialog = {
        confirmBtn: true,
        message: 'Se completó con éxito',
        title: 'Éxito',
        type: 'success',
        icon: 'done',
        color: 'text-success',
        textConfirm: 'Aceptar',
      };
      this.openDialog(objDialog);
    } else {
      this.service.showError(
        this.transloco.translate('snackbar_txt_validate'),
        '',
        this.options
      );
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  obtenerRespuestaBack(): void {
    this.ejemploService.pruebaPeticionBack().subscribe({
      next: (v) => {
        this.pruebaBackResponse = v;
      },
      error: (e) => {
        this.pruebaBackResponse = e;
      },
      complete: () => {
        console.log('COMPLETED');
      },
    });
  }

  cambioTab = (tab: number): any => {
    if (tab == 2) {
      this.obtenerRespuestaBack();
    }
  };
}
