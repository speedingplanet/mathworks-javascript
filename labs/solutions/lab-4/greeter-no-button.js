let textField = document.querySelector('#user-name');

function handleInput(target, event) {
  let output = document.querySelector('#' + target);
  let userName = event.target.value;
  if (userName.length >= 2) {
    output.textContent = `Hello, ${event.target.value}!`;
  } else {
    output.textContent = 'Greetings!';
  }
}

/*
textField.addEventListener('input', (event) => {
  // Hard-coded to knowing about #output
  let output = document.querySelector('#output');
  let userName = event.target.value;
  if (userName.length >= 2) {
    output.textContent = `Hello, ${event.target.value}!`;
  } else {
    output.textContent = 'Greetings!';
  }
});
*/

textField.addEventListener('input', (event) => handleInput('output', event));

// let boundHandler = handleInput.bind(this, 'output');
// textField.addEventListener('input', boundHandler);
