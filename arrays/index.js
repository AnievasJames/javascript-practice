// #region DRY

/** DRY- Do not Repeat Yourself
 * Not the best way to declare variables

   let item1 = "Apples";
   let item2 = "Bananas";
   let item3 = "Eggs";
   let item4 = "Milk";
*/

// #endregion

// #region Arrays and push method
// TIP: To always print the last element of a string
// Use:  [array.length -1]

let array = ["Apples", "Bananas", "Eggs", "Milk"];

// Print the entire array
console.log(array);

// Print the first element of an array
console.log(array[0]);

// Print the last element of an array
console.log(array[3]);

// Always print the last element of an array
console.log(array[array.length - 1]);

// Array push method- used to add new values to the end of an array
array.push("Bread");

console.log(array);

// #endregion

// #region Array filter method

let arrays = ["Chicken", "Pork", "Beef", "Shrimp"];

arrays.filter((element) => {
  console.log(element);
});
