import { Injectable } from "@angular/core";
import { CampoDeActuacion } from "../interfaces/campoDeActuacion";

@Injectable({
  providedIn: "root",
})
export class CampoDeActuacionService {
  constructor() {}
  getProductsData() {
    const data: CampoDeActuacion[] = [
      {
        id: 1000,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1001,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1002,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1003,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1004,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1005,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1006,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1007,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1008,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1009,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1010,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1011,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1012,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1013,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },

      {
        id: 1000,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1001,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1002,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1003,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1004,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1005,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1006,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1007,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1008,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1009,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1010,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1011,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1012,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1013,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1000,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1001,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1002,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1003,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1004,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1005,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1006,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1007,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1008,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1009,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1010,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1011,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1012,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1013,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1000,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1001,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1002,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1003,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1004,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1005,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1006,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1007,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1008,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1009,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1010,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1011,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1012,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1013,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1000,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1001,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1002,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1003,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1004,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1005,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1006,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1007,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1008,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1009,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1010,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1011,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1012,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1013,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1000,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1001,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1002,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1003,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1004,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1005,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1006,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1007,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1008,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1009,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1010,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1011,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1012,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1013,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1000,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1001,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1002,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1003,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1004,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1005,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1006,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
      {
        id: 1007,
        description: "Product Description 1",
        descriptionVal: "Product Description Val 1",
      },
      {
        id: 1008,
        description: "Product Description 2",
        descriptionVal: "Product Description Val 2",
      },
      {
        id: 1009,
        description: "Product Description 3",
        descriptionVal: "Product Description Val 3",
      },
      {
        id: 1010,
        description: "Product Description 4",
        descriptionVal: "Product Description Val 4",
      },
      {
        id: 1011,
        description: "Product Description 5",
        descriptionVal: "Product Description Val 5",
      },
      {
        id: 1012,
        description: "Product Description 6",
        descriptionVal: "Product Description Val 6",
      },
      {
        id: 1013,
        description: "Product Description 7",
        descriptionVal: "Product Description Val 7",
      },
    ];
    return data;
  }

  getCampoDeActuacionsMini() {
    return Promise.resolve(this.getProductsData());
  }
}
