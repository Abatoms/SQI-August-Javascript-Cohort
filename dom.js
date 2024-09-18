console.log("Welcome to DOM Manipulation");

const hOnes = document.getElementsByTagName("h1");
console.log(hOnes);
hOnes[0].innerHTML = "Testing Something";

const product = document.getElementsByClassName("product");
console.log(product);

product[0].innerHTML = "<p>This is the first product</p>";
product[1].innerHTML = "<p><i>This is the second product</i></p>";

// Query Selector
const article = document.querySelector(".article");
const profile = document.querySelector("#profile");
const articles = document.querySelectorAll(".article");
console.log(article);
console.log(profile);
console.log(articles);

article.innerHTML =
  "<a href='https://www.google.com' target='_blank'>CLick me to go to Google.com</a>";

const myH4 = document.createElement("h4");

myH4.innerText = "udefuwehfurhgejb";

console.log(myH4);

document.body.appendChild(myH4);

const myButton = document.createElement("button");
myButton.innerText = "Click me";

document.body.appendChild(myButton);

// Event Listeners
myButton.addEventListener("click", alertMe);
myH4.addEventListener("mouseenter", () => {
  myH4.style.color = "red";
  myH4.style.fontSize = "36px";
});

myH4.addEventListener("mouseleave", () => {
  myH4.style.color = "green";
});

myH4.addEventListener("mouseout", () => {
  myH4.style.color = "black";
  myH4.style.fontSize = "16px";
});

function alertMe() {
  alert("Hi, you just clicked the magic button");
}
const testHeader = document.createElement("h2");
testHeader.innerText = "Hello This is Profile Header";
console.log(testHeader);
profile.appendChild(testHeader);
