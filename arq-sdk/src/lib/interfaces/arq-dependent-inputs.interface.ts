export interface ArqDependentInputs {
  id: string;
  first: boolean;
  type: 'select' | 'autocomplete';
  sizeInput?: 'small' | 'medium' | 'large' | null;
  col?: string; // Ancho del input
  label: string;
  next?: string | null;
  control: string;
  filterBack?: boolean;
  fullObject?: boolean;
  panelWidth?: string | number | undefined;
  event: (str: string, numberOptions?: number | string) => void;
}
