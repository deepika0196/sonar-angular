import { Component, OnInit } from "@angular/core";
import { MessageService, SelectItem } from "primeng/api";
import { CampoDeActuacion } from "../../interfaces/campoDeActuacion";
import { CampoDeActuacionService } from "../../services/campo-de-actuacion.service";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { AlertDialogComponent } from "./alert-dialog/alert-dialog.component";

@Component({
  selector: "app-campo-de-actuacion",
  templateUrl: "./campo-de-actuacion.component.html",
  styleUrls: ["./campo-de-actuacion.component.css"],
  providers: [MessageService, DialogService],
})
export class CampoDeActuacionComponent implements OnInit {
  campoDeActuacions: CampoDeActuacion[];

  statuses: SelectItem[];

  clonedcampoDeActuacions: { [s: string]: CampoDeActuacion } = {};

  ref: DynamicDialogRef | undefined;

  first = 0;

  rows = 10;

  constructor(
    private campoDeActuacionService: CampoDeActuacionService,
    private messageService: MessageService,
    private dialogService: DialogService
  ) {}

  id: any;

  description: string;

  descriptionVal: string;

  ngOnInit() {
    this.campoDeActuacionService.getCampoDeActuacionsMini().then((data) => {
      this.campoDeActuacions = data;
    });
  }

  onRowEditInit(product: CampoDeActuacion) {
    this.clonedcampoDeActuacions[product.id] = { ...product };
  }

  onRowEditSave(product: CampoDeActuacion) {
    if (product.id) {
      delete this.clonedcampoDeActuacions[product.id];
      this.messageService.add({
        severity: "success",
        summary: "Success",
        detail: "Product is updated",
      });
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Invalid Price",
      });
    }
  }

  onRowEditCancel(product: CampoDeActuacion, index: number) {
    this.campoDeActuacions[index] = this.clonedcampoDeActuacions[product.id];
    delete this.clonedcampoDeActuacions[product.id];
  }

  clearAll() {
    this.id = null;
    this.description = "";
    this.descriptionVal = "";
  }

  filterHandler() {
    const values = this.campoDeActuacions.filter(
      (obj: CampoDeActuacion) =>
        obj.id?.toString().includes(this.id) ||
        obj.description?.includes(this.description) ||
        obj.descriptionVal?.includes(this.descriptionVal)
    );
  }

  onDeleteHandler(product: any) {
    this.ref = this.dialogService.open(AlertDialogComponent, {
      header: "Informe de actualizaciones",
      width: "50%",
      contentStyle: { overflow: "none" },
      baseZIndex: 10000,
      height: "50%",
      data: {},
    });

    this.ref.onClose.subscribe((product: any) => {
      if (product) {
        this.messageService.add({
          severity: "info",
          summary: "Product Selected",
          detail: product.name,
        });
      }
    });
  }

  next() {
    if (this.first + this.rows > this.campoDeActuacions.length) return;
    this.first = this.first + this.rows;
  }

  prev() {
    if (this.first - this.rows < 0) return;
    this.first = this.first - this.rows;
  }

  isLastPage(): boolean {
    return this.campoDeActuacions
      ? this.first + this.rows > this.campoDeActuacions.length
      : true;
  }

  isFirstPage(): boolean {
    return this.campoDeActuacions ? this.first === 0 : true;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
