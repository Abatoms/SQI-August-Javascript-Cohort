console.log("Welcome to SQI STUDENT MANAGEMENT SYSTEM");

const students = JSON.parse(localStorage.getItem("students")) || [];

const studentName = document.getElementById("studentName");
const studentAge = document.getElementById("studentAge");
const studentEmail = document.getElementById("studentEmail");
const studentGrade = document.getElementById("studentGrade");
const tableBody = document.querySelector("tbody");
console.log(students);
const displayStudents = () => {
  tableBody.innerHTML = "";
  students.forEach((student) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        `;
    tableBody.appendChild(tr);
  });
};

displayStudents();

const addStudent = () => {
  if (
    studentName.value === "" ||
    studentAge.value === "" ||
    studentEmail.value === "" ||
    studentGrade.value === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  const newStudent = {
    name: studentName.value,
    age: studentAge.value,
    email: studentEmail.value,
    grade: studentGrade.value,
  };

  students.push(newStudent);
  //   Save student array to localstorage
  localStorage.setItem("students", JSON.stringify(students));

  displayStudents();
  studentName.value = "";
  studentAge.value = "";
  studentEmail.value = "";
  studentGrade.value = "";
};

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", addStudent);
