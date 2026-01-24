// #region exercise instructions

/** Create a function that converts $USD into $AUD
 *
 * $AUD to $USD Formula:
 * AUD = USD x 1.5
 *
 *
 *
 * example
 * convertUsdToAud(1000) -> 1500
 * convertUsdToAud(500) -> 750
 * convertUsdToAud(200) -> 300
 */

// #endregion exercise instructions

// #region exercise (my solution)

function convert(USD) {
  return USD * 1.5;
}

console.log(convert(200));

// #endregion

// #region exercise (answer key)
// It turns out that my solution was easier based on the instructor.

// Regular Function
function convertUsdToAud(dollars) {
  let AUD = dollars * 1.5;
  return AUD;
}
console.log(convertUsdToAud(1000));

// #endregion

// #region Arrow (method) Function
// Comment out the code below before executing.

const convertUsdToAud = (dollars) => {
  return dollars * 1.5;
};

console.log(convertUstToAud(200));

// #endregion
