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
