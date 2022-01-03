'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//=============================
// 144. Looping Arrays: forEach
//=============================

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

movements.forEach(function (movement, index, array) {
  const transactionType = movement < 0 ? `withdrew` : `deposited`;
  const amount = Math.abs(movement);
  console.log(`You ${transactionType} $${amount} dollars`);
  console.log(index);
});

//One fundamental difference between the two is that you cannot break out of a forEach loop. forEach will ALWAYS loop over the entire array
//If you need to use continue and break statements you must use a for of loop
