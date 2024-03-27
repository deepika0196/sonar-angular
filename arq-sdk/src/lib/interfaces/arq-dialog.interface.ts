export interface ArqDialogConfig {
  cancelBtn?: boolean;
  confirmBtn?: boolean;
  message?: string;
  title: string;
  type: string;
  icon: string;
  color: string;
  textConfirm?: string | null;
  textCancel?: string | null;
}
