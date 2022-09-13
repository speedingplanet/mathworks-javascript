/* eslint-disable no-unused-vars, no-unused-expressions */
const person = {
  firstName: 'John',
  lastName: 'Paxton',
  city: 'Nutley',
  state: 'NJ',

  // Different ways to add a function
  getState() {
    return this.state;
  },
  getCity: function () {
    return this.city;
  },
  add: (x, y) => x + y,
};

// Iteration possibilities
const keys = Object.keys(person);
const values = Object.values(person);

// entries [[key1, value1], [key2, value2]]
const entries = Object.entries(person);

Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

// Object.keys() equivalent
for (const key in person) {
  // Whatever
}

// enumerable: does this key show up in a loop?
// configurable: can we call defineProperty() on this key?
// writeable: can this value be changed?

// eslint-disable-next-line max-len
// More here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description

Object.keys(person)
  .filter((key) => typeof person[key] === 'function')
  .forEach((key) => {
    Object.defineProperty(person, key, { enumerable: false });
  });

Object.defineProperty(person, 'someMethod', {
  enumerable: false,
  value: () => console.log('Some method'),
});

// Destructuring
const { firstName, lastName } = person;

// Identifiers: $, _, or alphabetical character, followed by $, _, alphanumeric
// $, _, $foo, _foo, foo, bar, baz, something_complicated;

let someValue = 10;

const state = {
  aString: '',
  aNumber: 0,
  aFunction: function () {},
  anArrowFunction: () => {},
  methodFunction() {},
  anotherObject: {
    innerObject: {
      reallyDeepObject: {
        kindOfRidiculousObject: {
          message: 'Hi',
        },
      },
    },
  },
  'something-complicated': 'value',
  'some spaces': 'value',
  localValue: someValue,
  // Equivalent to someValue: someValue
  someValue,
};

state['some spaces'];
state.aString;
