// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.96;

// const beckyMass = 95;
// const becktHeight = 1.88;

// const jenMass = 85;
// const jenHeight = 1.76

// const bmi = function (mass, height) {
//   return mass / height ** 2;
// }

// const jenBMI = `Jen's BMI is ${bmi(jenMass, jenHeight).toFixed(2)}`;
// const johnBMI = `John's BMI is ${bmi(johnMass, johnHeight).toFixed(2)}`;
// const markBMI = `Mark's BMI is ${bmi(markMass, markHeight).toFixed(2)}`;
// const beckyBMI = `Becky's BMI is ${bmi(beckyMass, becktHeight).toFixed(2)}`;

// const compareBMI = function (bmi1, bmi2) {
//   if (bmi1 > bmi2) {
//     console.log(`${bmi1} is higher than ${bmi2}`)
//   } else {
//     console.log(`${bmi2} is higher than ${bmi1}`)
//   }
// }

// console.log(compareBMI(jenBMI, markBMI))

/*LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'

let laguage;
language = "german";

switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log(`MOST number of native speakers`);
    break;
  case 'spanish':
    console.log(`2nd place in number of native speakers`);
    break;
  case 'english':
    console.log(`3rd place`);
    break;
  case 'hindi':
    console.log(`Number 4`);
    break;
  case 'arabic':
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too`)
}*/

/*LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original.

const population = 130
const populationAvg = population > 33 ? console.log(`America's popultion is above average`) : console.log(`America's popultion is below average`);
*/

/*Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430*/



// bills.forEach(function (bill) {
//   const tip = bill <= 50 || bill >= 300 ? bill * .2 : bill * .15

//   const tipPercent = bill <= 50 || bill >= 300 ? 15 : 20

//   const checkout = `Your subtotal is: $${bill}
//   Your tip percentage is ${tipPercent}%, which amounts to $${tip}
//   Your meal comes out to be $${bill + tip}`

//   console.log(checkout)
// });
const bills = [275.14, 40.34, 430.31, 133.01, 541.19, 17.29];

for (bill of bills) {

  const tip = bill <= 50 || bill >= 300 ? bill * .2 : bill * .15

  const tipPercent = bill <= 50 || bill >= 300 ? 15 : 20

  const checkout = `Your subtotal is: $${bill}
  Your tip percentage is ${tipPercent}%, which amounts to $${(tip).toFixed(2)}
  Your meal comes out to be $${(bill + tip).toFixed(2)}`

  console.log(checkout)
};



