'use strict';

//==============================
//99. Primitives vs Objects (Primitives vs Reference Types)
//==============================

//Primitive Types: Number, String, Boolean, Undefined, Null, Symbol, BigInt

//Reference Types: Object Literal, Arrays, Functions, ++

//** On the other hand, primitives or primitive types are stored in the execution contexts in which they are declared. (Call Stack)*/

//Primitive Examples
//Each var has a unique idenitfier address
let age = 29;
//oldAge ponits to the memory address of age
let oldAge = age;
//when the value is reassigned, the reassined variable (age) receives a new memory address in the call stack
age = 44;
console.log(age);
console.log(oldAge);

//Reference Examples
//Ref values are stored in the HEAP. It receives a unique identifier but it doesnot point directly to the newly created memory address in the heap.

//It will point to a new piece of memory that's created in the stack. The memory will then point to the object that's in the heap by using the memory address as its value.

//The piece of memory in the call stack has a reference to the piece of memory in the heap, which holds the me object

let me = {
  name: 'Luna',
  age: 2,
};

const friend = me;
friend.age = 13;
//friend and me actually point to the exact same object in the memory heap. Whenever we change something in this object so these are basically just two different identifiers pointing to the exact same value.

console.log(friend, me);

/////////////////////////////////////////
