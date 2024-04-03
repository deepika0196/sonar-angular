import { ThemePalette } from '@angular/material/core';
export interface ArqCheckbox {
    name: string;
    completed: any;
    color: ThemePalette;
    subCheckBox?: ArqCheckbox[];
}
