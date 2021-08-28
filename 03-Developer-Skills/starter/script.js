// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//58. Using Google, StackOverflow and MDN
//=======================================
//Given an array of temperatures from one day, calculate the temperature amplitude.

// const temperatures = [-3, -2, 0, 6, 3, 'error', 5, 7, 5, 9, 11];

/*1. Understand the problem (ask questions)
• What is temperture amplitue? 
-Difference bettwen the maximun and minimum tempertures

• How to calculate the max and min values in an array?

• What does a sensor error look like?


2. Break up in to smaller segments
- How to ignore sensor errors
- Find max temp
- Find min temp
- Find amplitude (max - min)
*/

// PseudoCode
// Create function calcTempAmplitue (array) {
//   declare max variable = set value to first item in array
//   declare min variable = set value to first item in array

//   create for loop to loop through array items {
//     if (array iteration is greater than the max value) max = array iteration;
//   } if (array iteration is lesser than the min value) min = array iteration;

//   Print max - min;
// }
const temperatures = [-3, -2, 0, 6, 3, 'error', 5, 7, 5, 9, 11];

const tempArray2 = [3, 0, 7, 9, 17, 6, 5];

const calcTempAmplitue = function (array1, array2) {
  let temps = array1.concat(array2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(temps);
  return max - min;
};

const amplitude = calcTempAmplitue(temperatures, tempArray2);

console.log(amplitude);

//console.log(amplitude);

/*PROBLEM 2: Function should receive two arrays

If we have two arrays, should I run function twice?*/
