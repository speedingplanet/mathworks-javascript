let firstName = 'John';
let output = document.getElementById('output');

let button = document.querySelector('.btn.btn-primary');
if (button === null) {
  console.error('Could not find the button!');
}

button.addEventListener('click', () => {
  output.textContent = `Hello, ${firstName}`;
});
