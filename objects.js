console.log("Welcome to objects");

// Array rotation assignment
const rotateArray = (array, k) => {
  // Check if the array is actually an arrayt
  if (Array.isArray(array) === false) {
    return "First input should be an array";
  }
  // Check if k is a number
  if (isNaN(k)) {
    return "second input should be a number";
  }

  // Check if k is greater than 0
  if (k < 0) {
    return "Second input should be a positive number";
  }

  //   check if k is greaten than the length of the array
  if (k > array.length) {
    return "The second input should be less than or eqaul to the length of the array";
  }

  for (let i = 0; i < k; i++) {
    let removedItem = array.pop();
    array.unshift(removedItem);
  }
  return array;
};

// Example input and outpue
// rotateArray([1, 2, 3, 4, 5], 2);
// [4, 5, 1, 2, 3]

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 9));
console.log(rotateArray(1, 9));
// rotateArray([1, 2, 3, 4, 5], 2);

// Objects in Javascript

const person = {
  name: "Bolarinwa",
  age: 16,
  complexion: "Omo pupa bi fanta",
  numberOfChildren: 4,
  numberOfWives: 50,
  favoriteQuote: function () {
    console.log("Good better best, I will never rest, until i be the best");
  },
};

console.log(person);

// Accesing object values
// 1. Bracket notation
const key = "name";
// console.log(person["name"]);
console.log(person[key]);
console.log(person["age"]);
console.log(person["complexion"]);

// 2. Dot notation
console.log(person.name);
console.log(person.numberOfChildren);
console.log(person.numberOfWives);

// Adding a new key value pair to an object
person.height = "6ft3";
person["bestSwallow"] = "Eba and Egusi";
console.log(person);

// Changing the value of a key in an object
person.numberOfWives = 12;
person["age"] = 15;
console.log(person);

// Looping over an object using the for in loop
for (let property in person) {
  console.log(property);
  console.log(person[property]);
}

console.log(Object.keys(person));
console.log(Object.values(person));

// Delete object properties]
delete person.numberOfWives;
console.log(person);

console.log(person.favoriteQuote());

const square = {
  length: 10,
  breadth: 5,

  //   Setter
  setLength: function (newLength) {
    this.length = newLength;
  },
  //   getter
  getLength: function () {
    return this.length;
  },
  area: function () {
    return this.length * this.breadth;
  },
  perimeter: function () {
    return this.length + this.breadth;
  },
};

square.setLength(20);
console.log(square.getLength());

console.log(
  `The area of the square with length ${square.length} and breadth ${
    square.breadth
  } is ${square.area()}`
);

console.log(
  `The perimeter of the square with length ${square.length} and breadth ${
    square.breadth
  } is ${square.perimeter()}`
);

// Comparing objects
const objOne = {
  a: "apple",
  b: "ball",
}; // hgh

const objTwo = {
  a: "apple",
  b: "ball",
}; // yty

const objThree = objOne; // refrence assignment

console.log(objOne === objTwo);
console.log(objOne == objTwo);
console.log(objThree === objOne);

console.log(objOne);
console.log(objThree);
objThree.a = "Agbalumo";
objOne.b = "Biro";
objTwo.b = "Banana";
console.log(">>>>>>>>>>>>>>>>>>>>>>");
console.log(objOne);
console.log(objThree);
console.log(objTwo);

// Array of Objects
const users = [
  {
    name: "Bolarinwa Ahmed",
    age: 16,
    height: "6ft3",
    hobbies: ["Coding", "Reading", "Watching Series"],
  },
  {
    name: "Jide Kosoko",
    age: 70,
    height: "5ft7",
    hobbies: ["Shina", "Baller"],
  },
  {
    name: "Taiwo Hassan Ogogo",
    age: 60,
    height: "6ft2",
    hobbies: ["Boxing", "Thuggery"],
  },
];

console.log(users);
console.log(users[1]);
console.log(users[0].hobbies);

const userContainer = document.getElementById("users");
for (let user of users) {
  userContainer.innerHTML += `
    <div>
      <h1>${user.name}</h1>
      <p>Age: ${user.age}</p>
      <p>Height: <i>${user.height}</i></p>
      <p>Hobbies: ${user.hobbies}</p>
    </div>
  `;
}

const products = [
  {
    name: " iPhone 11",
    price: 300000,
    image: "",
  },
  {
    name: " iPhone 12",
    price: 400000,
    image: "",
  },
  {
    name: " iPhone 13",
    price: 500000,
    image: "",
  },
  {
    name: " iPhone 14",
    price: 600000,
    image: "",
  },
  {
    name: " iPhone 15",
    price: 700000,
    image: "",
  },
  {
    name: " iPhone 16",
    price: 800000,
    image: "",
  },
];
const productContainer = document.getElementById("products");
for (let product of products) {
  productContainer.innerHTML += `
     <div class="product">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button>Add to cart</button>
        <button class="delete__btn">Delete Product</button>
      </div>
  `;
}
