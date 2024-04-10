export interface MenuItem {
  label: string;
  icon?: string;
  items?: MenuItem[];
}

export interface Language {
  label: string;
  icon?: string;
  code?: string;
}
export interface MenuIcon {
  label?: string;
  icon?: string;
  url?: string;
  items?: Language[];
}
