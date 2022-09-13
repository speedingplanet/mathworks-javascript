// @ts-check
/* eslint-disable no-unused-vars */

// JSDoc: https://jsdoc.app/
// Type Checking JavaScript files: https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html
// More details at: https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
// Blog post about the journey: https://gils-blog.tayar.org/posts/jsdoc-typings-all-the-benefits-none-of-the-drawbacks/#the-solution

/** @type {string} */
let name = 'John';

// This would raise a problem
// name = 10;

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add(x, y) {
  return x + y;
}

// Correct usage
add(5, 10);

// Error on the first argument
// add('foo', 'bar');

// Needed because this has to be an ES module file
export {};
