import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Subject } from 'rxjs';
import {
  PaginatorConfig,
  TableConfig,
} from 'src/app/shared/components/generic-table/generic-table.config';
import { TranslocoHttpLoader } from 'src/app/transloco-root.module';
import { HeaderService } from '../../services/header.service';

interface TableColumns {
  field: string;
  header: string;
  sortable?: boolean;
  class?: string;
}
export type StringEnumLike = string;
@Component({
  selector: 'generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
})
export class GenericTableComponent implements OnInit, OnChanges, OnDestroy {
  constructor(
    private headerService: HeaderService,
    private translateService: TranslocoService,
    private cdr: ChangeDetectorRef,
    private translateHttpLoader: TranslocoHttpLoader
  ) {}

  @Input() data: any[] = [];
  @Input() columns: TableColumns[] = [];

  @Input() tableConfig: TableConfig = {
    rows: 10,
    styleClass: '',
    paginator: false,
    sortable: true,
    tableStyle: { 'min-width': '60rem' },
  };
  @Input() paginatorConfig: PaginatorConfig = {
    showCurrentPageReport: false,
    currentPageReportTemplate:
      'Showing {first} to {last} of {totalRecords} entries',
    class: 'paginator-override',
    rowsPerPageOptions: [10, 25, 50],
  };

  private subscription = new Subject<void>();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changessssssssssssss ', changes);
    if (changes['tableConfig'] && changes['tableConfig'].currentValue) {
      this.tableConfig = changes['tableConfig'].currentValue;
    }
  }

  ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
  }
}
