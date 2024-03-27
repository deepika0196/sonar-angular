import { Component } from '@angular/core';
import { ItemExampleService } from 'src/app/services/item-example.service';
import { ItemExample } from 'src/app/shared/interfaces/itemExample';
import { MessageService, SelectItem } from 'primeng/api';
@Component({
  selector: 'app-item-example',
  templateUrl: './item-example.component.html',
  styleUrls: ['./item-example.component.css'],
  providers: [MessageService]
})
export class ItemExampleComponent {

    itemsExample: ItemExample[];


    constructor(private itemExampleService: ItemExampleService) {}

    ngOnInit() {
      this.itemExampleService.getAll().subscribe((res:ItemExample[])  => {this.itemsExample = res});
    }

}
