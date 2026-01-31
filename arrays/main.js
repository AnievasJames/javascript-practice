// #region exercise instructions

/** Night Club Exercise
 *
 * Filter out all the people who are not 18+ years old
 *
 * WITHOUT USING THE .FILTER METHOD
 *
 * @example
 *
 * [18, 20, 16, 25, 21] -> -[18, 20, 21]
 * [16, 17, 14, 15, 19] -> [19]
 * [20, 22, 26, 16, 20] -> [20, 22, 26, 20]
 */

// #endregion

// #region exercise (my solution)

let customers = [18, 20, 16, 15, 21];

for (let result = 0; result < customers.length; ++result) {
  if (customers[result] >= 18) {
    console.log(customers[result]);
  }
}

// #endregion

// #region exercise (answer key)

let people = [18, 20, 16, 21];

// Create a new empty array (called clients)
let adults = [];

for (let i = 0; i < people.length; ++i) {
  // Check if age is 18+
  if (people[i] >= 18) {
    // TRUE - Add element to the new array
    adults.push(people[i]);
  }
}

// console.log adults array
console.log(adults);

// #endregion

// #region .map method

let array = [1, 2, 3, 4, 5];

// Non-mutating method- It's not going -
// to change the original array
let newArray = array.map((element) => {
  return "hello world";
});

console.log(newArray);

// #endregion
