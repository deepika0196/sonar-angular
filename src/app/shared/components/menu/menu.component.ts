import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'menu-example',
    templateUrl: './menu.component.html'
})
export class MenuExample implements OnInit {
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'ItemExample',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'Table paginated',
                        icon: 'pi pi-fw pi-list',
                        routerLink:'\itemExample'
                    },
                    {
                        label: 'Table with edit',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink:'\itemExampleEdit'
                    },
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off',
                routerLink:'\loginSimulated'
            }
        ];
    }
}