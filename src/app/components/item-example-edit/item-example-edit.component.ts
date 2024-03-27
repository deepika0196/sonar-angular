import { Component } from '@angular/core';
import { ItemExampleService } from 'src/app/services/item-example.service';
import { ItemExample } from 'src/app/shared/interfaces/itemExample';
import { MessageService, SelectItem } from 'primeng/api';
@Component({
  selector: 'app-item-example-edit',
  templateUrl: './item-example-edit.component.html',
  styleUrls: ['./item-example-edit.component.css'],
  providers: [MessageService]
})
export class ItemExampleEditComponent {

  //needed to impl destruct

  itemsExample: ItemExample[];
  clonedItems: { [s: string]: ItemExample } = {};

  constructor(private itemExampleService: ItemExampleService, private messageService: MessageService) { }

  ngOnInit() {
    this.obtainItems();
  }

  onRowEditInit(item: ItemExample) {
    this.clonedItems[item.id!] = { ...item };
  }

  obtainItems(): void {
    this.itemExampleService.getAll().subscribe((res: ItemExample[]) => { this.itemsExample = res });
  }

  addNew(): void {
    this.itemsExample.push({ nombre: '', apellido: '', edad: 0 });
  }

  onRowEditSave(item: ItemExample, index: number) {
    if (item.edad > 0) {
      //Update
      if (item.id) {
        this.updateElement(item, index);
      } else { //Insert
        this.insertNewElement(item);
      }

    } else {
      this.itemsExample[index] = this.clonedItems[item.id!];
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Edad invalida' });
    }
  }

  insertNewElement(item: ItemExample) {
    this.itemExampleService.insert(item).subscribe({
      next: (res) => {
        this.obtainItems();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item updated' });
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al actualizar' });
      }
    });
  }

  updateElement(item: ItemExample, index: number) {
    delete this.clonedItems[item.id!];
    this.itemExampleService.update(item).subscribe({
      next: (res) => {
        this.obtainItems();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item updated' });
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al actualizar' })
        this.itemsExample[item.id!] = this.clonedItems[item.id!];
      }
    });
  }

  onRowEditCancel(item: ItemExample, index: number) {
    if (item.id) {
      this.itemsExample[index] = this.clonedItems[item.id!];
      delete this.clonedItems[item.id!];
    }
  }

  onRowDelete(item: ItemExample) {
    if (item.id) {
      this.itemExampleService.delete(item.id!).subscribe({
        next: (res) => {
          this.obtainItems();
        },
        error: (e) => this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al borrar' })
      });
    } else {

    }
  }
}
