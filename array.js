console.log("Welcome to Arrays");

const cars = ["Audi", "BWM", "Lexus", "Rolls Royce", "Chevolet"];
console.log(cars);

console.log(cars[0]);
console.log(cars[4]);
console.log(cars[6]);

cars[4] = "Hyundai";
console.log(cars);

// Add an element to an array
cars.push("Benz");
cars.push("Ferrari");
cars.push("Bugatti");
console.log(cars);

// Getting the length of the array
let carsLength = cars.length;
console.log("The number of cars in the cars arrays is " + carsLength);

// Removing an item from the array
cars.pop();
console.log(cars);

console.log(cars.length);

// Adding an item to the front of the array
cars.unshift("Limousine");
console.log(cars);

// Removing from the front of the array
cars.shift();
console.log(cars);

const carsContainer = document.getElementById("carsContainer");
// Looping over an array

for (let i = 0; i < cars.length; i++) {
  console.log(`This is a ${cars[i]}`);
  carsContainer.innerHTML += `
        <li>${cars[i]}</li>
  `;
}

console.log("?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

let persons = [
  "Bolarinwa",
  "Tolulope",
  "Ayomide",
  "Olufunsho",
  "Ayangbade",
  "Agbabiaka",
];

const personsContainer = document.getElementById("persons");
for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
  personsContainer.innerHTML += `<li>${persons[i]}</li>`;
  for (let j = 0; j < cars.length; j++) {
    console.log(cars[j]);
    personsContainer.innerHTML += `<ul><li>${cars[j]}</li></ul> `;
  }
}

// Multidimensional arrays

const numberStuffs = [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [1, 3, 5, 7, 9],
  [2, 3, 5, 7, 11],
];

console.log(numberStuffs);
// console.log(numberStuffs[2][4]);

for (let i = 0; i < numberStuffs.length; i++) {
  console.log(numberStuffs[i]);
  for (let j = 0; j < numberStuffs[i].length; j++) {
    console.log(numberStuffs[i][j]);
  }
}

const pets = ["Dog", "Cats", "Rabbits", "Lion", "Tiger"];

for (let pet of pets) {
  console.log(pet);
}
