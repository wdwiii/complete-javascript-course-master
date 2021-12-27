'use strict';

//========================================
// 128. Default Parameters
//========================================
const bookings = [];

const createBooking = (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) => {
  //⬇︎ Old way of setting default values. In ES6 ⬆︎, default parameter can be set in the parameter input
  // numPassengers ||= 1;
  // price ||= 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  //console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //Gives default values for numPassengers & price
createBooking('LH123', 2); // Overrides numPassengers, set default price based on default parameter expression
createBooking('LH123', 2, 765); //Overrides all default values

//Skipping parameters
//When calling a function, arguments cannot be skipped over

// Leave the number of passengers as the default value, but specify the price.
createBooking('A123', 1000); //Will not work properly because the second argument here will always be mapped to the second parameter.

createBooking('A123', undefined, 1000); //Specifying undefined is the same as not setting a value, which will then short circuit to the default value

//========================================
// 129. How Passing Arguments Works:
//      Value vs. Reference
//========================================

const flight = 'A2245';
const bobby = {
  name: 'Bobby Tarantino',
  passport: 1029384756,
};

const checkIn = (flightNum, passenger) => {
  flightNum = 'DL324';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1029384756) {
    console.log('Check in successful');
  } else {
    console.log('Invalid passport number');
  }
};

//checkIn(flight, bobby);
//console.log(flight); //A2245
//The value of the flight variable is a primitive data type (string)
//When flight is passsed into the function to the first parameter, creates a copy of the original value
//(same as writing const flightNum = flight)

//console.log(bobby); //{name: 'Mr. Bobby Tarantino', passport: 1029384756}
//When a reference type (object or array) is passed to a function, what is copied is really just a reference to the object in the memory heap.
//(same as writing const passenger = bobby)

//Whatever is changed in the copy is also changed in the original

//=============================================
// 131. Functions Accepting Callback Functions
//=============================================
//Will be used as callback function
///A callback function is a function that is passed as an argument to another function, to be “called back” at a later time
const oneWord = str => {
  return str.replaceAll(' ', '').toLowerCase();
};
oneWord(`My name is Willie and I like to code`);

const upperFirstWord = str => {
  const [firstWord, ...strArr] = str.split(' ');
  // console.log([firstWord.toUpperCase(), ...strArr].join(' '));
  return [firstWord.toUpperCase(), ...strArr].join(' ');
};

//Example of Higher Order Function
//Higher Order Function accepts a function as a parameter
const transformer = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`String transformed by the ${fn.name} function`);
  console.log(``);
};

//transformer('This is an example of a higher order function', oneWord);

//transformer('This is another example of a higher order function',upperFirstWord);

//Example of callback function, using an event handler
const highFive = e => {
  if (e.target.innerText.includes('Closer')) {
    console.log(`✋🏾 High five!`);
  }
};

document.addEventListener('click', highFive);
//In the example above, when an element is clicked, the highFive function will be called

//Example of callback function in forEach method
const dogLove = dogName => {
  console.log(`We love ${dogName}`);
};

const dogNames = ['Pluto', 'Debbie', 'Triton', 'Kujo', 'Berry', "S'more"];
//dogNames.forEach(dogLove);

//Callback allows us to achieve 'abstraction' in our code
//Abstraction is used to hide background details or any unnecessary implementation about the data so that users only see the required information

//=============================================
// 132. Functions Returning Functions
//=============================================
///When the greet function is called, the result of that function will be another function.
const greet = greeting => {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

//The result can be stored in a variable
const greeterGoodEvening = greet(`Good evening`);
const greeterGoodMorning = greet(`Good morning`);
//The value of the variables is the function that is returned from the greet() function

//This allows us to call greeterGoodEvening or greeterGoodMorning like any other function.
//greeterGoodEvening(`Willie`);
//greeterGoodMorning(`Tommy`);

//A functiom that returns another function can also be called in one line. The input from the second can be placed in parenthesis after the input from the higher level function
//greet('Howdy')('Miss Jemma');

//CHALLENGE: Rewrite greet function using arrow functions

const greet2 = greeting => name => console.log(`${greeting}, ${name}`);

//greet2('Wassup')('Ebony');
//greet2('Aloha')('Segal');

//=============================================
// 133. The Call and Apply Methods
//=============================================

const delta = {
  airline: 'Delta Airlines',
  airlineCode: 'DL',
  bookings: [],
  book(flightNumber, passengerName) {
    console.log(
      `${passengerName} booked a flight on ${this.airline} ${this.airlineCode}${flightNumber}`
    );
    this.bookings.push({
      passengerName: passengerName,
      flight: `${this.airlineCode}${flightNumber}`,
    });
    console.log(this);
    console.log(this.bookings);
  },
};

delta.book(345, 'James Young');
delta.book(2247, 'Michelle Peters');

const book = delta.book;

const eurowings = {
  airline: 'Eurowings',
  airlineCode: 'EW',
  bookings: [],
};

//Will not work because the this function contains the this keywprd from the method it was copied from.
//As a function (instead of a method), the this keyword refers to the window and will return undefined

//book(854, 'Adam Gregory');
book.call(eurowings, 854, 'Adam Gregory');
//The first argument is what the this keyword will point to
//console.log(eurowings);

//The book function was not directly called.
//It was the call method that called the book function with the this keyword pointing to eurowing

book.call(delta, 789, 'Brianna Welden');

const spirit = {
  airline: 'Spirit Airlines',
  airlineCode: 'SA',
  bookings: [],
};

book.call(spirit, 451, 'Paris Dowden');

//The apply() method
//Works similarly to the call() method
//Does NOT take a list of arguments, but an arry of arguments
const flightData = [451, 'Michael Flenn'];

//book.apply(spirit, flightData);
//First argument is the pointer to the object that th this keyword will reference

//The apply method is not used anymore in modern JavaScript
//Better to use the call method and use the spread operator to pass contents of array
book.call(spirit, ...flightData);
