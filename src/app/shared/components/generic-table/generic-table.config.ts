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
  styleClass?: string;
  tableStyle?: { 'min-width': string; 'max-height'?: string };
}
