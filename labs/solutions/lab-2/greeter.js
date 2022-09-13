let button = document.getElementById('greet-button');

let output = document.querySelector('#output');
// eslint-disable-next-line no-unused-vars
function originalHandleButtonClick() {
  output.textContent = 'Hello, John!';
}

function handleButtonClick(target) {
  let output = document.querySelector(`#${target}`);
  output.textContent = 'Hello, John!';
}

button.addEventListener('click', () => handleButtonClick('output'));
