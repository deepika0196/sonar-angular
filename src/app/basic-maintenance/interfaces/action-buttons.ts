export interface ActionButtons {
  disabled: boolean;
  label: string;
  action(input?: any): void;
  validate?(input?: any): void;
  icon?: string;
}
