import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBadgePosition, MatBadgeSize } from '@angular/material/badge';
import { ThemePalette } from '@angular/material/core';
import { ArqGenericInputComponent } from '../../../core/arq-generic-input/arq-generic-input.component';
import { checkRequiredListFields } from '../../../core/utils/basic.util';

@Component({
  selector: 'arq-bagde',
  templateUrl: './arq-badge.component.html',
  styleUrls: ['./arq-badge.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqBadgeComponent extends ArqGenericInputComponent implements OnInit {
  @Input()
  color: ThemePalette;

  @Input()
  content: string | number | undefined | null;

  @Input()
  description?: string;

  @Input()
  disabled?: boolean;

  @Input()
  hidden?: boolean;

  @Input()
  overlap?: boolean;

  @Input()
  position?: MatBadgePosition;

  @Input()
  size?: MatBadgeSize;

  @Input()
  icon?: string;

  constructor() {
    super();
  }

  override ngOnInit(): void {
    checkRequiredListFields([this.content, this.description, this.icon], ['content', 'description', 'icon']);
  }

  comprobarEntradas(): void {}
}
