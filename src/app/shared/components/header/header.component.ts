import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../services/header.service';
import { TranslocoService } from '@ngneat/transloco';

import {
  MenuIcon,
  Language,
  MenuItem,
} from 'src/app/shared/interfaces/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    private transloco: TranslocoService
  ) {}

  items: MenuItem[] = [];
  menuIcons: MenuIcon[] = [];
  languages: Language[] = [];

  selectedLanguage: Language;

  ngOnInit() {
    this.items = this.headerService.items || [];
    this.menuIcons = this.headerService.menuIcons || [];
  }
}
