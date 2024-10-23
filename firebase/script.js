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
let loading;

// Get all students from the database
const studentDiv = document.getElementById("students");
const studentForm = document.getElementById("studentForm");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");
const level = document.getElementById("level");
const admission_year = document.getElementById("admission_year");

const getAllStudents = async () => {
  let studentArray = [];
  console.log(snapshot);
  try {
    loading = true;
    //   console.log(snapshot);
    snapshot.forEach((doc) => {
      studentArray.push({ ...doc.data(), id: doc.id });
      // console.log(doc.id);
      // console.log(doc.data());
      studentDiv.innerHTML += `
        <div class="student">
            <h1>${doc.data().firstname} ${doc.data().lastname}</h1>
            <p><strong>Age:</strong> ${doc.data().age}</p>
            <p><strong>Class:</strong> ${doc.data().level} level</p>
             <p class="admission-year"><strong>Admission Year:</strong> ${
               doc.data().admission_year
             }</p>
            <button class="deleteBtn_${doc.id}">Delete</button>
        </div>
    `;
    });
    return studentArray;
  } catch (error) {
    console.log(
      "An error occured when fetching students with message: ",
      error.message
    );
  } finally {
    loading = false;
  }
};

const students = await getAllStudents();
// console.log(students);

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
    window.location.href = "index.html";
  } catch (error) {
    console.log(
      "An error occured when adding student with message: ",
      error.message
    );
  }
};

// console.log(students);

// Delete Student
const deleteStudent = async (id) => {
  const studentDocRef = studentColRef.doc(id);
  console.log("Deleting student with id: ", id);
  console.log(studentDocRef);
  try {
    const result = await studentDocRef.delete();
    console.log("Student deleted successfully? ", result);
    window.location.href = "index.html";
  } catch (error) {
    console.log(
      "An error occured when deleting student with message: ",
      error.message
    );
  }
};

students.forEach((student) => {
  // console.log(student);
  const deleteBtn = document.querySelector(`.deleteBtn_${student.id}`);
  deleteBtn.addEventListener("click", () => {
    console.log("heyyy");
    deleteStudent(student.id);
  });
});

if (studentForm) {
  studentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewStudent();
  });
}
