'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

let account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

let account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

let accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//===============================================
// 170. Converting and Checking Numbers
//===============================================
//In JavaScript all numbers are represented internally as floating point numbers (decimal values)
//console.log(23 === 23.0);
//Numbers are also represented in a 64 base 2 format. Some fractions are difficult to represent in base 2 format

//Base 10 = numbers from 0-9
//1/10 = 0.1 | 3/10 = 0.3333333 | 0.1 + 0.2 = 0.3

//Binary (base 2) = 0 or 1 | 0.1 + 0.2 = 0.30000000000000004
//0.1 + 0.2 === 0.3 || False

//Coverting to type number
// console.log(Number('23'));
// console.log(+'23');
//When JavaScript sees the plus operator, it will do type coercion and automatically convert all the operands to numbers.

//Parsing Integers
//.parseInt will automatically try to figure out the number that is in the passed string.
//The string has to start with a string
//console.log(Number.parseInt('49lbs', 10));

//The second argument is the base of the numeral system we are using. In most cases it will be base 10 (digits 0-9)

//Parsing Floating Points (decimals)
// console.log(Number.parseInt('2.4lbs'));
// console.log(Number.parseFloat('2.4lbs'));
//parseFloat will capture any digits after the decimal

//isNaN - used to check if value is NaN
// console.log(Number.isNaN(20)); //false
// console.log(Number.isNaN('20')); //false
// console.log(Number.isNaN(+'20x')); //true
//The last example returns true because '20x' is NaN
//console.log(Number.isNaN(32 / 0)); //false
//Infinity will return false, because it is still a number type

// //It is better to check if a value is a real number by using the isFinite method
// console.log(Number.isNaN(20)); //true
// console.log(Number.isNaN('20')); //false
// console.log(Number.isFinite(32 / 0)); //False

//===============================================
// 171. Math and Rounding
//===============================================
// //Math Methods
// console.log(`===== Math Methods =====`);
// console.log(`Math.sqrt(81): `, Math.sqrt(81)); //Square Root
// console.log(
//   `Math.max(2, 5, 4, 2, 77, 86, 9): `,
//   Math.max(2, 5, 4, 2, 77, 86, 9)
// ); // Maximum Value
// console.log(
//   `Math.min(2, 5, 4, 2, 77, 86, 9): `,
//   Math.min(2, 5, 4, 2, 77, 86, 9)
// ); // Maximum Value

// //Math Constants
// console.log(`===== Math COnstants =====`);
// console.log(`Math.PI: `, Math.PI);
// console.log(`Math.random(): `, Math.random()); //Returns a floating point number between 0 and 1

// //Generating random number between two values
// console.log(`===== Random between two values =====`);
// console.log(
//   `Math.trunc(Math.random() * 10) + 1: `,
//   Math.trunc(Math.random() * 10) + 1
// ); //1 and 10

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(`Random number: `, randomInt(5, 10));

// //Rounding Integers
// console.log(`===== Rounding Integers =====`);
// console.log(`Math.trunc(24.66) : `, Math.trunc(24.66)); //Removes decimal

// console.log(`Math.round(24.66) : `, Math.round(24.66)); //Rounds to nearest integer
// console.log(`Math.round(24.46) : `, Math.round(24.46)); //Rounds to nearest integer

// console.log(`Math.ceil(24.66) : `, Math.ceil(24.66)); //Rounds up to nearest integer
// console.log(`Math.ceil(24.46) : `, Math.ceil(24.46)); //Rounds up to nearest integer

// console.log(`Math.floor(24.66) : `, Math.floor(24.66)); //Rounds down to nearest integer
// console.log(`Math.floor(24.46) : `, Math.floor(24.46)); //Rounds down to nearest integer

// //Rounding Decimals
// console.log(`===== Rounding Decimals =====`);
// console.log((7.3586).toFixed()); //Default to 0
// console.log((7.3586).toFixed(1));
// console.log((7.3586).toFixed(2));
// //toFixed will convert a string. to convert back to number, use the unary plus operator
// console.log(+(7.3586).toFixed(2));

//===============================================
// 172. The Remainder Operator
//===============================================
//The remainder operater returnder the remainder of a division problem
// console.log(5 / 2); //5 = 2 + 2 + 1
// console.log(5 % 2); //1

// console.log(8 / 3); //8 = 3 + 3 + 2
// console.log(8 % 3); //2

//Checking if a number is even or odd
const checkEvenNumber = num => {
  console.log(`The number ${num} is ${num % 2 === 0 ? 'even' : 'odd'}`);
};

// checkEvenNumber(45);
// checkEvenNumber(100);

labelBalance.addEventListener('click', function () {
  //Using the remainder operator to select odd rows
  [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
    if (i % 2 !== 0) row.style.backgroundColor = '#c3dcff';
    if (i % 3 === 0) row.style.backgroundColor = 'yellow';
  });
});

//===============================================
// 173. Numeric Separators
//===============================================
//If we want to represent a really large number with visual separators, we use underscore
const diameter = 287_600_000_000;
//JavaScript will ignore the underscore when read
//console.log(diameter);

//Underscore can be used to give meaning to numerical values
const price = 89_99;
//console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

//===============================================
// 174. Working with BigInt
//===============================================
// //The largest number that JasvaScript can safely represent is
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);

// //To represent numbers larger than 9007199254740991, then BigInt will be used
// console.log(42635776957897653186878890678426);
// //To convert a number to a BigInt a n-suffix can be used
// console.log(42635776957897653186878890678426n);
// //The BigInt constructor still has to calculate the number before converting to BigInt. So it is recommended to only use with smaller numbers to ensure accuracy
// console.log(BigInt(42635776957897653186878890678426));
// console.log(BigInt(1223334444));

// //Operations with BigInt
// console.log(10000n + 5000n);
// console.log(
//   4728579428576189756918754343276596549847398743857n *
//     34563676245563837736557758536567687377635853568873n
// );

// //Exceptions
// console.log(20n > 10); //Comparison works with BigInt
// console.log(20n == 20);
// console.log(20n == '20');
// console.log(20n === 20); //Will return false because they are different types
// console.log(typeof 20n);

// //Division
// //console.log(20n / 2); //Error: Cannot mix BigInt and other types
// console.log(20n / 2n);
// console.log(20 / 3); //6.666666666666667
// console.log(20n / 3n); //6n BigInt only returns integers, no decimal values

//===============================================
// 176. Creating Dates
//===============================================

account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

accounts = [account1, account2];

// Ways of creating dates - All use the new Date constructor function, but take in different parameters

//No Parameters - Returns current date and time
//const now = new Date(); //Returns a date object
//const nowStr = Date();
// console.log(now);
// console.log(nowStr);

//Parse from a string
// console.log(new Date(`Feb 14 2022`));
// console.log(new Date(`09/03/68`));
// console.log(new Date(account2.movementsDates[1]));

//Passing in number values
// console.log(new Date(2013, 11, 31)); // Year/Month/Day
// console.log(new Date(2013, 11, 31, 3, 45, 56)); // " "/Hour/Min/Sec
// console.log(new Date(2013, 11, 32, 3, 45, 56));

//Number of milliseconds passed since beginning of Unix time
// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const future = new Date(2029, 11, 31, 3, 45, 56);
// console.log(future);

// //Date Methods
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

// console.log(future.toISOString());
// console.log(future.getTime()); //Milliseconds since Jan 1, 1970
// console.log(new Date(1893401156000)); //Passing the value of future.getTime()

// console.log(Date.now()); //Grab current timestamp in milliseconds since...

// //Set methods
// future.setFullYear(3440);
// future.setMonth(6);
// console.log(future);

//===============================================
// 177. Operations with Dates
//===============================================
//Calculations with dates
//When converting a date to a number, the result is the timestamp in milliseconds. Calculations can then be performed
//const today = new Date();
//const future = new Date(2022, 1, 28);

//Function notes
//1. Function takes two date parmmeters
//2. Date objesct will be converted to a  number
//3. Subtract the start from the end
//4. Reduce the difference from number of milliseconds to number of days
// const checkDaysPassed = (date1, date2) => {
//   const timeDifference = +date1 - +date2;
//   return Math.abs(timeDifference) / 1000 / 60 / 60 / 24;
// };

// console.log(checkDaysPassed(today, future));

//===============================================
// 178. Internationalizing Dates (Intl)
//===============================================
const today = new Date();
const day = `${today.getDate()}`.padStart(2, 0);
const month = `${today.getMonth() + 1}`.padStart(2, 0);
const year = today.getFullYear();
//console.log(`${month}/${day}/${year}`);
console.log(today);

//This is the most straightforward way at formatting time
const todayFormatted = new Intl.DateTimeFormat('en-US').format(today);
console.log(todayFormatted);

//The date and time formats can be customized using the options argument:
const todayV2 = new Date();
const options = {
  minute: 'numeric',
  hour: 'numeric',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  weekday: 'long',
};

//Specify default date formatting for language (locale)
//const locale = navigator.language;
console.log(new Intl.DateTimeFormat('default', options).format(todayV2));
