import { students } from '../data/students-module.js';

function handleButtonClick(target, textFieldId, event) {
  console.log('Event object:', event);
  let output = document.querySelector(`#${target}`);
  let userNameField = document.querySelector(`#${textFieldId}`);
  let userName = userNameField.value;
  output.textContent = `Hello, ${userName}!`;
}

function renderStudents(students = [], target) {
  // let renderedStudents = studentsToList(students);
  let renderedStudents = studentsToTable(students);
  let targetElement = document.querySelector(`#${target}`);
  targetElement.replaceChildren(renderedStudents);
}

// eslint-disable-next-line no-unused-vars
function studentsToList(students) {
  let list = document.createElement('ul');
  students.forEach(({ firstName, lastName }) => {
    // list.insertAdjacentHTML('beforeend', `<li>${student.firstName} ${student.lastName}</li>`);
    list.insertAdjacentHTML('beforeend', `<li>${firstName} ${lastName}</li>`);
  });
  return list;
}

// eslint-disable-next-line no-unused-vars
function studentsToTable(students) {
  let table = document.createElement('table');
  table.classList.add('table', 'table-striped', 'table-hover');
  // table.setAttribute('class', 'table table-striped table-hover');

  table.insertAdjacentHTML(
    'afterbegin',
    '<thead><tr><th>First Name</th><th>Last Name</th></tr></thead>'
  );
  let tableBody = document.createElement('tbody');
  students.forEach((student) => {
    let row = document.createElement('tr');
    // row.addEventListener('click', handleSelectRow);
    row.insertAdjacentHTML(
      'beforeend',
      `<td>${student.firstName}</td><td>${student.lastName}</td>`
    );
    tableBody.append(row);
  });
  table.append(tableBody);
  table.addEventListener('click', handleSelectRow);
  return table;
}

// Assume the event object is emitted by the tr
function handleSelectRow(event) {
  // event.target refers to the origin of the event
  // probably a td, or text inside the td
  // event.currentTarget refers to the place we are capturing
  // the event, that is, the tr
  // let row = event.currentTarget;
  let emitter = event.target;
  let row = emitter.parentElement;

  // An HTMLCollection (similar to an Array) of <td/> cells
  let cells = row.querySelectorAll('td');
  // let firstName = cells[0].textContent;
  // let lastName = cells[1].textContent;

  let cellValues = [];
  for (let cell of cells) {
    cellValues.push(cell.textContent);
  }

  let [firstName, lastName] = cellValues;

  // If cells were an array, you could do this:
  // let [firstName, lastName] = cells.map((cell) => cell.textContent);
  console.log(`You clicked on ${firstName} ${lastName}`);
}

let button = document.getElementById('greet-button');
let boundHandler = handleButtonClick.bind(this, 'output', 'user-name');

// button.addEventListener('click', () => handleButtonClick('output', 'user-name'));
button.addEventListener('click', boundHandler);
renderStudents(students, 'students-list');
