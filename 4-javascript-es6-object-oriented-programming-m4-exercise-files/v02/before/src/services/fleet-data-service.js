import { Car } from "../classes/car";
import { Drone } from "../classes/drone";

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
  }
  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case "car":
          let car = loadCar( data );
          
          this.cars.push(data);
          break;
        case "drone":
          this.drones.push(data);
          break;
      }
    }
  }
}

loadCar( car ){
  let c = new Car( car.license, car.model, car.latLong )
  c.miles = car.miles
  c.make = car.make
  return c
}
