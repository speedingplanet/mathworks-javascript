/* eslint-disable no-unused-vars */

// Classic loops and some newer versions

const states = ['NJ', 'MA', 'CA', 'IL', 'FL'];

// While loop
console.log(`
######################################
While loop
######################################`);
let counter = 0;
while (counter < states.length) {
  console.log(states[counter]);
  counter = counter + 1;
}

// For loop
console.log(`
######################################
For loop
######################################`);
for (let counter = 0; counter < states.length; counter++) {
  console.log(states[counter]);
}

// For-each loop
console.log(`
######################################
For-of (also known as for-each) loop
######################################`);
for (let state of states) {
  console.log(state);
}

// Don't confuse the above with a for-in loop which will give you array indexes
