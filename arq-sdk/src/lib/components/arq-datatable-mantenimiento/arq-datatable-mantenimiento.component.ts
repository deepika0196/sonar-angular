import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Observable, takeUntil } from 'rxjs';

import {
  ArqPageableRequest,
  ArqPageableResponse,
  ArqDatatableConfig,
  ArqDatatableMantenimientoTable,
  ArqBaseComponent,
  ArqDatatableActions,
  ArqDatatableComponent
} from '../../../../public-api';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'arq-datatable-mantenimiento',
  templateUrl: './arq-datatable-mantenimiento.component.html',
  styleUrls: ['./arq-datatable-mantenimiento.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqDatatableMantenimientoComponent extends ArqBaseComponent implements OnInit {
  @Input('tableList') public $tableList!: Observable<ArqDatatableMantenimientoTable[]>;
  @Input() public tableConfig: ArqDatatableConfig = {};
  @Input('selectedTableChange') public _selectedTableChange!: (_table: string) => any;

  @Input('loadDataMantFn') public _loadDataMantFn!: (
    request: ArqPageableRequest,
    table?: string
  ) => Observable<ArqPageableResponse>;

  @Output('loadDataEvent') public loadDataEvent$ = new EventEmitter<{ request: ArqPageableRequest; table: string }>();

  @ViewChild(ArqDatatableComponent) public datatable!: ArqDatatableComponent;

  public dataRequest: ArqPageableRequest = { page: 0, size: this.tableConfig.pageSize || 5 };

  public selectedTable!: ArqDatatableMantenimientoTable | undefined;
  public tableList!: ArqDatatableMantenimientoTable[];
  public tableLoaded = false;

  public fGroup!: FormGroup;
  public editing!: boolean;

  public constructor(private _changeDetector: ChangeDetectorRef, private fb: FormBuilder) {
    super();
  }

  public ngOnInit(): void {
    this.$tableList.pipe(takeUntil(this.unsubscribe$)).subscribe(res => {
      this.tableList = res;
      this.selectedTable = res[0];
      this.generateForm();

      this.tableLoaded = true;
    });

    this.tableConfig?.actions?.forEach((element: ArqDatatableActions) => {
      if (element.inline) {
        element.action = this.action();
      }
    });
  }

  public changeTable(_table: string) {
    this.tableLoaded = false;
    this.editing = false;
    this.selectedTable = this.tableList.find(_ => _.value === _table);
    this.generateForm();
    setTimeout(() => {
      this.tableLoaded = true;
      // Al ejecutar el change detector se provoca el loadData en el datatable
      this._changeDetector.detectChanges();
      if (this._selectedTableChange) {
        this._selectedTableChange(_table);
      }
    }, 1);
  }

  public requireData(request: ArqPageableRequest): void {
    this.loadDataEvent$.emit({ request, table: this.selectedTable?.value || '' });
  }

  public action() {
    return (row: any): any => {
      row.isEdit = !row.isEdit;
      for (const key in row) {
        if (Object.prototype.hasOwnProperty.call(row, key)) {
          this.fGroup?.controls[key]?.setValue(row[key]);
        }
      }
      this.editing = true;
      row.newRow = false;
    };
  }

  public generateForm() {
    this.fGroup = new FormGroup({});
    this.selectedTable?.columnsSchema.forEach(fg => {
      this.fGroup.addControl(fg.key, new FormControl(''));
    });

    if (this.datatable) {
      //TODO: Si cambian fg y fgCopy a privado se produce un error.
      this.datatable.fg = this.fGroup;
      this.datatable.fgCopy = this.fGroup;
    }
  }

  public loadDataMantFn() {
    let loadDataMantFnInherited = this._loadDataMantFn;
    let table = this.selectedTable?.value;
    return (request: ArqPageableRequest): Observable<ArqPageableResponse> => {
      return loadDataMantFnInherited(request, table);
    };
  }
}
