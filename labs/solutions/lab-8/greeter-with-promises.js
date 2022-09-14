// import { students } from '../data/students-module.js';

let output = document.getElementById('output');
let textField = document.querySelector('#first-name');
let button = document.querySelector('.btn.btn-primary');
let isWarning = false;

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
  tableBody.classList.add('table-group-divider');
  table.append(tableBody);

  let tableRows = students.map(({ firstName, lastName, city, province }) => {
    let tr = document.createElement('tr');
    let template = `<td>${firstName}</td><td>${lastName}</td><td>${city}</td><td>${province}</td>`;
    tr.insertAdjacentHTML('beforeend', template);
    return tr;
  });

  tableBody.append(...tableRows);
  targetEl.append(table);
}

function fetchStudents(url) {
  let responsePromise = fetch(url);
  let resultsPromise = responsePromise.then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      // Maybe do something else with the response, but for now
      throw new Error('Could not retrieve students from remote API');
    }
  });

  return resultsPromise;
}

// eslint-disable-next-line no-unused-vars
function fetchStudentsChained(url) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      // Maybe do something else with the response, but for now
      throw new Error('Could not retrieve students from remote API');
    }
  });
}

let studentsPromise = fetchStudents('http://localhost:8000/students');
studentsPromise.then((students) => {
  renderStudentsAsTable(students, 'students-list');
});

/*
// Chained version
fetchStudents('http://localhost:8000/students').then((students) => {
  renderStudentsAsTable(students, 'students-list');
});
*/
