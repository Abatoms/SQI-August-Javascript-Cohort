const scores = [100, 90, 95, 80, 70];

// Getting the length of the array
console.log("The array", scores);
console.log("The length of the array is " + scores.length);

// Converting an array to a string
const stringedArray = scores.toString();
const names = ["Bola", "Tolu", "Jide"].toString();
console.log(stringedArray);
console.log(names);

// Converting an array to a string using join
const alphabets = ["a", "b", "c", "d"];
const stringedAlphabets = alphabets.join("*");
console.log(alphabets);
console.log(stringedAlphabets);

// adding to the end of the array
scores.push(101);
console.log(scores);

// Removing from the end of the array
scores.pop();
console.log(scores);

// adding to the beginning of the array
scores.unshift(101);
console.log(scores);

// Removing from the beginning of the array
scores.shift();
console.log(scores);

// Concatenating 2 arrays together
const testScores = [10, 12, 9, 14, 17];
const totalScores = scores.concat(testScores);
console.log(totalScores);

// using spread operators
const newTotalScores = [...testScores, ...scores];
console.log("Concatenation by spread operators", newTotalScores);

// Splicing an array (mutating array method)

// Deleting from an array using splice
const cars = ["Audi", "BWM", "Lexus", "Rolls Royce", "Chevolet"];
const favoriteCars = cars.splice(1, 3);
console.log(cars);
console.log(favoriteCars);

// Adding to an array using splice
cars.splice(2, 0, "Toyota", "Honda");
console.log(cars);

// Slicing an array (non-mutating array method)
console.log("Slicinggggggggggggggggggggggggggggggg");
const myCars = ["Audi", "BWM", "Lexus", "Rolls Royce", "Chevolet"];
const favCars = myCars.slice(1, 4);
console.log(myCars);
console.log(favCars);

// Array Search Methods
// Array indexOf()
// Array lastIndexOf()
// Array includes()
// Array find()
// Array findIndex()
// Array findLast()
// Array findLastIndex()

const persons = [
  "Bola",
  "Tolani",
  "Dara",
  "Folake",
  "Class Captain",
  "Pelumi",
  "Dara",
  "Jide",
  "Funsho",
  "Dara",
  "Badmus",
  "Seyi",
];

// Index of
const indexOfDara = persons.indexOf("Dara");
console.log(indexOfDara);

// LastIndexOF
const lastIndexOfDara = persons.lastIndexOf("Darsa");
console.log("Last index of dara", lastIndexOfDara);

// includes
const bolaInPersons = persons.includes("Bolarinwa");
console.log(bolaInPersons);

// find
const heights = [178, 185, 198, 140, 167];
function checkHeightsGreaterThan180(height) {
  return height > 180;
}

const firstHeightGreaterThan180 = heights.find(checkHeightsGreaterThan180);
console.log(firstHeightGreaterThan180);

const findUserWithnameStartingWithF = (name) => {
  return name.startsWith("J");
};

const getPerson = persons.find((person) => person.startsWith("J"));
console.log(getPerson);

console.log("Height > 180???", checkHeightsGreaterThan180(171));

for (person of persons) {
  if (person.startsWith("J")) {
    console.log(person);
  }
  console.log("No be you", person);
  continue;
}
