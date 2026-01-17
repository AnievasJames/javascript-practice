// #region ifElse

let hasMembership = false;
let signedIn = true;

if (hasMembership === true) {
  console.log("show user the video");
} else if (signedIn === true) console.log("tell user to upgrade their account");
else {
  console.log("tell user to log in");
}

// #endregion ifElse

// #region ifElse exercise

let age = 14;

if (age > 18) {
  console.log("You're " + age + " years old, you may enter the club");
} else if (age === 18) {
  console.log("You just turned 18, welcome!");
} else {
  console.log("You're " + age + " years old, get outta here");
}

// #endregion ifElse exercise
