import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'arq-toolbar',
  templateUrl: './arq-toolbar.component.html',
  styleUrls: ['./arq-toolbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqToolbarComponent {
  @Input() public menuItems!: any[];

  @Input() public languages: any;

  @Input() public title!: string;

  @Input() public titleAlign: 'left' | 'center' | 'right' = 'center';

  @Input() public user: any;

  @Input() public reloadOnLangChange: boolean = true;

  @Output() public selectedEvent: EventEmitter<any> = new EventEmitter();

  public constructor(private router: Router, private translocoService: TranslocoService) {}

  public setSelectedItem(item: any): void {
    if (item.routerLink) {
      this.router.navigate([item.routerLink]);
    } else {
      item.event();
    }
  }

  public changeLang(lang: any): void {
    localStorage.setItem('user-lang', lang.code);
    this.translocoService?.setActiveLang(lang.code || 'es');

    if (this.reloadOnLangChange) location.reload();

    this.selectedEvent.emit(lang);
  }

  public ngLogout(): void {}
}
