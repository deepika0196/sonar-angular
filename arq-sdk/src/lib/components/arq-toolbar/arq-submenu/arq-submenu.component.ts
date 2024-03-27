import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'arq-submenu',
  templateUrl: 'arq-submenu.component.html',
  styleUrls: ['./arq-submenu.component.css']
})
export class ArqSubMenuComponent implements OnInit {
  @Input()
  SubMenuItems!: any;

  @ViewChild('Submenuitem') public Submenuitem: any;

  @Output() SelectedMenu: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  clickeventhandler(menu: any) {
    this.SelectedMenu.emit(menu);
  }
}
