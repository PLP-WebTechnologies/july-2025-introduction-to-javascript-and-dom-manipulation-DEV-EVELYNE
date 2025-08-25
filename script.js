// ===============================
// Part 1: Variable Declarations & Conditionals
// ===============================

let userName = "Guest"; // variable declaration
let isLoggedIn = false; // boolean variable

if (isLoggedIn) {
  console.log("Welcome back, " + userName);
} else {
  console.log("Please log in to continue.");
}

// ===============================
// Part 2: Custom Functions
// ===============================

// Function 1: Change user name dynamically
function changeName(newName) {
  userName = newName;
  document.getElementById("greeting").innerText = "Hello, " + userName + "!";
}

// Function 2: Add items to a list in the DOM
function addListItems(listId, items) {
  const ul = document.getElementById(listId);
  ul.innerHTML = ""; // clear previous content
  for (let item of items) {
    let li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  }
}

// ===============================
// Part 3: Loops
// ===============================

// Loop 1: For loop - numbers 1 to 5
let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
addListItems("numberList", numbers);

// Loop 2: For...of loop - fruits
let fruits = ["Apple", "Banana", "Orange", "Mango"];
addListItems("fruitList", fruits);

// ===============================
// Part 4: DOM Interactions
// ===============================

// 1. Change text content when user clicks button
document.getElementById("changeNameBtn").addEventListener("click", function() {
  let newName = prompt("Enter your name:");
  if (newName) {
    changeName(newName);
  }
});

// 2. Update greeting automatically if logged in
if (isLoggedIn) {
  document.getElementById("greeting").innerText = "Welcome back, " + userName + "!";
}

// 3. Log DOM element to console
console.log("Greeting element:", document.getElementById("greeting"));
