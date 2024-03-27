import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArqBasicComponent } from '../../utils/arq-basic.component';
import { ArqSchemaService } from '../../services/arq-schema.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'arq-dependent-inputs',
  templateUrl: './arq-dependent-inputs.component.html',
  styleUrls: ['./arq-dependent-inputs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArqDependentInputsComponent extends ArqBasicComponent implements OnInit, OnDestroy {
  @Input() inputs!: any;

  @Input('form') public _form!: FormGroup;

  @Input() public sizeInput: string = 'small';

  @Input() public loadedEvent?: Subject<void>;

  public inputSelect: any;

  constructor(public override _schemaService: ArqSchemaService) {
    super(_schemaService);
  }

  subscriptions: Subscription[] = [];

  override ngOnInit(): void {
    this.inputs.forEach((i: any) => {
      if (i.fullObject === undefined) {
        i.fullObject = true;
      }
      if (i.filterBack === undefined) {
        i.filterBack = true;
      }
      i.options = i.event();

      const getVal = this._form.controls[i.control].value;
      if (getVal != '' && getVal != null) {
        this.prepareNextComponentOptions(i);
      }
      if (!i.sizeInput) {
        i.sizeInput = 'small';
      }
    });

    this.inputs.forEach((i: any) => {
      this.subscriptions.push(
        this._form.controls[i.control].valueChanges.subscribe((value: any) => {
          if (this._form.value[i.control] != value) {
            this.ngChanges(value, i);
          }
        })
      );
      const getVal = this._form.controls[i.control].value;
      if (i.next) {
        this.prepareNextComponentOptions(i);
      }
    });
    if (this.loadedEvent) {
      this.loadedEvent.subscribe(() => {
        this.inputs.forEach((i: any) => {
          if (i.next) {
            this.prepareNextComponentOptions(i);
          }
        });
      });
    }
  }

  private prepareNextComponentOptions(i: any) {
    this.inputs.forEach((inp: any) => {
      if (i.next == inp.id) {
        let previousValues = this.getPreviousValues(inp.id);
        inp.options = inp.event(previousValues);
        //this._form.controls[inp.control].enable();
      }
    });
  }

  ngChanges(value: any, item: any) {
    this.inputs.forEach((inp: any) => {
      if (item.next == inp.id) {
        let previousValues = this.getPreviousValues(inp.id);
        inp.options = inp.event(previousValues);
        this.setInputs(item, true);
      }
    });
  }

  getPreviousValues(id: string) {
    let values: any = {};
    this.inputs.forEach((inp: any) => {
      if (inp.id < id) {
        let value = this._form.controls[inp.control].value;
        values[inp.control] = value?.value ? value.value : value;
      }
    });
    return values;
  }

  setInputs(item: any, enable: boolean = false) {
    this.inputs.forEach((inp: any) => {
      if (item.next == inp.id) {
        if (enable) this._form.controls[inp.control].enable();
        this._form.controls[inp.control].setValue(null);
        if (inp.next) {
          this.setInputs(inp);
        }
      }
    });
  }

  evtKeyPress(evt: any, item: any) {
    const val = evt.target.value;

    if (val == '') {
      this.setInputs(item);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
