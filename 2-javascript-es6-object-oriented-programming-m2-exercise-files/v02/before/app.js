console.log("in app");

class Vehicle {
  start() {
    console.log("starting vehicle");
  }
  static getName() {
    console.log("my name");
  }
}

class Drone extends Vehicle {}

class Car extends Vehicle {
  start() {
    super.start();
    console.log("starting car");
  }
  static getName() {
    console.log("my other name");
  }
}
let c = new Car();
Vehicle.getName();
Car.getName();
// console.log(c.getName);
