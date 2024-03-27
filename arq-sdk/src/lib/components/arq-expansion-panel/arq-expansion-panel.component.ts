import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'arq-expansion-panel',
  templateUrl: './arq-expansion-panel.component.html',
  styleUrls: ['./arq-expansion-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqExpansionPanelComponent {
  public panelOpenState = false;
  /**
   * Title of the panel.
   */
  @Input()
  title!: string;

  /**
   * description of the panel.
   */
  @Input()
  description!: string;

  /**
   * Contenido que mostrar.
   */
  @Input()
  content?: string;

  @Input() expanded: boolean = this.panelOpenState;
}
