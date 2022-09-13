/* eslint-disable no-unused-vars */

// Standard export
export const x = 10;

const person = {
  firstName: 'John',
  lastName: 'Paxton',
};

export default person;

// Syntactically incorrect
// export default const y = 20;
// Prefer
// const y = 20;
// export default y;

// Functions and classes can be exported by default on a single line
// export default function() { ... }
// export default class Car { ... }
