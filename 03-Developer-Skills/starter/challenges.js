'use strict';

/*========================
Developer Skills & Editor Setup
==========================*/

/*=========================
Coding Challenge #1
===========================

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:

1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.

2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

/*====
Objective: Display a string when given and array of temperatures.

Steps-
1. Declare variable for temperature array
2. Declare forcast variable as empty string.
3. Create printForcast function
4. In function body loop through array items
5. Declare temp variable inside loop
6. Set value for temp to forcast string
7. Append the string to forcast string


Code-
======*/

const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];

const printForcast = function (temps) {
  let forecast = ' ';
  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    forecast = forecast.concat(` ${curTemp}ºC in ${i + 1} days ...`);
  }
  console.log(forecast);
};

printForcast(test1);
printForcast(test2);
