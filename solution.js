console.log("Welcome to the solution Arena");

let bookGenre = prompt("Enter the book genre: ");
let publicationYear = prompt("Enter the publication Year");
publicationYear = Number(publicationYear);
let inStock = false;
let disCountPercentage = 0;

if (bookGenre === "ScienceFiction") {
  if (publicationYear < 2000) {
    if (inStock === true) {
      disCountPercentage = 0.2;
    } else {
      disCountPercentage = 0.15;
    }
  } else if (publicationYear >= 2000 && publicationYear <= 2024) {
    if (inStock === true) {
      disCountPercentage = 0.1;
    } else {
      disCountPercentage = 0.05;
    }
  } else {
    console.log("Invalid publication yeae");
  }
} else if (bookGenre === "Romance") {
  // Do something
  if (publicationYear < 2010) {
    if (inStock === true) {
      disCountPercentage = 0.25;
    } else {
      disCountPercentage = 0.2;
    }
  } else if (publicationYear >= 2010 && publicationYear <= 2024) {
    if (inStock === true) {
      disCountPercentage = 0.15;
    } else {
      disCountPercentage = 0.1;
    }
  } else {
    console.log("Invalid publication yeae");
  }
} else {
  // Do something
  if (publicationYear < 2005) {
    if (inStock === true) {
      disCountPercentage = 0.3;
    } else {
      disCountPercentage = 0.25;
    }
  } else if (publicationYear >= 2005 && publicationYear <= 2024) {
    if (inStock === true) {
      disCountPercentage = 0.3;
    } else {
      disCountPercentage = 0.15;
    }
  } else {
    console.log("Invalid publication yeae");
  }
}

console.log("Genre: " + bookGenre);
console.log("Publication year: " + publicationYear);
console.log("In Stock: " + inStock);
console.log("The Discount is " + disCountPercentage * 100 + "%");
const genreParagraph = document.getElementById("genre");
const publicationParagrapgh = document.getElementById("PublicationYear");
const stockParagraph = document.getElementById("stock");
const discountParagrapgh = document.getElementById("discount");

genreParagraph.textContent = "Genre: " + bookGenre;
publicationParagrapgh.textContent = "Publication year: " + publicationYear;
stockParagraph.textContent = "In Stock: " + inStock;
discountParagrapgh.textContent =
  "The available discount for you is: " + disCountPercentage * 100 + "%";
