import { auth } from "./script.js";

const login = async () => {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const response = await auth.signInWithEmailAndPassword(email, password);

    console.log(response.user);
    const user = {
      email: response.user.email,
      uid: response.user.uid,
    };
    console.log(user);
    window.location.href = "/firebase/index.html";
  } catch (error) {
    console.log(error);
    console.log("An Error occurred during login", error.message);
  }
};

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});
