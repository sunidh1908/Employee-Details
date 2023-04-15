let employess = [];
let id = 1;

// getting variables
const form = document.querySelector("form");
const button = document.querySelector("#btn");
const message = document.getElementById("message");

// adding values to array
function addEmployee(e) {
  e.preventDefault();

  const name = document.getElementById("name-input").value;
  const profession = document.getElementById("profession-input").value;
  const age = document.getElementById("age-input").value;

  if (name == "" || profession == "" || age == "") {
    message.textContent = `Error : Please Make sure All the fields are filled before adding in an employee !`;
    message.style.color = "red";
    return;
  }

  // object for employee
  const employee = {
    id: id++,
    name: name,
    profession: profession,
    age: parseInt(age),
  };
  employess.push(employee);

  // display success message
  message.textContent = "Employee added successfully.";
  message.style.color = "green";
  message.style.fontFamily = "12px";

  // reset form
  form.reset();
  // update employee list
  updateEmployeeList();
}
// function to update employee list
function updateEmployeeList() {
  // clear employee list
  const emp = document.getElementById("employeeList");
  emp.innerHTML="";

  // add each employee to employee list
  employess.forEach(function (employee) {
    const li = document.createElement("li");
    li.className = "list-item";
    li.innerHTML = `
      <span> ${employee.id}.</span>
      <span>Name: ${employee.name}</span>
      <span>Profession: ${employee.profession}</span>
      <span>Age: ${employee.age}</span>
      <button class="delete-button" data-id="${employee.id}">Delete</button>
    `;

    li.style.listStyle = "none";
    li.style.display = "inline-block";
    li.style.border = "2px solid #fff";
    li.style.padding = "10px";
    li.style.borderRadius = "10px";
    li.style.marginBottom = "20px";

    emp.appendChild(li);
  });

  // add event listener to delete buttons
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", deleteEmployee);
  });
}

// function to delete employee from array
function deleteEmployee(event) {
  // get employee ID from data attribute
  const id = parseInt(event.target.getAttribute("data-id"));

  // remove employee from array
  employess = employess.filter(function (employee) {
    return employee.id !== id;
  });

  // update employee list
  updateEmployeeList();
}

// add event listener to add button
btn.addEventListener("click", addEmployee);