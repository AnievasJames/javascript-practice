// #region logical operators

let age = 18;
let hasId = true;

if (age >= 18 && hasId === true) {
  console.log("You may enter the club");
}

// #endregion logical operators

// #region ternary operator

let isRaining = true;

isRaining ? console.log("it is raining") : console.log("it is not raining");

// #endregion ternary operator

// #region combination of logical and ternary

let age2 = 19;
let hasId2 = false;

let str = age2 >= 18 || hasId2 ? "Youy may enter" : "You may not enter";

console.log(str);

// #endregion combination of logical and ternary

// #region exercise

let loggedIn = true;
let hasMembership = true;

let member =
  loggedIn === true && hasMembership === true
    ? "show video"
    : "don't show video";

console.log(member);

// #endregion exercise

// #region exercise answer key

let loggedIn2 = true;
let hasMembership2 = true;

let str2 = loggedIn2 && hasMembership2 ? "show video" : "don't show the video";

console.log(str2);

// #endregion exercise answer key
