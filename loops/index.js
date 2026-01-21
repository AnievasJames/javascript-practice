//  DRY- Don't repeat yourself

// #region while loop

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter = counter + 1;
  // counter++; (DIFFERENT METHOD)
}

console.log("while loop finished running");

// #endregion while loop

// #region for loop

// for (let i = 0; i < 5; i = i + 1) (DIFFERENT METHOD)

for (let i = 0; i < 5; i++) {
  console.log(i);

  // console.log(i + 1) //(USE TO START FROM 1)
}

// #endregion for loop

// #region exercise instructions

//  This includes data types, variables, conditionals and loops

// Write a for-loop that loops through 1 to 15.
// If the number is odd, print "ASAP"
// If the number is even, print "frontend"
// If the number is divisible by 5, Print "ASAP Frontend"

// Example
// 1 - "ASAP"
// 2 - "Frontend"
// 3 - "ASAP"
// 4 - "Frontend"
// 5 - "ASAP Frontend"
// ...
// 10 - "ASAP Frontend"
// ...
// 15 - "ASAP Frontend"

// #endregion exercise instructions

// #region exercise

for (let result = 1; result <= 15; ++result) {
  if (result % 5 === 0) {
  } else if (result % 2 === 0) {
    console.log(`${result} - Frontend`);
  } else {
    console.log(`${result} - ASAP`);
  }
}

// #endregion exercise

// #region exercise 2

for (let result2 = 1; result2 <= 13; ++result2) {
  if (result2 === 1) {
    console.log(`${result2} - A`);
  } else if (result2 === 2) {
    console.log(`${result2} - S`);
  } else if (result2 === 3) {
    console.log(`${result2} - A`);
  } else if (result2 === 4) {
    console.log(`${result2} - P`);
  } else if (result2 === 5) {
    console.log(`${result2} -  `);
  } else if (result2 === 6) {
    console.log(`${result2} - F`);
  } else if (result2 === 7) {
    console.log(`${result2} - r`);
  } else if (result2 === 8) {
    console.log(`${result2} - o`);
  } else if (result2 === 9) {
    console.log(`${result2} - n`);
  } else if (result2 === 10) {
    console.log(`${result2} - t`);
  } else if (result2 === 11) {
    console.log(`${result2} - e`);
  } else if (result2 === 12) {
    console.log(`${result2} - n`);
  } else if (result2 === 13) {
    console.log(`${result2} - d`);
  }
}
// #endregion exercise 2
