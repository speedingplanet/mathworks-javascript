import { students } from '../data/students-module.js';

let output = document.getElementById('output');
let textField = document.querySelector('#first-name');
let button = document.querySelector('.btn.btn-primary');
let isWarning = false;

// if (button === null || output === null || textField === null) {
// if (!button || !output || !textField) {
if (!(button && output && textField)) {
  console.error('Could not find one of the required elements!');
}

textField.addEventListener('input', () => {
  if (isWarning) {
    isWarning = false;
    output.textContent = '';
  }
});

button.addEventListener('click', () => {
  let firstName = textField.value;
  if (firstName.length > 1) {
    output.textContent = `Hello, ${firstName}`;
  } else {
    isWarning = true;
    output.textContent = 'Please enter a name with a minimum of two characters';
  }
});

// eslint-disable-next-line no-unused-vars
function renderStudents(students, target) {
  let targetEl = document.getElementById(target);
  if (!targetEl) {
    console.error(`Could not find element with id ${target}`);
    return 0;
  }

  /*
  TODOS
  - Create DOM elements: ul
  - Iterate over the students
    - Create a list item
    - Append the list item to the ul
    - Add student's firstName and lastName to the li
  - Add the ul to the target element
  */

  let ul = document.createElement('ul');
  for (let student of students) {
    let li = document.createElement('li');
    // ul.insertAdjacentElement('beforeend', li);
    ul.append(li);
    li.textContent = `${student.firstName} ${student.lastName}`;
  }
  // targetEl.insertAdjacentElement('beforeend', ul);
  targetEl.append(ul);
}

// eslint-disable-next-line no-unused-vars
function renderStudentsWithMap(students, target) {
  let targetEl = document.getElementById(target);
  if (!targetEl) {
    console.error(`Could not find element with id ${target}`);
    return 0;
  }

  let listItems = students.map((student) => {
    let li = document.createElement('li');
    let { firstName, lastName } = student;
    li.textContent = `${firstName} ${lastName}`;
    return li;
  });

  let ul = document.createElement('ul');
  ul.append(...listItems);
  targetEl.append(ul);
}

function renderStudentsAsTable(students, target) {
  let targetEl = document.getElementById(target);
  if (!targetEl) {
    console.error(`Could not find element with id ${target}`);
    return 0;
  }

  let table = document.createElement('table');
  table.insertAdjacentHTML(
    'afterbegin',
    '<thead><tr><th>First Name</th><th>Last Name</th><th>City</th><th>Province</th></tr></thead>'
  );
  table.classList.add('table', 'table-striped', 'table-hover');
  let tableBody = document.createElement('tbody');
  table.append(tableBody);

  let tableRows = students.map(({ firstName, lastName, city, province }) => {
    // let { firstName, lastName, city, province } = student;
    let tr = document.createElement('tr');
    let template = `<td>${firstName}</td><td>${lastName}</td><td>${city}</td><td>${province}</td>`;
    tr.insertAdjacentHTML('beforeend', template);
    return tr;
  });

  tableBody.append(...tableRows);
  targetEl.append(table);
}

// renderStudents(students, 'students-list');
// renderStudentsWithMap(students, 'students-list');
renderStudentsAsTable(students, 'students-list');
