import { Component, OnInit } from '@angular/core';
import { ItemExampleService } from '@services/item-example.service';
import { ItemExample } from '@shared/interfaces/itemExample';
import { MessageService, SelectItem } from 'primeng/api';
@Component({
  selector: 'app-item-example',
  templateUrl: './item-example.component.html',
  styleUrls: ['./item-example.component.css'],
  providers: [MessageService],
})
export class ItemExampleComponent implements OnInit {
  itemsExample: ItemExample[];

  constructor(private itemExampleService: ItemExampleService) {}

  ngOnInit() {
    this.itemExampleService.getAll().subscribe((res: ItemExample[]) => {
      this.itemsExample = res;
    });
  }
}
