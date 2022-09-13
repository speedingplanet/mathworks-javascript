/* eslint-disable no-unused-vars, import/first, import/no-duplicates */

// Import one item; typical
import { x } from './exports.js';
console.log(x); // 10

// Import multiple items; typical
import { a, d } from './exports.js';

// Import and rename
import { a as alpha } from './exports.js';
console.log(alpha); // 1

// Rename one, not the other
import { x as q, y } from './exports.js';
console.log(q + y);

// Import everything into a namespace
import * as foo from './exports.js';
console.log(foo.x); // 10
console.log('foo is ', foo);

// Runs exports.js, does not import any values
import './exports.js';

// Empty import, pointless
import {} from './exports.js';
