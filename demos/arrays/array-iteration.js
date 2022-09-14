/* eslint-disable no-unused-vars */

const states = ['NJ', 'MA', 'CA', 'IL', 'FL', 'CT', 'ME'];

// Iterator functions usually take a callback/predicate with this signature
// (item?, index?, array?) => void
// Technically, all three are optional arguments!
// No breaking, unfortunately
// No return value either
states.forEach((item, index, array) => {
  console.log(`${item} can be found at index ${index}.`);
});

// Array.prototype.some((item?, index?, array?) => boolean) => boolean
// Return false all the way through, some() returns false
// Return true internally, break, and some() returns true
const statesContainA = states.some((item) => {
  if (item.includes('A')) {
    // Keep looping
    return false;
  } else {
    // Stop looping
    return true;
  }
});

// Array.prototype.every((item?, index?, array?) => boolean) => boolean
// Return true all the way through, every() returns true
// Return false internally, break, and every() returns false
const statusLengthTwo = states.every((item) => {
  if (item.length === 2) {
    // Keep looping, if this never returns false, every() returns true
    return true;
  } else {
    // Stop looping, every() also returns false
    return false;
  }
});

// Array.prototype.map((item?, index?, array?) => value) => Array
// Iterate over every element in the array, do something to it,
// Return a new array with the processed results
const mappedToLowerCaseArray = states.map((state) => state.toLowerCase());

// But be careful about modifying an array of references, like below
const people = [
  {
    firstName: 'John',
    lastName: 'Paxton',
    state: 'NJ',
  },
  {
    firstName: 'Dann',
    lastName: 'Russo',
    state: 'MA',
  },
];

// Bad, modifies original values
const badMappedPeople = people.map((person) => {
  person.state = person.state.toLowerCase();
  return person;
});

// Better
const mappedPeople = people.map((person) => {
  // Shallow copy!
  const copiedPerson = { ...person };
  copiedPerson.state = copiedPerson.state.toLowerCase();
  return copiedPerson;
});

// Array.prototype.filter((item?, index?, array?) => boolean) => Array
// Filter the values that pass a predicate test into a new array
const statesThatStartWithC = states.filter((state) => state.startsWith('C'));

// Logical indexing of an array
// Filter an array of values by a corresponding array of booleans
let wantedBoolean = [true, false, true, false, true, true, false];
let wantedBooleanStates = states.filter((state, index) => index);

// Filter an array of values by an array of positions
let wantedIndices = [0, 2, 4, 5];
let wantedIndicesStates = states.filter((state, index) => wantedIndices.includes(index));

// Array.prototype.find((item?, index?, array?) => boolean) => item | null
// Find only the first match for a predicate
const firstStateWithN = states.find((state) => state.includes('N'));

// Array.prototype.reduce((lastValue, nextItem, index?, array?) => nextValue, startingValue?) => finalValue
// Process every item in an array, generating a value based on that processing
// The argument function is referred to as an accumulator
// Tallies values left-to-right
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = numbers.reduce((runningTotal, currentItem) => runningTotal + currentItem, 0);

// Array.prototype.reduceRight() is also available, which tallies values right-to-left
