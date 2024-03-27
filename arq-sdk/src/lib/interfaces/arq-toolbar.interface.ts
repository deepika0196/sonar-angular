import { Permission } from './arq-profile.interface';

export interface MenuItem {
  id: string;
  permissionId: Permission;
  label: string;
  icon: string;
  disabled?: boolean;
  permissions: Permission[];
  routerLink?: string | null;
  subItems?: MenuItem[];
}

export interface userItem {
  icon: string;
  text: string;
  event: (row: any) => void;
}
