import camelCase from '../node_modules/lodash-es/camelCase.js';

let dataURL = 'http://localhost:8000/students';
let output = document.querySelector('#output ul');
let form = document.querySelector('#student-form');

if (!(output && form)) {
  console.error('Could not find one of the required elements!');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  let student = {};
  for (let [field, value] of formData.entries()) {
    student[camelCase(field)] = value;
  }
  log('Saving student...');
  saveStudent(student, `${dataURL}?_delay=5000`)
    .then((insertedStudent) => {
      log('Fetching updated students...');
      return fetchStudentsPlusNew(dataURL, insertedStudent);
    })
    .then((students) => {
      log('Re-rendering students...');
      renderStudentsAsTable(students, 'students-list');
      log('Finished!');
    });

  addStudentToTable(student, 'students-list');
});

async function fetchStudentsPlusNew(url, student) {
  let allStudents = await fetchStudents(url);
  let mostStudents = allStudents.filter((s) => s.id !== student.id);
  mostStudents.unshift(student);
  return mostStudents;
}

function log(message, clear = false) {
  if (clear) {
    output.replaceChildren();
  }
  output.insertAdjacentHTML('beforeend', `<li>${message}</li>`);
}

function addStudentToTable(student, target) {
  let { firstName, lastName, city, province } = student;
  let tbody = document.querySelector(`#${target} table tbody`);
  let tr = document.createElement('tr');
  tr.insertAdjacentHTML(
    'beforeend',
    `<td>${firstName}</td><td>${lastName}</td><td>${city}</td><td>${province}</td>`
  );
  tr.classList.add('table-warning');
  tbody.prepend(tr);
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
    let tr = document.createElement('tr');
    let template = `<td>${firstName}</td><td>${lastName}</td><td>${city}</td><td>${province}</td>`;
    tr.insertAdjacentHTML('beforeend', template);
    return tr;
  });

  tableBody.append(...tableRows);
  targetEl.replaceChildren(table);
}

async function fetchStudents(url) {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let students = await response.json();
      return students;
    } else {
      // Maybe do something else with the response, but for now
      throw new Error('Could not retrieve students from remote API');
    }
  } catch (err) {
    console.error('fetchStudents: Something went wrong', err);
  }
}

async function saveStudent(student, url) {
  try {
    let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(student),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 201) {
      return response.json();
    } else {
      console.error('Failed for some reason:', response);
      throw new Error('Failed with status', response.status);
    }
  } catch (err) {
    console.error('saveStudent: Something went wrong', err);
    throw err;
  }
}

let students = await fetchStudents(dataURL);
renderStudentsAsTable(students, 'students-list');
