// #region exercise instructions

/** Night Club Exercise
 *
 * Filter out all the people who are not 18+ years old
 *
 * @example
 *
 * [18, 20, 16, 15, 21] -> [18, 20, 21]
 * [16, 17, 14, 15, 19] -> [19]
 * [20, 22, 26, 16, 20] -> [20, 22, 26, 20]
 */

// #endregion

// #region (my solution)
// NOTE: I GOT THE RIGHT OUTPUT BUT THE DRY PRICIPLE IS NOT THERE

let array1 = [18, 20, 16, 15, 21];
let array2 = [16, 17, 14, 15, 19];
let array3 = [20, 22, 26, 16, 20];

let filteredArray1 = array1.filter((element) => {
  return element >= 18;
});

let filteredArray2 = array2.filter((element) => {
  return element >= 18;
});

let filteredArray3 = array3.filter((element) => {
  return element >= 18;
});

console.log(filteredArray1);

console.log(filteredArray2);

console.log(filteredArray3);

// #endregion

// #region (answer key)
