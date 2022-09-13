/* eslint-disable no-unused-vars */

// How do I access elements?
document.getElementById(/* some id in the document */); // Element;

// Can also be used from an Element
document.querySelector(/* CSS selector */); // Element
document.querySelectorAll(/* CSS selector */); // NodeList

const foo = document.getElementById('foo');
foo.querySelectorAll('li');
document.querySelectorAll('li', foo);

// Creating elements
const div = document.createElement('div'); // No repaint yet
foo.append(div); // Repaint here

// Good example
const list = document.createElement('ul');

for (let x = 0; x < 1000; x++) {
  const li = document.createElement('li');
  li.textContent = x;
  list.append();
}

foo.append(list);
