'use strict';

/////////////////////////////////////////
//========================================
//103. Destructuring Arrays
//========================================

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
};

//Normally to pull values from an array, you would declare variables separately
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//console.log(`Original array: `, a, b, c);

//With array destructuring, all three variables can be declared at the same time.
//DO NOT forget to declare variables with const
const [x, y, z] = arr;
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

const nested = [2, 3, [5, 6]];
const [v1, , array] = nested;
console.log(array);

//destructuring a nested array
const [v2, , [av1, av2]] = nested;
console.log(av1, av2);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
