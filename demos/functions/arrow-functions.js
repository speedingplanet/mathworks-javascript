/* eslint-disable no-unused-vars */

// Function declaration
function addFunction(x, y) {
  return x + y;
}

// Arrow function expression
const addArrow = (x, y) => {
  return x + y;
};

// If it's a one-liner, can eliminate {} and "return"
const addArrowShort = (x, y) => x + y;

const timesTwo = (x) => x * 2;

// Multi-line returns are wrapped with parentheses, not curly braces
// prettier-ignore
const multiLineReturn = () => (
  'one ' +
  'two ' +
  'three ' +
  'four ' +
  'five ' +
  'ten ');

function generatePersonFunction(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// A one-liner that returns an object can be confusing.
// One-liner means (), but it's returning an object, so {} inside ()
const generatePersonArrow = (firstName, lastName) => ({
  firstName,
  lastName,
});

const generatePersonArrowWithReturn = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
};

const filter = (value) => (value > 10 ? value : value + 10);

// Terrible, but valid
// const x = x => x * x;
