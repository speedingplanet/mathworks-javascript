// Manual event handling
function manualEvents() {
  document
    .getElementById('manual-one')
    .addEventListener('click', () => console.log('You clicked on manual/one'));
  document
    .getElementById('manual-two')
    .addEventListener('click', () => console.log('You clicked on manual/two'));
  document
    .getElementById('manual-three')
    .addEventListener('click', () => console.log('You clicked on manual/three'));
  document
    .getElementById('manual-four')
    .addEventListener('click', () => console.log('You clicked on manual/four'));
}

// Adding event handlers with a loop
function loopedEvents() {
  // Returns a NodeList: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
  const listItems = document.querySelectorAll('#looped>li');

  for (let itemCounter = 0; itemCounter < listItems.length; itemCounter++) {
    listItems[itemCounter].addEventListener('click', () =>
      // eslint-disable-next-line comma-dangle
      console.log(`You clicked on looped/${itemCounter + 1}`)
    );
  }

  // NodeLists have a forEach (but not other traversal methods)
  /*
  listItems.forEach((item, index) =>
    // eslint-disable-next-line comma-dangle
    item.addEventListener('click', () => console.log(`You clicked on looped/${index + 1}`))
  );
  */

  // If we needed listItems to have Array functionality
  // const listItemsArray = Array.from( listItems );
}

// Delegated event handler
function delegatedEvent() {
  // Get a reference to a parent or ancestor element
  const ul = document.getElementById('delegated');

  // Listen for the event on the parent
  ul.addEventListener('click', delegatedHandler);

  function delegatedHandler(event) {
    console.log('Event origin: ', event.target);
    console.log('Event captured at: ', event.currentTarget);
    console.log(`You clicked on delegated/${event.target.textContent}`);
  }
}

manualEvents();
loopedEvents();
delegatedEvent();
