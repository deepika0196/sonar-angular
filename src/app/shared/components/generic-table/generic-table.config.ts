export interface PaginatorConfig {
  showCurrentPageReport: boolean;
  currentPageReportTemplate: string;
  rowsPerPageOptions: Array<number>;
  class: string;
}

export interface TableConfig {
  rows: number;
  sortable: boolean;
  paginator: boolean;
  showDelete?: boolean;
  showEdit?: boolean;
  columnFilter?: boolean;
  disableDelete?: boolean;
  disableEdit?: boolean;
  styleClass?: string;
  tableStyle?: { 'min-width': string; 'max-height'?: string };
}
