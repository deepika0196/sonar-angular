import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@ngneat/transloco';
import { Subject, takeUntil } from 'rxjs';
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
  providers: [TranslocoDirective],
})
export class GenericTableComponent<T> implements OnInit, OnChanges, OnDestroy {
  translate: TranslocoService;
  constructor(
    private headerService: HeaderService,
    private translateService: TranslocoService,
    private cdr: ChangeDetectorRef,
    private translateHttpLoader: TranslocoHttpLoader
  ) {
    this.translate = translateService;
  }

  @Input() data: T[] = [];
  @Input() columns: TableColumns[] = [];

  @Output() openEdit: EventEmitter<T> = new EventEmitter();

  @Output() openDelete: EventEmitter<T> = new EventEmitter();

  @Input() tableConfig: TableConfig = {
    rows: 10,
    styleClass: '',
    paginator: false,
    sortable: true,
    tableStyle: { 'min-width': '60rem' },
  };
  @Input() paginatorConfig: PaginatorConfig = {
    showCurrentPageReport: true,
    class: 'paginator-override',
    currentPageReportTemplate: '',
    rowsPerPageOptions: [10, 25, 50],
  };

  private subscription = new Subject<void>();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableConfig'] && changes['tableConfig'].currentValue) {
      this.tableConfig = changes['tableConfig'].currentValue;
    }
  }

  onDelete(item: T) {
    this.openDelete.emit(item);
  }

  onEdit(item: T) {
    this.openEdit.emit(item);
  }

  ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
  }
}
