/* eslint-disable no-unused-vars */
let x = 1;
while (x < 10) {
  // Whatever
  x = x + 1;
}

// Initialize your counter!
for (let y = 0; y < 10; y++) {
  // Whatever
  // "continue" to skip this iteration
  // Skip odd numbers
  if (y % 2) continue;

  // "break" to stop and break out of the loop
  // Stop the loop at 8
  if (y === 8) break;
}

const fruits = ['apples', 'bananas', 'pears', 'oranges'];

// for-of good for values of an array
// Goes over the VALUES of a data structure
for (const fruit of fruits) {
  console.log(fruit);
}

for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

const obj = {
  a: 'apple',
  b: 'banana',
  c: 'cantaloupe',
  getA() {
    return this.a;
  },
  getC: function () {
    return this.c;
  },
};

obj.getB = function () {
  return this.b;
};

// Bonus deconstruction
const { a, c } = obj;
const { a: foo, c: bar } = obj;

// for-in for objects, because it looks at the KEYS
// of a data structure
for (const key in obj) {
  if (typeof obj[key] === 'function') {
    console.log(`Invoking ${key}:`, obj[key]());
  } else {
    console.log(`${key} : ${obj[key]}`);
  }
}

const mapFruits = new Map();
mapFruits.set('a', 'apple');
mapFruits.set('b', 'banana');
mapFruits.set('c', 'cantaloupe');

// for-of gets you entries of a Map
for (const fruit of mapFruits) {
  console.log(fruit);
}

for (let toople of mapFruits) {
  let key = toople[0];
  let value = toople[1];
  console.log(`${key}: ${value}`);
}

for (const [key, value] of mapFruits) {
  console.log(`${key}: ${value}`);
}
