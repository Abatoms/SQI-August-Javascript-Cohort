console.log("Welcome to SQI STUDENT MANAGEMENT SYSTEM");

const students = JSON.parse(localStorage.getItem("students")) || [];
let filteredStudents = [];
const studentName = document.getElementById("studentName");
const studentAge = document.getElementById("studentAge");
const studentEmail = document.getElementById("studentEmail");
const studentGrade = document.getElementById("studentGrade");
const tableBody = document.querySelector("tbody");
const submitButton = document.getElementById("submitBtn");
const searchStudentInput = document.getElementById("searchStudent");
const deleteBtn = document.querySelectorAll(".deleteBtn");
console.log(students);

const displayStudents = (studentsArray) => {
  tableBody.innerHTML = "";
  studentsArray.forEach((student) => {
    const email = student.email;
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td><button onclick="deleteStudent('${email}')">Delete Student</button></td>
        `;
    tableBody.appendChild(tr);
  });
};

displayStudents(students);

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

  const studentExists = students.some(
    (student) => student.email.toLowerCase() === newStudent.email.toLowerCase()
  );

  if (studentExists) {
    alert("Student with the email address exists already");
    return;
  }

  // push the new student to the students array
  students.push(newStudent);
  //   Save student array to localstorage
  localStorage.setItem("students", JSON.stringify(students));

  displayStudents(students);
  studentName.value = "";
  studentAge.value = "";
  studentEmail.value = "";
  studentGrade.value = "";
};

const searchStudent = () => {
  filteredStudents = students.filter((student) => {
    return (
      student.email.includes(searchStudentInput.value) ||
      student.name.includes(searchStudentInput.value)
    );
  });
};

const deleteStudent = (email) => {
  console.log(email);
  filteredStudents = students.filter((student) => student.email !== email);
  localStorage.setItem("students", JSON.stringify(filteredStudents));
  displayStudents(filteredStudents);
};

searchStudentInput.addEventListener("input", () => {
  searchStudent();
  displayStudents(filteredStudents);
});

submitButton.addEventListener("click", addStudent);
