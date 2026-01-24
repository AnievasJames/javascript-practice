/**  DRY - Don't repeat yourself
 console.log("Hello, James")
 console.log("Hello, Josh")
 console.log("Hello, Jaja")
*/

// #region function

// Function Declaration
function greetUser(name, time) {
  console.log(`Good ${time}, ${name}`);
}

// Call the function
greetUser("James", "morning");
greetUser("Josh", "afternoon");
greetUser("Jaja", "evening");

// #endregion function

// #region return

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 5));

// #endregion return
