import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { TranslocoService } from '@ngneat/transloco';
import { Language, MenuItem } from 'src/app/shared/interfaces/header.interface';
import { TranslocoHttpLoader } from 'src/app/transloco-root.module';
import { Subject, takeUntil } from 'rxjs';
import { GlobalConstant } from 'src/app/core/constants/globalConstants';
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
