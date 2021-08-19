//This has to be the first line in order to activate strict mode for entire script
'use strict';

// let comingToMyBirthdayParty = false;

// const passTest = true;

// if (passTest) comingToMyBirthdayParty = true;
// if (comingToMyBirthdayParty) console.log(`Yay!`)

// const private = "audio"

// function logger(name) {
//   console.log(`My name is ${name}`)
// }

// function fruitProcesser(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`
//   return juice;
// }

// const mysteryJuice = fruitProcesser(2, 19);
// console.log(mysteryJuice)

// const heartAttackJuice = fruitProcesser(23, 154);
// console.log(heartAttackJuice)

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1989);


// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2)

// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3(1997))

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} has ${retirement} years left until retirement`
// }

// console.log(yearsUntilRetirement(2035, "Willie"))

// function cutFruitPieces(fruit) {
//   return fruit * 4
// }

// function fruitProcesser(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} slices of apple and ${orangePieces} slices of orange`
//   return juice;
// }
// console.log(fruitProcesser(2, 3))

// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3(1997))

// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} has ${retirement} years left until retirement`)
//     return retirement
//   } else {
//     return -1
//   }

// }

// console.log(yearsUntilRetirement(1989, "Willie"))

// const friends = ["Mary", "Caleb", "Kelsi"];

// friends.push("Tiffany");
// //Add to end of array

// friends.unshift("Bobbi", "Renzi")
// //Add to beginning of array

// friends.pop()
// //Remove 1 element from beginning of array

// friends.shift()
// //Remove 1 element from beginning of array

// console.log(friends.indexOf("Mary"))
// //Return index value of array element

// console.log(friends.includes("Bob"))
// console.log(friends.includes("Renzi"))
//Returns boolean value if parameter is in the array. Strict equality (ex. 23 ≠ '23')

//========================
//42. Intro to Objects

//Challenge: Write the following sentence in a dynamic way. 
//Willie has 3 friends and his best friends name is Victor

// const willie = {
//   firstName: 'Willie',
//   lastName: 'Whitfield',
//   age: 35,
//   loaction: 'USA',
//   friends: ['Victor', 'Thomas', 'Krista', 'Caron']
// }

// console.log(`${willie.firstName} has ${willie.friends.length} friends and his best friend's name is ${willie.friends[0]}`)

/*=================================
43. Object Methods*/

// const willie = {
//   firstName: 'Willie',
//   lastName: 'Whitfield',
//   age: 35,
//   loaction: 'USA',
//   friends: ['Victor', 'Thomas', 'Krista', 'Caron'],
//   hasDog: true,
//   birthYear: 1988,

//   calcAge: function () {
//     return 2029 - this.birthYear
//   }

// }

// //console.log(willie.calcAge())
// //console.log(willie['calcAge']())

/*============================
46. The For Loop */
//Instead of repeating the log
// console.log(`This is iteration number 1`);
// console.log(`This is iteration number 2`);
// console.log(`This is iteration number 3`);
// console.log(`This is iteration number 4`);
// console.log(`This is iteration number 5`);
// console.log(`This is iteration number 6`);
// console.log(`This is iteration number 7`);
// console.log(`This is iteration number 8`);
// console.log(`This is iteration number 9`);
// console.log(`This is iteration number 10`);

// //A for loop can be used to automatically log reptitive actions
// for (let i = 1; i <= 20; i++) {
//   console.log(`This is iteration number ${i}`)
// }

//47. Looping Arrays, Breaking and Continuing
const willie = [
  'Willie',
  'Whitfield',
  35,
  'USA',
  ['Victor', 'Thomas', 'Krista', 'Caron'],
  true,
  1988
]

const items = [];

for (let i = 0; i < willie.length; i++) {
  //console.log(willie[i], typeof willie[i])
  //items[i] = typeof willie[i];
  items.push(typeof willie[i])
}
//console.log(items)

// const currentYear = 2021
// const years = [2001, 2018, 1983, 1972, 2014, 1935]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//   ages.push(currentYear - years[i])
// }

// console.log(ages)

//continue and break
console.log('---ONLY STRINGS WILL BE PRINTED---')

for (let i = 0; i < willie.length; i++) {
  if (typeof willie[i] !== 'string') continue;
  console.log(willie[i], typeof willie[i])
  items.push(typeof willie[i])
}

console.log('---LOOP IS TERMINATED AFTER FIRST NuMBER TYPE---')
for (let i = 0; i < willie.length; i++) {
  if (typeof willie[i] === 'number') break;
  console.log(willie[i], typeof willie[i])
}