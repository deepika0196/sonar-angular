import { TemplateRef } from '@angular/core';
import { CampoDeActuacion } from '@app/basic-maintenance/interfaces/campoDeActuacion';

export interface ActionButtons {
  disabled: boolean;
  label: string;
  action(input?: any): void;
  validate?(input?: any): boolean;
  icon?: string;
}

export interface InputField {
  label: string;
  required_msg: string;
  name: string;
  maxLength?: number;
  disabled?: boolean;
}

export interface GenericDialog {
  header?: string;
  width: string;
  contentStyle: {
    overflow: string;
  };
  closable: boolean;
  baseZIndex: number;
  data: {
    inputValues?: CampoDeActuacion;
    actionButtons: ActionButtons[];
    inputFields?: InputField[];
    alertMessage?: string;
    headerStyle?: {
      icon: string;
      dialogType: string;
      title: string;
    };
    template?: TemplateRef<void>;
  };
  styleClass: string;
  showHeader: boolean;
}
