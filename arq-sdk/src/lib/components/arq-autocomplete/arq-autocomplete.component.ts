import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Observable, Subscription, map, pairwise, startWith } from 'rxjs';

import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import {
  ArqAutocompleteSearchFn,
  ArqDependentWatch,
  ArqPageableRequest,
  ArqPageableResponse
} from '../../../lib/interfaces/arq-basic.interface';
import { ArqList } from '../../interfaces/arq-list.interface';
import { ArqAutocompleteService } from './arq-autocomplete.service';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatAutocomplete } from '@angular/material/autocomplete';
@Component({
  selector: 'arq-autocomplete',
  templateUrl: './arq-autocomplete.component.html',
  styleUrls: ['./arq-autocomplete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqAutocompleteComponent extends ArqGenericInputComponent implements OnInit, AfterViewInit, OnDestroy {
  //TODO: crear input metodo filtrado

  filteredOptions: Observable<ArqList[]>;

  firstChangeLoaded: boolean = false;

  @Input()
  ariaLabel!: string;

  @Input()
  autoActiveFirstOption: boolean = true;

  @Input()
  autoSelectActiveOption: boolean = false;

  @Input()
  panelWidth: string | number | undefined;

  @Input()
  nameOptions: string = 'auto';

  @Input()
  type: string = 'text';

  @Input()
  options?: ArqAutocompleteSearchFn | Observable<ArqList[]>;

  @Input()
  dependsOn?: any[];

  @Input()
  filterBack: boolean = true;

  @Output()
  closed: EventEmitter<void>;

  @Output()
  opened: EventEmitter<void>;

  @Output()
  emitValue: EventEmitter<ArqPageableRequest>;

  @Input()
  defaultSize: number = 10;

  request: ArqPageableRequest = { page: 0, size: this.defaultSize };

  totalElements!: number;

  subscriptions: Subscription[] = [];

  @ViewChild(MatAutocomplete) ac!: MatAutocomplete;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @Input('nextPageLabel') public nextPageLabel: string = 'Siguiente';
  @Input('firstPageLabel') public firstPageLabel: string = 'Primera';
  @Input('lastPageLabel') public lastPageLabel: string = 'Última';
  @Input('previousPageLabel') public previousPageLabel: string = 'Anterior';
  @Input('range') public range: string = 'de';

  public constructor(public service: ArqAutocompleteService, public _MatPaginatorIntl: MatPaginatorIntl) {
    super();
    this.closed = new EventEmitter<any>();
    this.opened = new EventEmitter<any>();
    this.emitValue = new EventEmitter<ArqPageableRequest>();
    this.filteredOptions = new Observable();
    this.configureMatPaginator(_MatPaginatorIntl);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.getOptions();
    }
  }

  override ngOnInit() {
    this.request = { page: 0, size: this.defaultSize };
    this.totalElements = this.defaultSize;
    this.configureDependents();
    this.changeObjectWithArrayPropertiesToNull();
    this.request.filter = this.getStringValue() == null ? '' : this.getStringValue();
    this.filteredOptions = this.getContent();
  }

  configureDependents() {
    if (!this.dependsOn || this.dependsOn.length == 0) return;
    this.prepareDependentsStringArray();
    this.dependsOn
      .filter((d: any) => (<ArqDependentWatch>d).watch)
      .forEach((d: any) => {
        this.subscriptions.push(
          this.fGroup.controls[(<ArqDependentWatch>d).field].valueChanges.subscribe((value: any) => {
            if (this.fGroup.value[(<ArqDependentWatch>d).field] == value) {
              return;
            }
            this.request = {
              page: 0,
              size: this.defaultSize,
              filter: ''
            };
            this.setValue(null);
            this.filteredOptions = (<ArqAutocompleteSearchFn>this.options)(this.request, this.fGroup.value).pipe(
              map((result: ArqPageableResponse) => {
                this.totalElements = result.totalElements;
                this.request.size = result.pageable?.pageSize;
                this.request.page = result.pageable?.pageNumber;
                return result.content;
              })
            );
          })
        );
      });
  }

  private prepareDependentsStringArray() {
    if (Array.isArray(this.dependsOn) && this.dependsOn.every((d: any) => typeof d === 'string')) {
      let dependents: ArqDependentWatch[] = [];
      this.dependsOn.forEach((d: any) => {
        dependents.push({ field: <string>d, watch: false });
      });
      dependents[dependents.length - 1].watch = true;
      this.dependsOn = dependents;
    }
  }

  private changeObjectWithArrayPropertiesToNull() {
    if (Array.isArray(this.getValue().value?.value) || this.getValue().value === '') {
      this.setValue(null);
    }
  }

  ngAfterViewInit() {
    if (this.panelWidth) {
      this.ac.panelWidth = this.panelWidth;
    }
  }

  public getContent(): any {
    if (typeof this.options === 'function') {
      const response = this.options(this.request, this.fGroup.value).pipe(
        map(result => {
          this.totalElements = result.totalElements;
          return result.content;
        })
      );
      return response;
    } else if (this.options) {
      return this.options;
    }
  }

  public displayFn(option: any): string {
    if (!option) {
      return '';
    }

    return option.description;
  }

  public getOptions() {
    if (!this.filterBack && this.options) {
      this.getValue().valueChanges.subscribe((value: any) => {
        if (this.options) {
          this.filteredOptions = this.service._filter(this.getContent(), value, this.lang);
        }
      });
    } else {
      if (this.options) {
        if (this.isFirstChange()) {
          this.loadFirstChange();
        } else {
          this.request.filter = this.getStringValue() == null ? '' : this.getStringValue();
          this.filteredOptions = this.getContent();
        }
      }
    }
  }

  private loadFirstChange() {
    this.firstChangeLoaded = true;
    this.request.filter = this.getStringValue() == null ? '' : this.getStringValue();
    this.filteredOptions = this.getContent();
    this.filteredOptions.subscribe((result: ArqList[]) => {
      if (result.length === 1) {
        this.setValue(result[0]);
      }
    });
  }

  public getStringValue(): any {
    let value = this.getValue().value;
    value = value?.value !== undefined ? value.value : value;
    return value;
  }

  private isFirstChange(): boolean {
    return this.getStringValue()?.length > 0 && !this.firstChangeLoaded;
  }

  public ngGetValue(evt: any): any {
    if (this.readonly) return;
    if (evt.keyCode === 13) {
      return;
    }

    this.request = {
      page: 0,
      size: this.defaultSize,
      filter: this.getValue().value
    };

    this.emitValue.emit(this.request);
    if (this.options) {
      this.loadPage();
    }
  }

  loadPage() {
    if (this.filterBack) {
      this.filteredOptions = this.getContent();
    } else {
      this.filteredOptions = this.service._filter(
        this.getContent(),
        this.request.filter ? this.request.filter : '',
        this.lang
      );
    }
  }

  public onPageChange(event: PageEvent): void {
    this.request.page = +event.pageIndex.toString();
    this.request.size = +event.pageSize.toString();

    this.loadPage();
  }

  public clickEvent(evt: any): void {
    evt.stopPropagation();
  }

  private configureMatPaginator(paginatorInt1: MatPaginatorIntl): void {
    paginatorInt1.firstPageLabel = this.firstPageLabel;
    paginatorInt1.lastPageLabel = this.lastPageLabel;
    paginatorInt1.nextPageLabel = this.nextPageLabel;
    paginatorInt1.previousPageLabel = this.previousPageLabel;
    paginatorInt1.getRangeLabel = (page: number, pageSize: number, length: number): any => {
      const start = page * pageSize + 1;
      let end = (page + 1) * pageSize;
      if (end > length) {
        end = length;
      }
      return `${start} - ${end} ${this.range} ${length}`;
    };
  }

  public comprobarEntradas(): void {}

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s: Subscription) => {
      s.unsubscribe();
    });
  }
}
