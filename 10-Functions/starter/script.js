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
  console.log(booking);
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
