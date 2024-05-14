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
  disableDelete?: boolean;
  showEdit?: boolean;
  disableEdit?: boolean;
  showView?: boolean;
  disableView?: boolean;
  showRestore?: boolean;
  disableRestore?: boolean;
  showArchive?: boolean;
  disableArchive?: boolean;
  styleClass?: string;
  tableStyle?: { 'min-width': string; 'max-height'?: string };
}
