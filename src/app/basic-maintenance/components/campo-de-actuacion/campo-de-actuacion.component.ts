import { Component, OnInit } from '@angular/core';
import { FilterService, MessageService, SelectItem } from 'primeng/api';
import { CampoDeActuacion } from '../../interfaces/campoDeActuacion';
import { CampoDeActuacionService } from '../../services/campo-de-actuacion.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';


@Component({
  selector: 'app-campo-de-actuacion',
  templateUrl: './campo-de-actuacion.component.html',
  styleUrls: ['./campo-de-actuacion.component.css'],
  providers: [MessageService, DialogService]
})
export class CampoDeActuacionComponent implements OnInit{
  products: CampoDeActuacion[];

  statuses: SelectItem[];

  clonedProducts: { [s: string]: CampoDeActuacion } = {};
  
  ref: DynamicDialogRef  | undefined;

  constructor(private campoDeActuacionService: CampoDeActuacionService, private messageService: MessageService, private filterService: FilterService, private dialogService: DialogService) {}

  id: any
  
  description: string

  descriptionVal: string

  ngOnInit() {
      this.campoDeActuacionService.getProductsMini().then((data) => {
          this.products = data;
      });

      this.statuses = [
          { label: 'In Stock', value: 'INSTOCK' },
          { label: 'Low Stock', value: 'LOWSTOCK' },
          { label: 'Out of Stock', value: 'OUTOFSTOCK' }
      ];

      this.filterService.register('isPrimeNumber', (value: any, filter: any): boolean => {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
    
        if (value === undefined || value === null) {
            return false;
        }
    
        return value.toString() === filter.toString();
    });
  }

  onRowEditInit(product: CampoDeActuacion) {
      this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: CampoDeActuacion) {
      if (product.id) {
          delete this.clonedProducts[product.id];
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
      } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
      }
  }

  onRowEditCancel(product: CampoDeActuacion, index: number) {
      this.products[index] = this.clonedProducts[product.id];
      delete this.clonedProducts[product.id];
  }

  clearAll() {
    this.id = null
    this.description = ''
    this.descriptionVal = ''
  }

  filterHandler() {
    this.products.filter(() => {

    }) 
    const values = this.products.filter(obj => obj.id?.toString().includes(this.id) || obj.description?.includes(this.description) || obj.descriptionVal?.includes(this.descriptionVal))
    console.log(values, "values")
  }

  onDeleteHandler(product: any) {
    this.ref = this.dialogService.open(AlertDialogComponent, {
      header: 'Informe de actualizaciones',
      width: '50%',
      contentStyle: { overflow: 'none', padding: '4px' },
      baseZIndex: 10000,
      // style: {'padding': '2px'},
      // styleClass: 'dialogStyle',
      height: '50%',
      data: {}
      // maximizable: true
    });

    this.ref.onClose.subscribe((product: any) => {
      if (product) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
      }
    });
  }
}
