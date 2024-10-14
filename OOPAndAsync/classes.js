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

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log.apply("Encapsulation and Inheritance");

// Encapsulation
class Staff {
  constructor(staffId, staffName, staffDepartment) {
    this._staffId = staffId;
    this._staffName = staffName;
    this._staffDepartment = staffDepartment;
  }

  // Getters
  get staffId() {
    return this._staffId;
  }

  get staffName() {
    return `The staff name is ${this._staffName}`;
  }

  getStaffName() {
    return `Hehe, the staff name na ${this._staffName}`;
  }
  get staffDepartment() {
    return this._staffDepartment;
  }

  // Setters
  set staffId(id) {
    this._staffId = id;
  }

  set staffName(name) {
    this._staffName = name;
  }

  set staffDepartment(department) {
    this._staffDepartment = department;
  }

  // Methods
  describeMe() {
    console.log("I am a staff");
  }
}

const staffOne = new Staff(1, "Bolarinwa", "Software Engineering");
// Using the getters
console.log(staffOne.staffId);
console.log(staffOne.staffName);
console.log(staffOne.staffDepartment);

// Using the setters
staffOne.staffId = 2;
staffOne.staffName = "Abolarinwa";
staffOne.staffDepartment = "Software Engineering and Data Science";
console.log(staffOne.staffId);
console.log(staffOne.staffName);
console.log(staffOne.staffDepartment);

// Inheritance
class AcademicStaff extends Staff {
  constructor(staffId, staffName, staffDepartment, staffCourse) {
    super(staffId, staffName, staffDepartment);
    this._staffCourse = staffCourse;
    console.log("Academic Staff Constructor");
    console.log("Academic Staff ID", this._staffId);
    console.log("Academic Staff Name", this._staffName);
    console.log("Academic Staff Department", this._staffDepartment);
    console.log("Academic Staff Course", this._staffCourse);
  }

  get staffCourse() {
    return `The staff course is ${this._staffCourse}`;
  }

  getStaffCourse() {
    return `The staff course na ${this._staffCourse}`;
  }

  // Method overriding
  describeMe() {
    console.log("I am an academic staff");
  }
}

const lecturerOne = new AcademicStaff(
  3,
  "Jogunomi",
  "Software Engineering",
  "Data Structure and Algorithm"
);

console.log(lecturerOne.staffName);
console.log(lecturerOne.getStaffName());
console.log(lecturerOne.staffCourse);
console.log(lecturerOne.getStaffCourse());

const staffTwo = new Staff(4, "Jagunlabi", "Software Engineering");
console.log(staffTwo.staffName);
console.log(staffTwo.staffCourse);
staffTwo.describeMe();
lecturerOne.describeMe();

// Closure in Javascript
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Closure in Javascript");

let number = 10; // global variable

// function calculateSquare() {
//   let numb = 5; // local variable
//   return numb * numb;
// }

// console.log(calculateSquare());

function init() {
  let number = 100;

  // Inner function
  // Closure
  function addTen() {
    return number + 10;
  }
  return addTen;
}
console.log("Testing closure");
const addFunction = init();
console.log(addFunction);
console.log(addFunction());
