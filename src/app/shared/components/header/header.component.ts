import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalConstant } from '@app/core/constants/globalConstants';
import { TranslocoHttpLoader } from '@app/transloco-root.module';
import { TranslocoService } from '@ngneat/transloco';
import { Language, MenuItem } from '@shared/interfaces/header.interface';
import { HeaderService } from '@shared/services/header.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private headerService: HeaderService,
    private translateService: TranslocoService,
    private translateHttpLoader: TranslocoHttpLoader
  ) {}

  items: MenuItem[] = [];
  languages: Language[] = [];
  selectedLanguage: Language;
  ecmca = GlobalConstant.ecmca;
  private subscription = new Subject<void>();

  ngOnInit() {
    this.items = this.headerService.getHeaderMenu() || [];
    this.languages = this.headerService.language;
    for (const item of this.languages) {
      if (item.code === this.translateService.getDefaultLang()) {
        this.selectedLanguage = item;
      }
    }
  }

  changeLanguage() {
    this.translateService.setActiveLang(this.selectedLanguage.code);
    this.translateHttpLoader
      .getTranslation(this.selectedLanguage.code)
      .pipe(takeUntil(this.subscription))
      .subscribe(() => {
        this.items = [...this.headerService.getHeaderMenu()];
      });
  }

  ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
  }
}
