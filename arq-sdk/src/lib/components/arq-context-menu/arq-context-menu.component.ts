import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ContextMenuModel } from './models/contextmenu.model';
import { MenuPositions } from './models/menupositions.model';

@Component({
  selector: 'arq-context-menu',
  templateUrl: './arq-context-menu.component.html',
  styleUrls: ['./arq-context-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqContextMenuComponent {
  @Input()
  contextMenuItems!: Array<ContextMenuModel>;
  @Input()
  menuPositions!: MenuPositions;

  @Output()
  onContextMenuItemClick: EventEmitter<any> = new EventEmitter<any>();

  onContextMenuClick(event: any, data: any): any {
    this.onContextMenuItemClick.emit({
      event,
      data
    });
  }
}
