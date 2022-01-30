'use strict';

/////////////////////////////////////////////////

//=============================
// 142. Simple Array Methods
//=============================
//let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
//~~~~~~~//
//Returns a portion of an array
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
//A negative number can be passed as a parameter and the slice method will copy from the end of the array

//console.log(arr.slice(1, -2));
//Negative parameter can be used to specifiy the endpoint
//In the above method, the array will copy starting from index 1, but excluding the last 2 elements

//console.log(arr.slice());
//Call .slice() without any arguments to create a copy of the array
//Spread operator can also create shallow copy.
//console.log([...arr]);

//SPLICE
//~~~~~~~//
//Splice works similar to slice, but it modifies the original array
//Typically with splice, the values deleted arent important, just that they are removed from the array.

//arr.splice(2); //Extract first 2 elements
//console.log(arr.splice(2)); //Extract and return first 2 elements
//console.log(arr); //Returns mutated array w/ first 2 elements removed

//arr.splice(-1); //Extracts last element
//console.log(arr.splice(-1)); //Extract and return the extracted element
//console.log(arr); //Returns mutated array w/ last element removed

//console.log(arr);
//arr.splice(1, 2); //Starts at index 1, removes 2 elements
//console.log(arr); //Return mutated array with second and third array elements extracted

//SLICE vs SPLICE
// console.log(arr);
// const arrSlice = arr.slice(1, 3); //starts to copy at index 1, cuts of at index 3 (i3 will be excluded)
// console.log(arrSlice); //returns copied elements
// console.log(arr); //original array unmutated

// const arrSplice = arr.splice(1, 3); //starts to extract at index 1, extract exactly 3 elments
// console.log(arrSplice); //returns extracted elements
// console.log(arr); //mutated array with elements in index position 1, 2 & 3 removed

//REVERSE
//arr = ['a', 'b', 'c', 'd', 'e'];
//let arr2 = ['j', 'i', 'h', 'g', 'f'];

//console.log(arr2.reverse());
//console.log(arr2); //The reverse method actually mutates original array

//CONTAT
//The concat method joins two arrays w/o mutating
//let letters = arr.concat(arr2, ['k', 'l']); //Array(s) that is passed in will be added to end in the order they were passed
//console.log(letters);
//console.log([...arr, ...arr2, ...['k', 'l']]);

//JOIN
//Joins contents of array into a single string.
//let joinedLetters = letters.join(' + '); //What is passed in will be uses a seperator
//console.log(joinedLetters);

//=============================
// 143. The new at() Method
//=============================
const arr = [23, 45, 3, 94, 2];
//console.log(arr);
//console.log(arr[0]);
//console.log(arr.at(0));

//.at() Method vs Bracket Notation
//Getting last element from array
//console.log(arr[arr.length - 1]);
//console.log(arr.slice(-1)[0]);//Slice will return an array with one element. Bracket notation pull the value from the array
//console.log(arr.at(-1));

//At Method also works on strings
//console.log(`A1 B4 C7 D1`.at(0));
//console.log(`A1 B4 C7 D1`.at(4));

//=============================
// 144. Looping Arrays: forEach
//=============================

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Using for of Loop
//--------------------
// for (let movement of movements) {
//   const transactionType = movement < 0 ? `withdrew` : `deposited`;
//   const amount = Math.abs(movement);
//   console.log(`You ${transactionType} $${amount} dollars`);
// }

//to get index of each item in the movements array, loop over movements.entries

// for (const [i, movement] of movements.entries())
//   console.log(`${i}: ${movement}`);

//Using forEach method
//--------------------
//The forEach method loops over the array and executes a callback function for each iteration in the array.

// movements.forEach(function (movement, index, array) {
//   const transactionType = movement < 0 ? `withdrew` : `deposited`;
//   const amount = Math.abs(movement);
//   console.log(`You ${transactionType} $${amount} dollars`);
//   console.log(index);
// });

//One fundamental difference between the two is that you cannot break out of a forEach loop. forEach will ALWAYS loop over the entire array
//If you need to use continue and break statements you must use a for of loop

//==================================
// 144. forEach with Maps and Sets
//==================================
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`The abbreviation for the ${value} is ${key}`);
// });

// const currenciesUnique = new Set(['USD', 'USD', 'GBP', 'EUR', 'GBP']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key) {
//   console.log(`${key}: ${value}`);
// });

//Notes about sets
//• Sets do not have a key
//• The forEach accepts a second parameter (equiv to index or key) to keep the method consistent with maps and arrays
//•The second param passed will set it's value to that of the first parameter

//==================================
// 147. Creating DOM Elements
//==================================
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';
//   movements.forEach(function (movement, i) {
//     const transactionType = movement < 0 ? 'withdrawal' : 'deposit';
//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${transactionType}">${
//       i + 1
//     } ${transactionType}</div>
//         <div class="movements__value">$${Math.abs(movement)}</div>
//       </div>
//     `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//     //console.log(html);
//   });
// };

// displayMovements(account1.movements);
//console.log(containerMovements.innerHTML);

//==================================
// 148. Coding Challenge #1
//==================================
/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.


4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
GOOD LUCK 😀
*/

// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

const checkDogs = (dogsJulia, dogsKate) => {
  //1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  // 2. Create an array with both Julia's (corrected) and Kate's data
  const allDogs = dogsJuliaCorrected.concat(dogsKate);

  //3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
  allDogs.forEach(function (dog, i) {
    const dogAge = dog >= 3 ? 'an adult' : 'still a puppy 🐶';
    console.log(`Dog ${i + 1} is ${dogAge}, and is ${dog} years old`);
  });
};

//console.log(`*===== Test Data 1 =====*`);
//checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
//console.log(`*===== Test Data 2 =====*`);
//checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//===============================================
// 149. Data Transformation: map, filter, reduce
//===============================================
//Map is similar to the forEach method. But .map() creates a brand new array from the original array with a callback function applied to each element

const numbers = [1, 2, 3, 4, 5];
//Map Example
const numbersDoubled = numbers.map(function (number) {
  return number * 2;
});
//console.log(`Values doubled: `, numbersDoubled);

//Filter creates a new array only returning elements that meet a specified condition
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
//console.log(`Even numbers: `, evenNumbers);

//Reduce condenses all values in an array to a single value
const sum = numbers.reduce(function (total, current) {
  return total + current;
});
//console.log(`Sum: `, sum);

//===============================================
// 150. The Map Method
//===============================================
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const usdToEur = 0.88;

const movementsEur = movements.map(movement => movement * usdToEur);

//console.log(movementsEur);

//Creating the array manually using a for of loop
const movementsEur2 = [];
for (let mov of movements) {
  mov *= usdToEur;
  movementsEur2.push(mov);
}
//console.log(movementsEur2);

//Acceps a callback function that wil
const conversionStr = movements.map((movement, i) => {
  movement = Math.abs(movement);
  return `${i + 1}: $${movement} USD convert to ${movement * usdToEur}€ Euros`;
});

//console.log(conversionStr);

//===============================================
// 152. The Filter Method
//===============================================
//In the filter method, we want to return a boolen value.
//Only the elements that meet the condition will be returned in the new array
const deposits = movements.filter(movement => movement > 0);
const withdrawals = movements.filter(movement => movement < 0);

//console.log(movements);
//console.log(deposits);
//console.log(withdrawals);

//Filtering using a for of loop
const withdrawalsFor = [];
for (let mov of movements) {
  if (mov < 0) withdrawalsFor.push(mov);
}

//console.log(withdrawalsFor);

//===============================================
// 153. The Reduce Method
//===============================================
//The .reduce() method condenses all values in an array into a single value

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//The accumulator is like a snowball that keep updating the value that we want to return ex. sum of array elements
//.reduce((accumulator, element, index, array) => accumulator + element)
const balance = movements.reduce((balance, movement) => balance + movement, 0);
//The second parameter passed in the reduce method is the initial value of the acumulator in the first loop iteration

//The reduce method loops over the array and calls the callback function with each iteration
//console.log(balance);

//Reducing with a for of loop
let balance2 = 0;
for (let mov of movements) {
  balance2 += mov;
}
//console.log(balance2);

//Benefit of using array methods over for loops is that you can omit the external variable. Array methods will return the value right away

//The reduce method can beused to pull any single value from a set of data.

//console.log(movements);
//Max Value
const calcMaxValue = movements => {
  const maxValue = movements.reduce(
    (max, curr) => (curr > max ? curr : max),
    movements[0]
  );
  console.log('Max value: ' + maxValue);
};

// if (curr > max)
//   return curr
// else
//   return max

//calcMaxValue(movements);

//Min Value
const calcMinValue = movements => {
  const minValue = movements.reduce(
    (min, curr) => (curr > min ? min : curr),
    movements[0]
  );
  console.log('Min value: ' + minValue);
};

//calcMinValue(movements);

//===============================================
// 154. Coding Challenge #2
//===============================================
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:

GOOD LUCK 😀
*/

/* 
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉) */
const dogAgesT1 = [5, 2, 4, 1, 15, 8, 3];
const dogAgesT2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = dogAges => {
  const adultDogs = dogAges
    .map(dogAge => {
      let humanAge;
      if (dogAge <= 2) humanAge = 2 * dogAge;
      else humanAge = 16 + dogAge * 4;
      return humanAge;
    })
    .filter(dogAge => dogAge >= 18);
  const averageAge =
    adultDogs.reduce((acc, dogAge) => acc + dogAge, 0) / adultDogs.length;
  return averageAge;
};

//console.log(calcAverageHumanAge(dogAgesT1));
//console.log(calcAverageHumanAge(dogAgesT2));

/* 4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3] //44
§ Data 2: [16, 6, 10, 5, 6, 1, 4] //47.33
*/

//Alternate method of calculating average
/*
const calcAvg1 = array =>
  array.reduce((tot, num) => tot + num, 0) / array.length;

const calcAvg2 = array =>
  array.reduce((tot, num) => tot + num / array.length, 0);

console.log(calcAvg1([5, 4, 3, 2, 1]));
console.log(calcAvg2([5, 4, 3, 2, 1]));
*/

//===============================================
// 155. The Magic of Chaining Methods
//===============================================
//Array methods can be chained together to make the code more concise

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Writing the different array methods on different lines increases the readability
const eurConvertDepositsTotal = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 0.88)
  .reduce((tot, mov) => tot + mov, 0);

//console.log(eurConvertDepositsTotal);

//Debugging chained array methods can be difficult.
//To see the result of a specific operation in the pipleine, we can check out the current array in the next array method is chained on.

//Most methods accept three parameters (element, index, array)
//Reduce takes four (accumlator, element, index, array)

/*
//===============================================
// 156. Coding Challenge #3
//===============================================

Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

const calcAverageHumanAge2 = dogAges =>
  dogAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(dogAge => dogAge >= 18)
    .reduce((acc, dogAge, i, arr) => acc + dogAge / arr.length, 0);

//console.log(calcAverageHumanAge2(dogAgesT1));
//console.log(calcAverageHumanAge2(dogAgesT2));

//===============================================
// 157. The Find Method
//===============================================
//The Find is used to retrieve one element of an array based on a specified condition.

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find(mov => mov < 0);
//console.log(firstWithdrawal);

//The find method and filter method are similar but there are two fundamental differences:
//1. The Filter method returns all the elements that match the condition as an array
//2. The Find method only returns the value of the first element in the array that meets the condition

//===============================================
// 160. The findIndex Method
//===============================================
//The findIndex method works similar to the find method. findIndex expects a callback function that returns a boolean.
//The first element of the array that meets the condition will be returned

const newTest = [2, 3, 55, 6, 76, 4, 3];
const findNum = newTest.find(num => num > 10);
//console.log(findNum);
const findIndexOf = newTest.findIndex(num => num > 10);
newTest.splice(findIndexOf, 1);
//console.log(newTest);

//===============================================
// 161. Some and Every
//===============================================

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
let evens = [2, 4, 6, 8, 10];

//The includes method tests if an array includes a certain value
//includes() tests for equality (exact match)
//console.log('Movements includes the V 20: ', movements.includes(20)); //false
//console.log('Movements includes the V 200', movements.includes(200)); //true

//The some and every methods test for conditions
//some - at least 1 value meets condition
// console.log(
//   'Movements some V greater than 0: ',
//   movements.some(mov => mov > 0)
// ); //true
// console.log(
//   'Evens every V equal to 0: ',
//   evens.some(ev => ev === 0)
// ); //false

//every - ALL values meet the condition
// console.log(
//   'Movements every V greater than 0: ',
//   movements.every(mov => mov > 0)); //false
//console.log('Evens every V is even: ', evens.every(ev => ev % 2 === 0)); //true

//For every event listener so far, a function has been directly passed as a callback
//External functions can also be passed in as a callback
const greaterThanFive = num => num > 4;
//console.log(evens.some(greaterThanFive));
//console.log(evens.every(greaterThanFive));
//console.log(evens.filter(greaterThanFive));

//The external function can be used for an that required a condition

//===============================================
// 162. flat and flatMap
//===============================================
//flat() creates a new array with all sub-array elements concatenated into it
const arrTest3 = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
//console.log(arrTest3.flat());

//By default the flat method only goes one level deep.
//The depth of flattening can be passed in as a parameter
const arrTest4 = [1, [[2, 3]], [4, 5, 6], [[7, 8, 9]]];
//console.log(arrTest4.flat()); //[1, [2, 3], 4, 5, 6, [7, 8, 9]]
//console.log(arrTest4.flat(2)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Flatmap

// const account1 = {
//   owner: 'Willie Whitfield',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300, -345, -20, 1768],
//   interestRate: 1.2,
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Luna Wibsey',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Michael Bakari Jordan',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Tal Prephd',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

//Pulling movements from each of the accounts andd placing into a single array
// const movementsArray = accounts.map(account => account.movements);
//console.log(movementsArray);
//The flat method will remove a layer of nesting inside the array

// const allMovements = movementsArray.flat();
// const overallBalance = allMovements.reduce((tot, mov) => tot + mov);
//console.log(overallBalance);

//the flatmap method
//flatMap() only flattens one level, so if you need to go deeper than one level of nesting then the .flat() method is still required
// const movementsArray2 = accounts.flatMap(account => account.movements);
//console.log(movementsArray2);

//===============================================
// 163. Sorting Arrays
//===============================================
const friends = ['Bobby', 'Yesenia', 'Georgia', 'Kaitlyn', 'Gerald'];

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//By default, sort arrages in alphabetical order
//The sort method mutates the original array
//console.log(friends.sort());
//console.log(friends);

//The sort method sorts based on strings.
//Each number is converted to a string then sorted by the first character
//console.log(movements);
//console.log(movements.sort());
//This can be fixed by passing a comparison callback function into the sort method

//Function Notes
//If returned val < 0, the A, B (keeps order)
//If returned val > 0, the B, A (switches order)
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

//console.log(movements);
movements.sort((a, b) => a - b);
//console.log(movements);

//===============================================
// 164. More Ways of Creating and Filling Arrays
//===============================================
//Various ways of creating arrays
const test164 = [1, 2, 3, 4, 5, 6, 7]; //Literally
//console.log(new Array(1, 2, 3, 4, 5, 6, 7)); //Constructor

//******** Empty Array + fill method ********//
//Arrays can be created without inputting all of the values manually
const x = new Array(7);
//console.log(x); // [empty × 7]
//An array constructor with one argument will create an array with (number passed in) of empty elements
//The are actually contains nothing.
//The x array cannot be used for anything. For example the map.method cannont be used to fill it up

//The only method that can be used on an empty constructor array is .fill()
//The .fill() method will take a parameter and fill the entire array with the value that was passed in

//******** fill method parameters ********//
//x.fill(1); //Mutates the original array
//console.log(x);//[1, 1, 1, 1, 1, 1, 1, 1]

//.fill(value, start, end)
x.fill(2, 2, 4); //does not include the end value;
//console.log(x); //[empty × 2, 2, 2, empty × 3]

//.fill() works on all arrays
test164.fill('new', 2, 5);
//console.log(test164);

//******** Recreate array programmatically ********//
//The from method is called on the Array object contructor
const y = Array.from({ length: 7 }, () => 1);
//console.log(y);
//fron takes 2 parameters:
//1. an object with the length property
//2. mapping function (callback like what we would use in the map method)

const z = Array.from(
  { length: 7 },
  (currentElement, currentIndex) => currentIndex + 1
);
//console.log(z);

//Practice Exercise
//Generate an array w/ 100 random dice rolls
const randomDiceRolls = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 6 + 1)
);

//console.log(randomDiceRolls);

//******** Create actual array from array-like structure ********//
//Non-iterables like a NodeList (generated from .querySelectorAll) dont have access to array methods like .map(), or .reduce()

const balanceLabel = document.querySelector('.balance__value');

balanceLabel.addEventListener('click', () => {
  const movementsNodeList = Array.from(
    document.querySelectorAll('.movements__value'),
    listItem => Number(listItem.textContent.replace('€', ''))
  );

  console.log(movementsNodeList);
});

//An array can be created with  querySelectorAll by using the spread operater.
//But the mapping would have to be done separately
const movementsNodeList2 = [...document.querySelectorAll('.movements__value')];
//console.log(movementsNodeList2);

//console.log(
//   movementsNodeList2.map(el => Number(el.textContent.replace('€', '')))
// );

//===============================================
// 166. Array Methods Practice
//===============================================
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//console.log(accounts);

//How much has been deposited in total accross the bank?

// const totalDeposits = accounts
//   .flatMap(account => account.movements)
//   .filter(movement => movement > 0)
//   .reduce((tot, cur) => tot + cur);

const totalDeposits = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => (cur > 0 ? acc + cur : acc), 0);

//console.log(totalDeposits);

//Count the deposits with deposits over 100
const numberOfDepositsOver1000 = accounts
  .flatMap(account => account.movements)
  .filter(movement => movement > 1000).length;

//console.log(numberOfDepositsOver1000);
//Count the deposits with deposits over 100
//Using reduce method

const numberOfDepositsOver1000Reduce = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur > 1000 ? ++count : count), 0);

//console.log(numberOfDepositsOver1000Reduce);

//Using reduce method to return object containing sum of object and sum of withdrawals
const { deposits2, withdrawals2 } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits2 += cur) : (sums.withdrawals2 += cur);
      sums[cur < 0 ? 'withdrawals2' : 'deposits2'] += cur;
      return sums;
    },
    { deposits2: 0, withdrawals2: 0 }
  );

//console.log(deposits2, withdrawals2);

//NOTE: When destructuring an object, the variable names must match the key names inside of the object

//Converting all letters in a string to title case
function capTitleCase(title) {
  const capitalize = str => {
    console.log(str.replace(str[0], str[0].toUpperCase()));
  };

  const exceptions = ['a', 'in', 'the', 'on', 'with', 'an', 'but', 'or'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word)
        ? word
        : word.replace(word[0], word[0].toUpperCase())
    )
    .join(' ');
  capitalize(titleCase);
}

//capTitleCase(`Hey how are you doing today?`);
//capTitleCase(`BUT do yoU ride In tHe Night OR but Naw?`);

//===============================================
// 167. Coding Challenge #4
//===============================================
/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
*/

const dogs = [
  { name: 'Tiko', weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { name: 'Polly', weight: 8, curFood: 200, owners: ['Matilda'] },
  { name: 'Venom', weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { name: 'Dagger', weight: 32, curFood: 340, owners: ['Michael'] },
];

/*
1.	Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
*/

dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));
//console.log(dogs);

/*
2.	Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
*/
const [sarahsDog] = dogs.filter(dog =>
  dog.owners.includes('Sarah') ? dog : null
);
const amount =
  sarahsDog.curFood > sarahsDog.recommendedFood ? 'too much' : 'too little';
console.log(`Sarah's dog, ${sarahsDog.name}, is eating ${amount}`);

/*
3.	Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
*/
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
/*
4.	Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
*/

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much.`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little.`);

/*
5.	Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false)
*/
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

/*
6.	Log to the console whether there is any dog eating an okay amount of food (just true or false)
*/
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

/*
7.	Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
*/

console.log(
  dogs
    .filter(
      dog =>
        dog.curFood > dog.recommendedFood * 0.9 &&
        dog.curFood < dog.recommendedFood * 1.1
    )
    .map(dog => dog.name)
);

/*
8.	Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
*/

const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);

// Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
