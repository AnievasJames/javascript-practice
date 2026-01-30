// #region looping through an array

let people = [18, 20, 16, 15, 21];

for (let i = 0; i < people.length; ++i) {
  console.log(people[i]);
}

// #endregion

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
