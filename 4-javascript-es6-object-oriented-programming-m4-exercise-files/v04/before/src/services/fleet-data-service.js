import { Car } from "../classes/car.js";
import { Drone } from "../classes/drone.js";
import { DataError } from "./data-error.js";

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  sortCarsByLicense() {
    return this.cars.sort(function (car1, car2) {
      if (car1.license < car2.license) {
        return -1;
      }
      if (car1.license > car2.license) {
        return 1;
      }
      return 0;
    });
  }

  getCarByLicense(license) {
    return this.cars.find(function (car) {
      return car.license === license;
    });
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case "car":
          if (this.validateCarData(data)) {
            let car = this.loadCar(data);
            if (car) {
              this.cars.push(car);
            }
          } else {
            let e = new DataError("invalid car data", data);
            this.errors.push(e);
          }
          break;
        case "drone":
          this.drones.push(data);
          break;
        default:
          let e = new DataError("Invalid vehicle type", data);
          this.errors.push(e);
          break;
      }
    }
  }

  loadCar(car) {
    try {
      let c = new Car(Car.license, Car.model, Car.latLong);
      c.miles = car.miles;
      c.make = car.make;
      c.license = car.license;
      return c;
    } catch (e) {
      this.errors.push(new DataError("error loading car"), car);
    }
    return null;
  }
  validateCarData(car) {
    let requiredProps = "license model latLong miles make".split(" ");
    let hasErrors = false;
    for (const field of requiredProps) {
      if (!car[field]) {
        this.errors.push(new DataError(`invalid field- ${field}`, car));
        hasErrors = true;
      }

      let miles = Number.parseFloat(car.miles);

      if (Number.isNaN(miles)) {
        console.log(this);
        this.errors.push(new DataError(`${car.miles} is not a number`, car));
        hasErrors = true;
      }
      return !hasErrors;
    }
  }
}
