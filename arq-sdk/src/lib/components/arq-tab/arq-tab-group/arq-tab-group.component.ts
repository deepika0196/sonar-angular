import { AfterContentInit, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { timer } from 'rxjs';
import { ArqTabItemComponent } from '../arq-tab-item/arq-tab-item.component';

@Component({
  selector: 'arq-tab-group',
  templateUrl: './arq-tab-group.component.html',
  styleUrls: ['./arq-tab-group.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqTabGroupComponent implements AfterContentInit {
  @ContentChildren(ArqTabItemComponent) private contentItems?: QueryList<ArqTabItemComponent>;
  public appItems?: QueryList<ArqTabItemComponent>;

  @Input('selectedTabChange') _selectedTabChange!: (_tab: number) => any;

  constructor() {}

  ngAfterContentInit() {
    timer(0).subscribe(() => {
      this.appItems = this.contentItems;
    });
  }

  changeTab($event: MatTabChangeEvent) {
    if (this._selectedTabChange) {
      this._selectedTabChange($event.index);
    }
  }
}
