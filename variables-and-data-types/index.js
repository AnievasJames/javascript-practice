// #region Strings

// Different ways to print:
console.log("Hello World");
console.log("Hello " + "World");

// Printing specific character of a string (0, 1, 2, 3,4 ,5)
console.log("Hello"[0]);
console.log("Hello".length);

// Creating a Variable
let name = "James Anievas";
console.log(name);
console.log(name[0]);
// -1 will always be equivalent to the last letter
console.log(name[name.length - 1]);

// #endregion Strings

// #region Numbers

let num1 = 1;
let num2 = 2;
let sum = num1 + num2;
console.log(num1 + "+" + num2 + "=" + sum);

let result = 1 + 1;
console.log(result);

// #endregion Numbers

// #region Boolean

let example1 = 20 > 30;
console.log(example1);

// #endregion Boolean

// #region Null & Undefined

let example2 = null;
console.log(example2);

let example3 = undefined;
console.log(example3);

let example4 = "James" * 5;
console.log(example4);

// #endregion Null & Undefined

// #region Variables

// Let Keyword
let userEmail = "james@gmail.com";
let age = 21;
let userName = "James";

age = age + 1;

// Const Keyword
const points = 100;

// points = 50 (This won't work)
//  We can never reassign a const variable

console.log(points);

// #endregion Variables

//  #region Currency Converter Exercise

//$AUD to $USD Formula:

//  AUD = USD x 1.5

let USD = 1200;
let AUD = USD * 1.5;

console.log(AUD);

//  #endregion Currency Converter Exercise

// #region Comparison Operators

let comparison1 = 5 == "5"; // == should have the same value
console.log(comparison1);

let comparison2 = 5 === "5"; // === should have the same value and type
console.log(comparison2); // === is good for type safety

let comparison3 = 5 !== "5";
console.log(comparison3);

let comparison4 = 5 != "5";
console.log(comparison4);

// #endregion Comparison Operators
