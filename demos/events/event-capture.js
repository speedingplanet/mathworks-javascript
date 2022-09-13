const section = document.querySelector('section');
const listItem = document.querySelector('ul>li:nth-child(2)');
const span = document.querySelector('span');
const anchor = document.querySelector('a');

section.addEventListener('click', () => console.log('You clicked on the section'));

listItem.addEventListener('click', () => {
  console.log(
    'You clicked on the list item: ',
    event.target.nodeName,
    !event.target.nodeName === 'A'
  );
  // As if I were running code here
  if (!(event.target.nodeName === 'A')) {
    console.log('Calling prevent default');
    event.preventDefault();
  }
});

span.addEventListener('click', () => {
  console.log('You clicked on the span');
});

document.addEventListener('click', (event) => {
  console.log('You clicked in the document somewhere!');
  console.log(event.target); // origin of the event
  console.log(event.currentTarget); // the document, in this case
  // event.preventDefault();
});

// eslint-disable-next-line no-unused-vars
anchor.addEventListener('click', (event) => {
  console.log('You might miss this, but you clicked on the anchor tag.');
  // event.preventDefault();
});
