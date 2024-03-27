import { OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

import { ArqOverlayService } from '../../../core/services/arq-overlay/arq-overlay.service';
import { ArqSpinnerService } from '../../services/arq-spinner.service';

@Component({
  selector: 'arq-spinner',
  templateUrl: './arq-spinner.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ArqSpinnerComponent implements OnInit {
  @Input() color?: ThemePalette;
  @Input() diameter?: number = 100;
  @Input() mode: ProgressSpinnerMode = 'determinate';
  @Input() value?: number;
  @Input() backdropEnabled = true;
  @Input() positionGloballyCenter = true;
  @Input() displayProgressSpinner: boolean = false;

  @ViewChild('progressSpinnerRef')
  private progressSpinnerRef: TemplateRef<any> | undefined;

  private progressSpinnerOverlayConfig!: OverlayConfig;
  private overlayRef!: OverlayRef;

  constructor(
    private vcRef: ViewContainerRef,
    private overlayService: ArqOverlayService,
    private spinnerService: ArqSpinnerService,
    private _changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Config for Overlay Service
    this.progressSpinnerOverlayConfig = {
      hasBackdrop: this.backdropEnabled
    };
    if (this.positionGloballyCenter) {
      this.progressSpinnerOverlayConfig['positionStrategy'] = this.overlayService.positionGloballyCenter();
    }
    // Create Overlay for progress spinner
    this.overlayRef = this.overlayService.createOverlay(this.progressSpinnerOverlayConfig);
    // console.log(this.overlayRef);
    this.spinnerService.state().subscribe((observer: boolean) => {
      // console.log(observer);
      // this.displayProgressSpinner = observer;
      // this._changeDetector.detectChanges();
      this.spinnerShow(observer);
    });
  }
  ngDoCheck() {
    // Based on status of displayProgressSpinner attach/detach overlay to progress spinner template
    // this.spinnerShow();
  }

  spinnerShow(val : boolean) {
    this.overlayRef?.detach();
    if (val && this.progressSpinnerRef) {
      this.overlayService.attachTemplatePortal(this.overlayRef, this.progressSpinnerRef, this.vcRef);
    }
  }
}
