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
