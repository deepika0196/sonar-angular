import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { HeaderService } from '../../services/header.service';
import { TranslocoService } from '@ngneat/transloco';

import { Language, MenuItem } from 'src/app/shared/interfaces/header.interface';
import { TranslocoHttpLoader } from 'src/app/transloco-root.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    private transloco: TranslocoService,
    private cdr: ChangeDetectorRef,
    private translocoHttpLoader: TranslocoHttpLoader
  ) {}

  items: MenuItem[] = [];
  languages: Language[] = [];
  selectedLanguage: Language;

  ngOnInit() {
    this.selectedLanguage = this.headerService.language[1];
    this.items = this.headerService.items || [];
    this.languages = this.headerService.language;
  }

  changeLanguage() {
    console.log(this.selectedLanguage);
    this.transloco.setActiveLang(this.selectedLanguage.code);
    this.cdr.detectChanges();
  }
}
