/* eslint-disable no-unused-vars */

// Should run only once.
console.log('Ran exports.js');

const a = 1;
const b = 2;
const c = 3;
const d = [1, 2, 3];

const x = 10;

// Export list
export { x, a, d };

// In-line export
// Almost like "public const y = 20"
export const y = 20;

// In-line export a function, or a class
export function bar() {
  console.log('exports.bar()');
}

export class Book {
  // Whatever a Book is
}
