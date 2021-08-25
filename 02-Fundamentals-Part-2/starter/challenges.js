`use strict`
/* JavaScript Fundamentals – Part 2
=========================

Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2

5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

//Arrow function
// const calcAverage = (team) => {
//   return (team.game1 + team.game2 + team.game3) / 3;
// }

// const dolphins = {
//   name: "Dolphins",
//   game1: 44,
//   game2: 23,
//   game3: 71,
// }

// const dolphinsV2 = {
//   name: "Dolphins V2",
//   game1: 85,
//   game2: 54,
//   game3: 41,
// }

// const koalas = {
//   name: "Koalas V2",
//   game1: 65,
//   game2: 54,
//   game3: 49
// }

// const koalasV2 = {
//   name: "Koalas V2",
//   game1: 23,
//   game2: 34,
//   game3: 27
// }

// const dolphinsAvg = calcAverage(dolphins)
// const koalasAvg = calcAverage(koalas)

// const dolphinsAvg2 = calcAverage(dolphinsV2)
// const koalasAvg2 = calcAverage(koalasV2)


// const checkWinner = function (dolphinsAvg, koalasAvg) {
//   if (dolphinsAvg >= (koalasAvg * 2)) {
//     console.log(`And your winner is... THE DOLPHINS! They beat the Koalas ${dolphinsAvg} - ${koalasAvg}`)
//   } else if (dolphinsAvg * 2 <= koalasAvg) {
//     console.log(`And your winner is... THE KOALAS! They beat the Dolphins ${koalasAvg} - ${dolphinsAvg}`)
//   } else {
//     console.log(`There is no winner`)
//   }
// }

// checkWinner(dolphinsAvg, koalasAvg)
// checkWinner(dolphinsAvg2, koalasAvg2)
//===============================

/*Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data
below

3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/
// const bills = [125, 555, 44];
// const tips = [];
// const totals = [];

// const calcTip = function (billsArray) {
//   billsArray.forEach(function (bill) {
//     if (bill >= 50 || bill <= 300) {
//       return tips.push((bill * .15).toFixed(2));
//     } else {
//       return tips.push((bill * .2).toFixed(2));
//     }
//   })
// }

// const calcTotal = function (billsArray, tipsArray, index) {
//   return totals.push(Number(billsArray[index]) + Number(tipsArray[index]))
// }

// calcTip(bills)
// calcTotal(bills, tips, 0);
// calcTotal(bills, tips, 1);
// calcTotal(bills, tips, 2);
// console.log(bills, tips, totals)

/*===============================
Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:

1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method

3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.*/

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   getName: function () {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   },
//   mass: 105,
//   height: 2.06,
//   calcBMI: function () {
//     const bmi = this.mass / this.height ** 2;
//     return Number(bmi.toFixed(3));
//   },
// }

// const janeau = {
//   firstName: "Janeau",
//   lastName: "Abed",
//   getName: function () {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   },
//   mass: 76,
//   height: 1.74,
//   calcBMI: function () {
//     const bmi = this.mass / this.height ** 2;
//     return Number(bmi.toFixed(3));
//   },
// }

// const maya = {
//   firstName: "Maya",
//   lastName: "Torano",
//   getName: function () {
//     const fullName = this.firstName + " " + this.lastName;
//     return fullName;
//   },
//   mass: 76,
//   height: 1.74,
//   calcBMI: function () {
//     const bmi = this.mass / this.height ** 2;
//     return Number(bmi.toFixed(3));
//   },
// }

// const compareBMI = function (person1, person2) {
//   if (person1.calcBMI() > person2.calcBMI()) {
//     console.log(`${person1.getName()} (${person1.calcBMI()}) has a higher BMI than ${person2.getName()} (${person2.calcBMI()})`)
//   } else if (person2.calcBMI() > person1.calcBMI()) {
//     console.log(`${person2.getName()} (${person2.calcBMI()}) has a higher BMI than ${person1.getName()} (${person1.calcBMI()})`)
//   } else if (person1.calcBMI() === person2.calcBMI()) {
//     console.log(`${person1.getName()} and ${person2.getName()} have the same Body Mass Index (${(person1.calcBMI() + person2.calcBMI()) / 2})`)
//   }
// }

// //Test 1
// compareBMI(mark, maya)

// //Test 2
// compareBMI(maya, janeau)

// //Test 3
// compareBMI(janeau, mark)

/*==================================
Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:

1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:

4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together

4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)

4.3. Call the function with the 'totals' array */

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return (bill >= 50 && bill <= 300 ? bill * .15 : bill * .2)
// }

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i])
//   tips.push(tip)
//   totals.push(tip + bills[i])
// }

// console.log(bills, tips, totals)

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return sum / arr.length
// }
// console.log(calcAverage(tips))
// console.log(calcAverage(totals))

/*=============================
BONUS
Exercise 1)

Get the sum of two arrays…actually the sum of all their elements.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276

let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351

// Example output:
// 276 + 351 = 627
*/

// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];


// const addElements = function (array) {
//   sum = 0;
//   for (let i = 0; i < arr_1.length; i++) {
//     sum += array[i]
//   }
//   return sum
// }


// console.log(addElements(arr_1) + addElements(arr_2))

/*==============================
Exercise 2)
Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
*/

// let n1 = 29

// for (let i = 1; i <= n1; i++) {
//   if (i % 2 !== 0) {
//     console.log(i)
//   }
// }

/*===========================
Exercise 3)
Using a for loop output the elements in reverse order.

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output:
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line */

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i])
// }

/*==============================
Exercise 4)
Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length.

let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output:
// [12, 7, 16] */

// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];
// let arr_new = [];

// for (let i = 0; i < arr_3.length; i++) {
//   let arr_sum = arr_3[i] + arr_4[i];
//   arr_new.push(arr_sum);
// }

// console.log(arr_new)

/*==============================
Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

let str2 = "don’t know why";
// Example output:
// “yes”
*/

// let str2 = "don’t know why";
// let strTest = "don’t know whi";

// const checkY = function (string) {
//   if (string.includes('y')) {
//     console.log('yes');
//   } else {
//     console.log('no');
//   }
// }

// checkY(str2)
// checkY(strTest)

/*===================================
Exercise 7)
Given a number n Calculate the factorial of the number

let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24
*/

// let n2 = 4

// // for (let i = 1; i <= n2; i++) {
// //   console.log(4)
// // }

// function factorialize(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   for (let i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   console.log(num)
// }

// factorialize(n2)

/*==================================
Coding Challenge #4 REDO

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:

1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:

4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together

4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)

4.3. Call the function with the 'totals' array */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
  let tip = bill < 50 && bill > 300 ? bill * .15 : bill * .2;
  tips.push(tip)
  totals.push(bill + tip)
}

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i])
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum += arr[i];
  }
  return sum / arr.length
}

console.log(calcAverage(totals))
