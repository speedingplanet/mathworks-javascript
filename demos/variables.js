/* eslint-disable no-var */
/* eslint-disable prefer-const, no-unused-vars */

// let|const variableName = someValue;
// let x;
// ...later
// x = 10;

// Variables must start with $, _, or an alphabetical character
// followed by $, _, or alphanumeric character
// No dashes, or other punctuation
let a;
a = 10;

let b = 10;
b = 20;
b = 'word';

const c = 30;
// This will fail
// c = 40;

// eslint-disable-next-line no-lone-blocks
{
  let d = 'some value d';
  const e = 'some value e';

  // console.log with multiple arguments
  console.log('Inside block: d:', d, 'e:', e);

  // console.log with string concatenation
  // console.log('Inside block: d: ' + d + ' e: ' + e);

  // console.log using backticks (see below)
  // console.log(`Inside block: d: ${d} e: ${e}`);
}

// This will fail
// console.log('Outside block d:', d, 'e:', e);

// eslint-disable-next-line no-lone-blocks
{
  var f = 'some value f';
}

// This will ... not fail?
console.log('f:', f);

function varScope() {
  var g = 'some value g';
  console.log('In function:', g);
}

// This will fail ...?
// console.log( 'g:', g );

// Data types
const aString = 'string';

// prettier-ignore
// eslint-disable-next-line
const aDoubleQuotedString = "double-quoted string";

// Backticks allow multi-line strings
let aReallyLongLine = `
This
is
a
really
long
line`;

// Backticks also allow variable interpolation in ${}
const templateString = `Value of aString: ${aString}`;
const todayTemplate = `Today is ${Date.now()}`;
console.log(todayTemplate);

const aNumber = 10;
const aLongNumber = 10_000_000_000_000_000_000;
const aBoolean = true;
const anArray = [1, 2, 3, 4];
anArray.push(5, 6, 7);

const multiDimensionalArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
multiDimensionalArray.push([7, 8]);

console.log(multiDimensionalArray[0][1]);

// Also an "object literal"
const anObject = {
  firstName: 'John',
  lastName: 'Paxton',
  'zip code': '07110',
  state: 'NJ',
};

console.log(anObject.firstName);
console.log(anObject['zip code']);

const data = {
  firstNames: [],
};

data.firstNames.push('Arpan', 'John', 'Anita');

const PI = 3.14;

const myConstants = {
  pi: 3.14,
  gravity: 9.8,
};

Object.freeze(myConstants);
console.log(Math.PI);

const aFunction = function (x, y) {
  return x + y;
};

aFunction(1, 2);

const aRegularExpression = /[0-9]+/;

// eslint-disable-next-line prefer-regex-literals
const anotherRegExp = new RegExp('[0-9]+');

const today = new Date();

const exampleMap = new Map();
const exampleSet = new Set();
