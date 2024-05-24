import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequerimientosSubsanacion } from '@app/basic-maintenance/interfaces/requerimientos-subsanacion';
import { RequerimientosSubsanacionService } from '@app/basic-maintenance/services/requerimientos-subsanacion.service';
import {
  PaginatorConfig,
  TableConfig,
} from '@app/shared/components/generic-table/generic-table.config';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-requerimientos-subsanacion',
  templateUrl: './requerimientos-subsanacion.component.html',
  styleUrls: ['./requerimientos-subsanacion.component.css'],
  providers: [],
})
export class RequerimientosSubsanacionComponent implements OnInit, OnDestroy {
  requerimientosSubsanacions: RequerimientosSubsanacion[];
  cloneRequerimientosSubsanacionRecords: RequerimientosSubsanacion[];

  tableConfig: TableConfig = {
    rows: 10,
    styleClass: 'paginator-override',
    paginator: true,
    sortable: true,
    tableStyle: { 'min-width': '60rem' },
    showDelete: true,
    showEdit: true,
    disableDelete: true,
    disableEdit: true,
  };

  paginatorConfig: PaginatorConfig = {
    showCurrentPageReport: true,
    currentPageReportTemplate: '',
    class: 'paginator-override',
    rowsPerPageOptions: [10, 25, 50],
  };

  columns = [
    {
      field: 'codigo',
      header: 'requerimientosSubsanacion.field_id',
      sortable: true,
      class: 'table-col-width-fix',
    },
    {
      field: 'derequerimiento',
      header: 'requerimientosSubsanacion.field_description',
      sortable: true,
      class: 'table-col-width',
    },
    {
      field: 'derequerimientoVal',
      header: 'requerimientosSubsanacion.field_descriptionVal',
      sortable: true,
      class: 'table-col-width',
    },
    {
      field: 'action',
      header: 'actions.acciones',
      sortable: false,
      class: 'table-col-width-fix',
    },
  ];
  private subscription = new Subject<void>();

  constructor(
    private requerimientosSubsanacionService: RequerimientosSubsanacionService
  ) {}

  codigo = '';

  derequerimiento = '';

  derequerimientoVal = '';

  ngOnInit() {
    this.fetchAllRequerimientosSubsanacion();
  }

  fetchAllRequerimientosSubsanacion() {
    this.requerimientosSubsanacionService
      .getRequerimientosSubsanacions()
      .pipe(takeUntil(this.subscription))
      .subscribe({
        next: (data) => {
          this.requerimientosSubsanacions = data.response;
          this.cloneRequerimientosSubsanacionRecords = data.response;
        },
        error: (err: Error) => console.error(err),
        complete: () => {},
      });
  }

  clearAll() {
    this.codigo = '';
    this.derequerimiento = '';
    this.derequerimientoVal = '';
    this.requerimientosSubsanacions = [
      ...this.cloneRequerimientosSubsanacionRecords,
    ];
  }

  filterHandler() {
    const values = this.cloneRequerimientosSubsanacionRecords.filter(
      (obj: RequerimientosSubsanacion) => {
        let result = false;
        if (obj?.codigo) {
          result = obj.codigo
            .toLowerCase()
            .includes(this.codigo.trim().toLowerCase());
        }
        if (obj?.derequerimiento) {
          result =
            result &&
            obj.derequerimiento
              .toLowerCase()
              .includes(this.derequerimiento.trim().toLowerCase());
        }
        if (obj?.derequerimientoVal) {
          result =
            result &&
            obj.derequerimientoVal
              ?.toLowerCase()
              .includes(this.derequerimientoVal.trim().toLowerCase());
        }
        return result;
      }
    );
    this.requerimientosSubsanacions = [...values];
  }

  ngOnDestroy(): void {
    this.requerimientosSubsanacions = [];
    this.cloneRequerimientosSubsanacionRecords = [];
    this.subscription.next();
    this.subscription.complete();
  }
}
