console.log("Welcome to OOP in JS");

// 4 major concepts of OOP
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction

// Class in JS
class MyCar {
  // Always run when an object is created from the class
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
    this.numOfLegs = 4;
    this.color = "black";
  }

  // Setters and Getters
  // setters
  setColor(colorInput) {
    this.color = colorInput;
  }

  // getter
  getColor() {
    return this.color;
  }
}

const bolaCar = new MyCar("Camry", "Toyots");
const daraCar = new MyCar("Civic", "Honda");
console.log(bolaCar.brand);
console.log(daraCar.brand);
console.log(bolaCar.numOfLegs + " - " + daraCar.numOfLegs);
bolaCar.setColor("Gold");
console.log("Bola car colour", bolaCar.getColor());
console.log("Dara car colour", daraCar.getColor());
daraCar.setColor("Green");
console.log("Dara car colour", daraCar.getColor());

// Create a class called Person. The class should have a function that is automatically called when you create a new instance of the class. The function should set the class properties for the name, age, and gender of the instance. Create a setter to modify the value of the name, and a getter to get the value of the gender

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  setName(name) {
    this.name = name;
  }

  getGender() {
    return this.gender;
  }
}

const bola = new Person("Bolarinwa", 16, "Proudly Male");
console.log(bola);
bola.setName("Abolarinwa");
console.log(bola.getGender());
console.log("Accessing Gender", bola.gender);
