const firebaseConfig = {
  apiKey: "AIzaSyAgfj6qiOdb5GhVYdxdHiar0ApvtZE4-To",
  authDomain: "sqi-firebase-class.firebaseapp.com",
  projectId: "sqi-firebase-class",
  storageBucket: "sqi-firebase-class.appspot.com",
  messagingSenderId: "619625111038",
  appId: "1:619625111038:web:22abec1d046279e2ab74af",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(app);
// console.log(auth);

const register = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const response = await auth.createUserWithEmailAndPassword(email, password);

  console.log(response.user);
  const user = {
    email: response.user.email,
    uid: response.user.uid,
  };
  console.log(user);
  window.location.href = "/index.html";
};

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});
