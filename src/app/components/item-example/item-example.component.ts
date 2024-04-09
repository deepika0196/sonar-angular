import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-item-example',
  templateUrl: './item-example.component.html',
  styleUrls: ['./item-example.component.css'],
  providers: [MessageService],
})
export class ItemExampleComponent {
  // itemsExample: ItemExample[];
  // constructor(private itemExampleService: ItemExampleService) {}
  // ngOnInit() {
  //   this.itemExampleService.getAll().subscribe((res:ItemExample[])  => {this.itemsExample = res});
  // }
}
