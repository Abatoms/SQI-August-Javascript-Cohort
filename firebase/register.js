import { auth, addNewStudent } from "./script.js";
// console.log(auth);

const handleFirebaseAuthErrors = (err) => {
  if (
    err.code === "auth/user-not-found" ||
    err.code === "auth/wrong-password"
  ) {
    return "Invalid email or password. Please check and try again";
  } else if (err.code === "auth/weak-password") {
    return "Your password should be a minimum of 6 characters";
  } else if (err.code === "auth/email-already-in-use") {
    return "The Email specified is already in use";
  } else if (err.code === "auth/invalid-email") {
    return "The email address supplied is invalid";
  } else if (err.ocde === "auth/user-not-found") {
    return "No user with the specified email address";
  } else if (err.code === "auth/too-many-requests)") {
    return "Access to your account has been temporaily banned due to many failed login attempt. Please try again later or reset your passwordf";
  } else {
    return "Soemthing went wrong. Please try again", err;
  }
};

const register = async () => {
  try {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const firstname = document.getElementById("userfirstname").value;
    const lastname = document.getElementById("userlastname").value;
    const response = await auth.createUserWithEmailAndPassword(email, password);

    console.log(response.user);
    const user = {
      email: response.user.email,
      uid: response.user.uid,
    };
    const data = {
      email,
      firstname,
      lastname,
      age: 12,
      level: "100",
      admission_year: new Date(),
    };

    await addNewStudent(data);
    console.log(user);
    window.location.href = "/firebase/index.html";
  } catch (error) {
    // console.log(error);
    // console.log("An Error occurred during signup", error.message);
    // console.log(error.code);
    const err = handleFirebaseAuthErrors(error);
    document.getElementById("error").innerHTML = err;
  }
};
// const register = () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const firstname = document.getElementById("userfirstname").value;
//   const lastname = document.getElementById("userlastname").value;
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((res) => {
//       console.log(res);
//       const user = {
//         email: res.user.email,
//         uid: res.user.uid,
//       };
//       console.log(user);
//     })
//     .catch((err) => console.log(err));

//   window.location.href = "/firebase/index.html";
// };

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});
