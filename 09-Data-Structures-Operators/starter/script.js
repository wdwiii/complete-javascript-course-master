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
// const add = (...numbers) => {
//   let sum = 0;
//   numbers.forEach(number => {
//     sum += number;
//   });
//   console.log(sum);
// };

//add(1, 2, 5, 5, 1);

//const x = [1, 6, 3, 8, 2];
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
//     console.log(
//       `You ordered a ${mainIngredient} pizza with ${otherIngredients.join(
//         ', '
//       )} & ${lastIngredient}`
//     );
//   },
// };

//Logical Operators can use ANY data type, return ANY data type, short circuiting
// console.log(5 || 'Five');
// console.log('' || 'Empty');
// console.log(true || false);
// console.log('zero' || 0);
// console.log(undefined || null);
//If the first operand is truthy value, the other operand will not even be evaluated.
//restaurant.numGuests = 22;
//console.log(`----- OR -----`);
//const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
//console.log(guest1);

//const guest2 = restaurant.numGuests || 20;
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
//restaurant.numGuests = 0;

//OR operator
//const guestsA = restaurant.numGuests || 15;
//console.log(guestsA);

//Nullish = null and undefined
//const guestsB = restaurant.numGuests ?? 15;
//console.log(guestsB);

/////////////////////////////////////////
//========================================
//109. Logical Assignment Operators
//========================================
// const rest1 = {
//   name: "Lily's Diner",
//   //numGuests: 23,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'Gator Boy Subs',
//   owner: 'Nic Lowry',
// };

//OR assignment operator
//Assigns a value to a variable if that value is currently falsy.

//rest1.numGuests ||= 16;
//rest1.numGuests = rest1.numGuests || 16;
//rest2.numGuests ||= 11;
// rest2.numGuests = rest2.numGuests || 11;

//Nullish assignment operator
//Assigns a value to a variable if that valuse is currently falsy.

//rest1.numGuests ??= 16;
// rest1.numGuests = rest1.numGuests ?? 16;
//rest2.numGuests ??= 11;
// rest2.numGuests = rest2.numGuests ?? 11;

//AND assignment operator
//The AND assignment operator will assign a value to a variable if that value is currently truthy
//rest1.owner &&= '<ANONYMOUS>';
//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner &&= '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';

//console.log(rest1);
//console.log(rest2);

// ====================
//Coding Challenge #1
// ====================

/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:


7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.

Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//1. Create one player array for each team (variables 'players1' and 'players2')
//const [players1, players2] = game.players;
//console.log(players1, players2)

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
//const [gk, ...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
//const allPlayers = [...players1, ...players2];
//console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
//const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
//console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

//When destructuring the game object, if you only pull out the odds property, it will pull out the entire object
// const { odds } = game;
// console.log(odds);

//The odds object can be further destructured to create new variables using the 'odds' values
//const {
//  odds: { team1, x: draw, team2 },
//} = game;
//A colon after the key name can be used to change the name of the variable.
//console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

// const printGoals = (...playerNames) => {
//   console.log(`Goals scored: ${playerNames.length}`);
//   console.log(...playerNames);
// };
//printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
//team1 < team2 && console.log('Team1 is more likey to win');
//team1 > team2 && console.log('Team2 is more likey to win');
//console.log(winner);

/////////////////////////////////////////
//========================================
//111. Looping Arrays: The for-of Loop
//========================================

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
//     console.log(
//       `You ordered a ${mainIngredient} pizza with ${otherIngredients.join(
//         ', '
//       )} & ${lastIngredient}`
//     );
//   },
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

// for (const item of menu) {
//   console.log(item);
// }

//To receive the element AND index from a for-of loop, you must call the .entries() method.

//ENTRIES METHOD
// Creates an array, which in each position contains a new array, containinf the element, and the element.

// for (const item of menu.entries()) {
//   console.log(item);
// }

//console.log([...menu.entries()]);
//To view entries you must log a new array with a spread of the original array with the .entries() method attatched to it.

// for (const item of menu.entries()) {
//   console.log(`#${item[0] + 1} ${item[1]}`);
// }

//Arrays can be destructured when declaring a for-of loop
// for (const [i, el] of menu.entries()) {
//   console.log(`#${i + 1} ${el}`);
// }

/////////////////////////////////////////
//========================================
//112. Enhanced Object Literals
//========================================

//Changes have been made to improve how we write objet literals in JavaScript

const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

const hoursOfOperation = {
  [weekdays[0]]: {
    open: 7,
    close: 22,
  },
  [weekdays[3]]: {
    open: 7,
    close: 22,
  },
  [weekdays[4]]: {
    open: 6,
    close: 24,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// With es6's enhanced object literals we can point to an external object and pass it as a property inside the current object

//Object methods also have a shortened syntax. It is no longer required to set a property to a function expression.

//Property names can be computated using es6's bracket syntax

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto', 'Calzone'],
  hoursOfOperation, //<--- points to external object
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    starterIndex = 3,
    mainIndex = 3,
    time = `12:13`,
    address = `76 Phila Ave`,
  }) {
    return `Order Received. ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
  },
  orderPasta(ingredient1, ingredient2, ingredient3) {
    return `Your pasta with ${ingredient1}, ${ingredient2}, and ${ingredient3} will be ready in a few moments.`;
  },
  orderPizza(mainIngredient, lastIngredient, ...otherIngredients) {
    return `You ordered a ${mainIngredient} pizza with ${otherIngredients.join(
      ', '
    )} & ${lastIngredient}`;
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(restaurant);

/////////////////////////////////////////
//========================================
//113. Optional Chaining
//========================================
//Will throw an error because the .mon property doesnt exist will return undefined.
//console.log(restaurant.hoursOfOperation.mon.open);

//Can use if statement to see if property exist
// if (restaurant.hoursOfOperation && restaurant.hoursOfOperation.mon)
//   console.log(restaurant.hoursOfOperation.mon.open);

//Rewritten using optional chaining
//console.log(restaurant.hoursOfOperation.mon?.open);
//Only if the property that is before the question mark here exists, will the property after the question mark be read
//console.log(restaurant.hoursOfOperation?.mon?.open);

const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.hoursOfOperation[day]?.open ?? 'closed';
//   console.log(`On ${day}, we are ${open}`);
//}

//Optional chaining also works on methods
// console.log(
//   restaurant.orderDelivery?.({
//     starterIndex: 1,
//     mainIndex: 3,
//     time: '10:10 PM',
//     address: '1268 Bird Rd',
//   }) ?? `Method doesn't exist`
// );

// restaurant.shutDown?.(`It's time!`) ??
//   console.log(`Shut down method doesn't exist`);

//Optional chaining also works on arrays
// const users = [
//   { name: 'Willie', age: 54 },
//   { name: 'Brina', age: 24 },
//   { name: 'Levitch', age: 21 },
// ];

// console.log(users[2]?.name ?? `User does not exist`);
// console.log(users[3]?.name ?? `User does not exist`);

/////////////////////////////////////////
//========================================
// 114. Looping Objects:
// Object Keys, Values, and Entries
//========================================

//Looping property names (object keys)
const properties = Object.keys(hoursOfOperation);

//console.log(properties);
let openStr = `The restaurant is open ${properties.length} days this week: `;

for (let day of properties) {
  openStr += `${day}, `;
}
//console.log(openStr);

//Object values
const values = Object.values(hoursOfOperation);
//console.log(values);

//Entire objects
//Logging out Object.entries() will return an array of arrays that contains both the key and the value of the property
//const entries = Object.entries(hoursOfOperation);
//console.log(entries);

//A for-of loop can be used to loop over the array containing the object properties
// for (let entry of entries) {
//   const [key, { open: openTime, close: closeTime }] = entry;
//   console.log(
//     `On ${key}, we are open at ${openTime} and we close at ${closeTime}`
//   );
// }

/////////////////////////////////////////
//========================================
// 115. Coding Challenge #2
//========================================

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Let's continue with our football betting app! Keep using the 'game' variable from before.

// Your tasks:

//console.log(`===== Challenge 1 =====`);
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
/*================
Original Soution
==================*/

// const scored = [...game.scored.entries()];
// for (const scoredBy of scored) {
//   console.log(`Goal ${scoredBy[0] + 1}: ${scoredBy[1]}`);
// }

/*================
Jonas' Soution
==================*/
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

//console.log(`===== Challenge 2 =====`);
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

/*================
Original Soution
==================*/
// const oddsVal = Object.values(game.odds);
// let sum = 0;
// for (let value of oddsVal) {
//   sum += value;
// }
// const avg = sum / oddsVal.length;
// console.log(avg);

/*================
Jonas' Soution
==================*/
// const odds2 = Object.values(game.odds);
// let average = 0;
// for (const odd of odds2) average += odd;
// average /= odds2.length;
// console.log(average);

//console.log(`===== Challenge 3 =====`);
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

/*================
Original Soution
==================*/

// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${
//       team == 'x'
//         ? 'draw'
//         : 'victory ' + (team == 'team1' ? game.team1 : game.team2)
//     }: ${odd}`
//   );
// }

/*================
Jonas' Soution
==================*/
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team == 'x' ? 'draw' : `victory ${game[team]}`;

//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

//console.log(`===== Challenge 4 =====`);
// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value.

// In this game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }
// GOOD LUCK 😀

//Solution
//1. Create an empty object
//2. Loop through elements in game.scored array
//3. If the player property exists inside of the scorers object, add 1 to value
//4. If not, the vaule of the player property will be set to 1

//const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
//console.log(scorers);

/////////////////////////////////////////
//========================================
// 116. Sets
//========================================

//A set is a collection of data that does not have any duplicates

const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pasta']);
//Set(3) {'Pasta', 'Pizza', 'Risotto'}

//Strings are also iterables, so they can be passed and will return the components that make up the string
const nameSet = new Set('Willie is cool');
//Set(8) {'W', 'i', 'l', 'e', ' ', 's', 'c', 'o}

//A set can also be empty
const emptySet = new Set();
//Set(0) {size: 0}

//--- How to work with sets ---//

//* Get the size of a set *
ordersSet.size;
//3

//* Check if element is in set *
ordersSet.has('Pizza');
//true
ordersSet.has('Salad');
//false

//* Add new element to a set *
ordersSet.add('Steamed Spinach', 'Steamed Spinach');
//console.log(ordersSet);
//Set(4) {'Pasta', 'Pizza', 'Risotto', 'Steamed Spinach'}

//* Remove new element to a set *
ordersSet.delete('Pizza');
//console.log(ordersSet);
//Set(4) {'Pasta', 'Risotto', 'Steamed Spinach'}

//* Retreiving values from a set *
//console.log(ordersSet[0]) will return undefined
//Retreiving values from a set is NOT possible
//Sets contain unique values and it only matters if the set has the element
//If values need to be stored in order, it is best to use an array

//* Deleting ALL values from a set *
//ordersSet.clear();
//console.log(ordersSet);
//Set(0) {size: 0}

//* Looping over set *
//for (const order of ordersSet) console.log(order);

//Most common use of sets is to remove duplicate vlues of arrays
const staff = ['host', 'server', 'chef', 'chef', 'server', 'manager', 'host'];

//Convert a set into an array usin the spread(...) operator
//const staffSet = [...new Set(staff)];

//console.log(new Set('Mississippi River').size - 1);

/////////////////////////////////////////
//========================================
// 117. Maps Fundamentals
//========================================
// Map is a data structure that we can use to map store key-value pairs.
// Unlike objects where the keys must be strings, a map key can be any data type including objects, arrays or other maps

//When creating a new map, it is best to start with an empty map
const rest = new Map();

//The .set() method can be used to add new key-value pairs
rest.set('name', "Willie's Pizza");

//The .set() method can be chained to add multiple key-value pairs
rest
  .set('location1', 'Miami, FL')
  .set('location2', 'Sunrise, FL')
  .set('location3', 'Orlando, FL')
  .set('categories', ['pizza', 'fast food', 'delivery', 'open late'])
  .set('open', 6)
  .set('close', 24)
  .set(true, 'We are open!')
  .set(false, 'We are closed.');

//console.log(rest.get('location1'));
//console.log(rest.get(true));

// const time = 5;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//Map methods in action
// console.log(rest.has('location3')); //Check if exists
// rest.delete('location2');
// console.log(rest);
// console.log(rest.size);

//Retreive value of key that is set to object/array
//Log below will not work because they reference 2 different addresses in the heap
//rest.set([1, 2], 'Test');
//console.log(rest.get([1, 2]));

//You must first assign array to a variable and reference that variable in the set method
// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

/////////////////////////////////////////
//========================================
// 118. Maps: Iteration
//========================================
//Whencreating a new map from scratch, this is the preferred method, to create an array of arrays where the first element is the key and the second element is the value
const question = new Map([
  ['question', 'What is your birthplace?'],
  [1, 'Clouds'],
  [2, 'Miami'],
  [3, 'Moon'],
  ['correct', 2],
  [true, 'Correct!'],
]);

//To add elements to an already existing map, use the .set() method

question.set(false, 'Sorry, that answer is incorrect');
//console.log(question);

// Converting object to map
const closet = {
  size: 'large',
  doors: 2,
  doorType: 'swinging',
  clothes: ['shirts', 'pants', 'shoes'],
};
//console.log(closet);

const closetMap = new Map(Object.entries(closet));
//console.log(closetMap);

//Because Maps are iterables, they can be looped over using a for loop
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key == 'number') console.log(`Answer ${key}: ${value}`);
// }

//const answer = Number(prompt(question.get('question')));
//console.log(answer);

/*================
Original Soution
==================*/

// const checkAnswer =
//   answer === question.get('correct')
//     ? console.log(question.get(true))
//     : console.log(question.get(false));

/*================
Jonas' Soution
==================*/
//console.log(question.get(question.get('correct') === answer));
//The above code will validate the inner expression (question.get('correct') === answer))
//This expression will return true or false
//This will be the equivalant to logging question.get(true) or question.get(false)

//Converting map back to an arrray
//use the spread operator to empty contents of map into an array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

/////////////////////////////////////////
//========================================
// 120. Coding Challenge #3
//========================================

/*Let's continue with our football betting app! This time, we have a map called gameEvents (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
//console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
//console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// const eventTime = [...gameEvents.keys()].pop();
// let avgMins = eventTime / gameEvents.size;
// console.log(`An event happened, on average, every ${avgMins} minutes`);

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

// for (const [time, event] of gameEvents) {
//   console.log(`[${time <= 45 ? 'FIRST' : 'SECOND'} HALF] ${time}: ${event}`);
// }
// GOOD LUCK 😀

/////////////////////////////////////////
//========================================
// 121. Working with Strings - Part 1
//========================================

const airline = 'Spirit Airlines';
const plane = 'SA5678';

// console.log(`/// Get character at certain index ///`);
// console.log(airline[8]); //i
// console.log(airline[3]); //r
// console.log(airline[10]); //l
// console.log(airline[5]); //t
// console.log("It's a zoo!"[7]); //z

// console.log(`/// Read length of string ///`);
// console.log(airline.length);
// console.log(plane.length);

// console.log(`/// Get index of a particular character ///`);
// console.log(plane.indexOf('6'));
// console.log(plane.indexOf('A'));
// //You can search for a multi-character string
// console.log(airline.indexOf('Airlines'));
// //indexOf method is case sensitive. If string doesn't exist, -1 will be returned
// console.log(airline.indexOf('airlines'));

// console.log(`/// Get index of last occurance of character ///`);
// console.log(airline.lastIndexOf('r'));
// console.log(airline.lastIndexOf('i'));

// console.log('/// Extract part of string ///');
// //first value is index that extraction will begin
// console.log(airline.slice(7));
// console.log('Miami, Florida'.slice(0, 5));
// //end parameter can also be specified
// //end value will NOT be included in the substring

// console.log('/// Dynamically extract part of string ///');
// const intro = `Hi, my name is Willie`;
// console.log(intro.indexOf('Willie'));
// console.log(intro.slice(15)); //Willie;

// console.log('/// Begin extracting from end of string');
// console.log(intro.slice(-9)); //is Willie
// console.log(intro.indexOf('name')); //7
// console.log(intro.slice(7, -10)); //name

//Challege
const guestSeat = prompt(`Please enter your assinged seat`);

if (
  guestSeat.slice(-1).toLowerCase() === 'a' ||
  guestSeat.slice(-1).toLowerCase() === 'f'
) {
  console.log('You have a window seat');
} else if (
  guestSeat.slice(-1).toLowerCase() === 'b' ||
  guestSeat.slice(-1).toLowerCase() === 'e'
) {
  console.log('You have a middle seat');
} else if (
  guestSeat.slice(-1).toLowerCase() === 'c' ||
  guestSeat.slice(-1).toLowerCase() === 'd'
) {
  console.log('You have a aisle seat');
} else {
  console.log(`Please enter valid seat number`);
}
