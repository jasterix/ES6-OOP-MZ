import { Vehicle } from "./vehicle.js";

export class Car extends Vehicle {
  constructor(license, model, latLong) {
    this.license = license;
    this.model = model;
    this.latLong = latLong;
  }
}
