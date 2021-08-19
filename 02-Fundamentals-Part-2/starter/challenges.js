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

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  getName: function () {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  },
  mass: 105,
  height: 2.06,
  calcBMI: function () {
    const bmi = this.mass / this.height ** 2;
    return Number(bmi.toFixed(3));
  },
}

const janeau = {
  firstName: "Janeau",
  lastName: "Abed",
  getName: function () {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  },
  mass: 76,
  height: 1.74,
  calcBMI: function () {
    const bmi = this.mass / this.height ** 2;
    return Number(bmi.toFixed(3));
  },
}

const maya = {
  firstName: "Maya",
  lastName: "Torano",
  getName: function () {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  },
  mass: 76,
  height: 1.74,
  calcBMI: function () {
    const bmi = this.mass / this.height ** 2;
    return Number(bmi.toFixed(3));
  },
}

const compareBMI = function (person1, person2) {
  if (person1.calcBMI() > person2.calcBMI()) {
    console.log(`${person1.getName()} (${person1.calcBMI()}) has a higher BMI than ${person2.getName()} (${person2.calcBMI()})`)
  } else if (person2.calcBMI() > person1.calcBMI()) {
    console.log(`${person2.getName()} (${person2.calcBMI()}) has a higher BMI than ${person1.getName()} (${person1.calcBMI()})`)
  } else if (person1.calcBMI() === person2.calcBMI()) {
    console.log(`${person1.getName()} and ${person2.getName()} have the same Body Mass Index (${(person1.calcBMI() + person2.calcBMI()) / 2})`)
  }
}

//Test 1
compareBMI(mark, maya)

//Test 2
compareBMI(maya, janeau)

//Test 3
compareBMI(janeau, mark)