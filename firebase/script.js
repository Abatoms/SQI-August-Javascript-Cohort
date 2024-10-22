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
// console.log(app);
const db = firebase.firestore(app);
// console.log(db);

const studentColRef = db.collection("students");
const staffColRef = db.collection("staffs");

// Get all students from the database
const studentDiv = document.getElementById("students");
const studentForm = document.getElementById("studentForm");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");
const level = document.getElementById("level");
const admission_year = document.getElementById("admission_year");
const getAllStudents = async () => {
  const snapshot = await studentColRef.get();
  try {
    //   console.log(snapshot);
    snapshot.forEach((doc) => {
      console.log(doc.id);
      console.log(doc.data());
      studentDiv.innerHTML += `
        <div class="student">
            <h1>${doc.data().firstname} ${doc.data().lastname}</h1>
            <p><strong>Age:</strong> ${doc.data().age}</p>
            <p><strong>Class:</strong> ${doc.data().level} level</p>
             <p class="admission-year"><strong>Admission Year:</strong> ${
               doc.data().admission_year
             }</p>
         </div>
    `;
    });
  } catch (error) {
    console.log(
      "An error occured when fetching students with message: ",
      error.message
    );
  }
};

getAllStudents();

const addNewStudent = async () => {
  try {
    const data = {
      firstname: firstname.value,
      lastname: lastname.value,
      age: age.value,
      level: level.value,
      admission_year: new Date(admission_year.value),
    };
    console.log(data);
    const result = await studentColRef.add(data);
    console.log("Student added successfully? ", result);
  } catch (error) {
    console.log(
      "An error occured when adding student with message: ",
      error.message
    );
  }
};

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewStudent();
});

// const getAllStaffs = async () => {
//   const snapshot = staffColRef.get();
// };

// addNewStudent({
//   firstname: "Jinadu",
//   lastname: "Elesho",
//   age: 67,
//   level: "300",
//   admission_year: new Date(),
// });
