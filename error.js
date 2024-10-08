console.log("Welcome to Errors in JS");
// Try catch in js
const errors = document.getElementById("errors");
// try {
//   // Do Something
//   alert("Welcome to my site!!!");
//   //   throw 12345678;
// } catch (error) {
//   // Hanlde the error that occured
//   console.log(error);
//   console.log(error.message);
//   const p = document.createElement("p");
//   p.innerText = error.message;
//   p.style.color = "red";
//   errors.appendChild(p);
// }

// input a number between 5 and 10

const numberInput = document.getElementById("numberInput");
const validityBtn = document.getElementById("validityBtn");
const messageText = document.getElementById("message");
const errorText = document.getElementById("error");

validityBtn.addEventListener("click", () => {
  try {
    messageText.innerText = "";
    errorText.innerHTML = "";
    let value = numberInput.value;
    if (value.trim() == "") {
      throw new Error("Empty Input");
    }

    const numberValue = Number(value);

    if (isNaN(numberValue)) {
      throw new Error("Invalid Input, input should be a number");
    }

    if (numberValue < 5 || numberValue > 10) {
      throw new Error("Number should be between 5 and 10");
    } else {
      //   console.log("Number is Valid");
      messageText.innerText = "Number is Valid, yayyyy!!";
      messageText.style.color = "green";
    }
  } catch (error) {
    // console.log(error);
    errorText.innerText = error.message;
    errorText.style.color = "red";
  } finally {
    console.log("Ati lo, ati de");
  }
});
