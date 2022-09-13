import { movies } from '../../data/movies-module.js';

// Efficient, somewhat verbose
function useCreateElement() {
  console.log('Using document.createElement');
  const root = document.querySelector('#create-element');

  const list = document.createElement('ul');

  // Using for-of
  for (let movie of movies) {
    const item = document.createElement('li');
    item.textContent = `${movie.title} (${movie.year})`;

    // All elements have append(), prepend(), before(), after()
    // Equivalent to afterbegin, beforeend, beforebegin, afterend in insertAdjacentHTML
    // list.append(item);
    list.append(item);
  }

  // Using Array.prototype.forEach
  /*
  movies.forEach((movie) => {
    const item = document.createElement('li');
    item.textContent = `${movie.title} (${movie.year})`;
    list.append(item);
  });
  */

  // Using Array.prototype.map
  /*
  let items = movies.map((movie) => {
    const item = document.createElement('li');
    item.textContent = `${movie.title} (${movie.year})`;
    return item;
  });

  // Items is an array, append() expects individual arguments, e.g.
  // append(listItem1, listItem2, listItem3), NOT an array
  // The spread (...) operator, spreads the array into individual items
  list.append(...items);
  */

  // One repaint
  root.replaceChildren(list);
}

// Efficient, less verbose
function useInsertAdjacentHTML() {
  console.log('Using element.insertAdjacentHTML()');
  const root = document.querySelector('#insert-adjacent-html');
  // root.replaceChildren();

  const list = document.createElement('ul');
  movies.forEach((movie) => {
    list.insertAdjacentHTML('beforeEnd', `<li>${movie.title} (${movie.year})</li>`);
  });

  // One repaint
  // root.append(list);
  root.replaceChildren(list);
}

// Inefficient, also easier to break
function useInnerHTML() {
  console.log('Using element.innerHTML');
  const root = document.querySelector('#inner-html');

  // Empty out the element
  root.innerHTML = '';

  let list = '<ul>';
  movies.forEach((movie) => (list += `<li>${movie.title} (${movie.year})</li>`));
  list += '</ul>';

  // One repaint, may trigger document-wide repaint
  root.innerHTML = list;
}

useCreateElement();
useInsertAdjacentHTML();
useInnerHTML();
