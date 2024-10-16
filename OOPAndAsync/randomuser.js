console.log("Welcome to the random user generator");

async function fetchUserData() {
  const response = await fetch("https://randomuser.me/api/");
  console.log(response);
  if (response.ok) {
    console.log("Everything is fine");
    const data = await response.json();
    // console.log(data);
    // console.log(data.results);
    const user = data.results[0];
    const userDiv = document.getElementById("user");
    if (user.gender === "male") {
      userDiv.classList.remove("female");
      userDiv.classList.add("male");
    } else {
      userDiv.classList.remove("male");
      userDiv.classList.add("female");
    }
    userDiv.innerHTML = `
          <img src=${user.picture.large} alt="User Image" />
      <div>
        <h1>${user.name.title} ${user.name.first} ${user.name.last}</h1>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Gender:</strong> ${user.gender}</p>
        <p><strong>Age:</strong> ${user.dob.age}</p>
        <p><strong>Phone:</strong> ${user.phone}/p>
      </div>
    `;
    console.log(user);
  } else {
    alert("Failed to get user details, please refresh the page");
  }
}

fetchUserData();

document.getElementById("generate").addEventListener("click", fetchUserData);