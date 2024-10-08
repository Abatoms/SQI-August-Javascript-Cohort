console.log("Welcome to OOP in JS");

// 4 major concepts of OOP
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction

// Class in JS
class MyCar {
  // Properties (Attributes)
  carName = "Toyota";
  carModel = "Camry";
  carYear = 2022;

  // Methods (Behaviours)
  start() {
    console.log("Car Started");
  }

  drive() {
    console.log("Car Driving");
  }

  brake() {
    console.log("Car Braking");
  }

  stop() {
    console.log("Car Stopped");
  }
}

// objects of the class
const bolaCar = new MyCar();
console.log(bolaCar);
console.log(bolaCar.carModel);
bolaCar.start();

const salamCar = new MyCar();
salamCar.carName = "Honda";
console.log(salamCar);
salamCar.carModel = "Civic";
console.log(salamCar.carModel);
console.log(salamCar);
