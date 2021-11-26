'use strict';

/////////////////////////////////////////
//========================================
//103. Destructuring Arrays
//========================================

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

//Normally to pull values from an array, you would declare variables separately
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//console.log(`Original array: `, a, b, c);

//With array destructuring, all three variables can be declared at the same time.
//DO NOT forget to declare variables with const
// const [x, y, z] = arr;
//console.log(`Destructured array: `, x, y, z);

//This will extract the first 2 elements from the array
// const [first, second] = restaurant.categories;
// console.log(first, second);

//Leave a hole in the destructoring operator in to skip over element in the array
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
//Switching values of variables

//Without destructuring
// console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//With destructuring
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

//Creating function to return array and destruct variables
// console.log(restaurant.order(2, 1));
//*Check method on line 33*
// const [starter, main] = restaurant.order(2, 1);
// console.log(`Starter: `, starter, `Main: `, main);

// const nested = [2, 3, [5, 6]];
// const [v1, , array] = nested;
// console.log(array);

//destructuring a nested array
// const [v2, , [av1, av2]] = nested;
// console.log(av1, av2);

//default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// /////////////////////////////////////////
// //========================================
// //104. Destructuring Objects
// //========================================
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto', 'Calzone'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // When passing an object as a param, the properties of the object should have the same names as the object that will be passed when the function is called
//   orderDelivery: function ({
//     starterIndex = 3,
//     mainIndex = 3,
//     time = `12:13`,
//     address = `76 Phila Ave`,
//   }) {
//     console.log(
//       `Order Received. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ingredient1, ingredient2, ingredient3) {
//     console.log(
//       `Your pasta with ${ingredient1}, ${ingredient2}, and ${ingredient3} will be ready in a few moments.`
//     );
//   },
//   orderPizza: function (mainIngredient, lastIngredient, ...otherIngredients) {
//     //console.log(mainIngredient, otherIngredients);
//     console.log(
//       `You ordered a ${mainIngredient} pizza with ${otherIngredients.join(
//         ', '
//       )} & ${lastIngredient}`
//     );
//   },
// };
// Default values can be attatched to parameters. These will be used if no parameter is specified when the function is called.

// restaurant.orderDelivery({
//   time: '2:45',
//   address: '123 Main St',
//   mainIndex: 2,
//   starterIndex: 1,
// });

// restaurant.orderDelivery({
//   time: '1:56',
//   address: '181 Leeway Terrace',
//   mainIndex: 0,
//   starterIndex: 0,
// });

// restaurant.orderDelivery({});

// const { name, categories, openingHours } = restaurant;
// console.log(name);
// console.log(categories);
// console.log(openingHours);

// const {
//   name: restaurantName,
//   categories: tags,
//   openingHours: restaurantHours,
// } = restaurant;
// console.log(restaurantName);
// console.log(tags);
// console.log(restaurantHours);

//setting default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
//console.log(menu)

//mutating variables
// let a = 765;
// let b = 345;

// const obj = {
//   a: 34,
//   b: 5,
//   c: 12,
// };

// ({ a, b } = obj);

//console.log(a, b);

//Destructuring Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;

//console.log(open, close);

/////////////////////////////////////////
//========================================
//105. The Spread Operator (...)
//========================================

// const array = [1, 3, 5, 7, 9];
// const newArrayManual = [
//   -1,
//   0,
//   array[0],
//   array[1],
//   array[2],
//   array[3],
//   array[4],
// ];

//console.log(array);
//console.log(newArrayManual);

// The spread operator can be used whenever we would otherwise write multiple values separated by commas.

// const newArraySpread = [...newArrayManual, 11, 13];
//console.log(newArraySpread);

//Function that adds item to mainMenu in the restaurant object.
//Copies the array using the spread operator.

// const updateMenu = menuItem => {
//   restaurant.mainMenu = [...restaurant.mainMenu, menuItem];
//   return restaurant.mainMenu;
// };

// updateMenu('Chicken Parmesan');
// updateMenu('Lasangna');

//Copying an array
// const menuCopy = [...restaurant.mainMenu];
//console.log(menuCopy);

//Merging arrays
// const entireMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(entireMenu)

//The spread operator works on all iterables Arrays, strings, maps, or sets. NOT objects.

// const str = 'Willie';
// const letters = [...str];
// console.log(...str)
// console.log(letters)

// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];

//console.log(ingredients);
//restaurant.orderPasta(...ingredients);
//The spread opperator takes the array that was populated via prompts and passes the user entered data as parameters to the orderPasta method

//Objects and the spread operator
//Spread operator will copy all the properties of the restaurant object into this new object.
// const newRestaurant = {
//   foundingYear: 2003,
//   ...restaurant,
//   founder: 'Dave Free',
// };
//console.log(newRestaurant);

//Making a copy and changing details.
//Because this is a new object that only copies the content of the orignial, this object has its own reference address in the HEAP
//Details can be changed without altering the properties on the original object
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Chuck E. Cheese';

/////////////////////////////////////////
//========================================
//106. Rest Patterns and Parameters (...)
//========================================

//Spread operator is on the RIGHT side of the assignment operator (=)
// const arr = [1, 2, 3, ...[4, 5]];
//console.log(arr)

//Rest operator is on the LEFT side of assignment operator (=)
// const [a, b, ...remaining] = [10, 11, 12, 13, 14];
//console.log(remaining)

//REST and Spread operaters can be used in combination for arrays
// const [item1, , item2, ...everythingElse] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

//console.log(item1, item2);
//console.log(everythingElse);

//Using in combination for Objects
//When destructuring objects you can isolate properties into their own variables by using the same name
// const { sat, ...weekdays } = restaurant.openingHours;
//console.log(weekdays);

//Using in functions
const add = (...numbers) => {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  console.log(sum);
};

//add(1, 2, 5, 5, 1);

const x = [1, 6, 3, 8, 2];
//add(...x);

// restaurant.orderPizza(
//   'pepperoni',
//   'mushrooms',
//   'olives',
//   'banana peppers',
//   'feta cheese'
// );

//SECTION REVIEW
//Spread and Rest syntax look exactly the same, but they work in opposite ways.

//The spread operator is used where we would otherwise write VALUES, separated by a comma (right of assingment opperator).

//The rest pattern is used where we would otherwise write VARIABLE NAMES separated by commas (left of assignment operator).

/////////////////////////////////////////
//========================================
//107. Short Circuiting - && and ||
//========================================
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto', 'Calzone'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 3,
    mainIndex = 3,
    time = `12:13`,
    address = `76 Phila Ave`,
  }) {
    console.log(
      `Order Received. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(
      `Your pasta with ${ingredient1}, ${ingredient2}, and ${ingredient3} will be ready in a few moments.`
    );
  },
  orderPizza: function (mainIngredient, lastIngredient, ...otherIngredients) {
    console.log(
      `You ordered a ${mainIngredient} pizza with ${otherIngredients.join(
        ', '
      )} & ${lastIngredient}`
    );
  },
};

//Logical Operators can use ANY data type, return ANY data type, short circuiting
// console.log(5 || 'Five');
// console.log('' || 'Empty');
// console.log(true || false);
// console.log('zero' || 0);
// console.log(undefined || null);
//If the first operand is truthy value, the other operand will not even be evaluated.
//restaurant.numGuests = 22;
//console.log(`----- OR -----`);
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
//console.log(guest1);

const guest2 = restaurant.numGuests || 20;
//console.log(guest2);

//Short circuiting with the AND operator (&&)
// console.log(`----- AND -----`);
//The && operator short circuits when the first value is falsy.
//When it is truthy, it means that the evaluation continues and the last value is returned.

//Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('vegetarian', 'onions', 'pineapple', 'spainch');
// }

//restaurant.orderPizza && restaurant.orderPizza('cheese', 'leeks', 'feta');

//SECTION SUMMARY
//The OR || operator will return the first truthy value of all the operands, or the last value if all of them are falsy.
//The AND operator will return the first falsy value or the last value if all of them are truthy.

//And as for practical applications,
//The OR operator can be used to set default values
//The AND operator can be used to execute code in the second operand, if the first one is true.

/////////////////////////////////////////
//========================================
//108. The Nullish Coalescing Operator (??)
//========================================
restaurant.numGuests = 0;

//OR operator
const guestsA = restaurant.numGuests || 15;
console.log(guestsA);

//Nullish = null and undefined
const guestsB = restaurant.numGuests ?? 15;
console.log(guestsB);
