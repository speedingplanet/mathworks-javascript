/* eslint-disable no-unused-vars, prefer-const, no-var */
console.log('Hello, MathWorkers!');

// Variables
let x = 10;
let y = '10';

let z = x + y;

let firstName = 'John';
// let aString2 = "John";
let fullName = `${firstName} Paxton. ${2 + 2}`;
console.log('fullName: ', fullName);

const today = new Date();

// Strings, numbers and booleans
const a = 10;

const names = ['John', 'Dan', 'Tim'];
names.push('Andre');

function scope() {
  var someVar = 'some value in a function';
  return 1;
}

for (let x = 0; x < 10; x++) {
  let someVar = 'x is ' + x;
}

scope();
// console.log( 'The value of someVar is ', someVar );
