/* eslint-disable no-unused-vars */
// let promise = fetch('http://localhost:8000/movies');

// async/await
async function fetchData() {
  try {
    let response = await fetch('http://localhost:8000/movies?_delay=2000');
    let results = await response.json();
    console.log('In fetchData():', results);
    console.log('blocked for being in the same block, dependent on an await');
    return results;
  } catch (error) {
    console.error('Something broke:', error);
  }
}

async function fetchDataWithHTTPError() {
  try {
    // We don't have 20 movies (yet)
    let response = await fetch('http://localhost:8000/movies/20');
    // ok is true if the response.status < 400
    if (response.ok) {
      let results = await response.json();
      console.log('In fetchDataWithHTTPError():', results);
    } else {
      if (response.status >= 400 && response.status < 500) {
        console.log('Client error:', response.status);
      } else {
        console.log('Server error:', response.status);
      }
    }
  } catch (error) {
    console.error('Something broke:', error);
  }
}

function fetchDataWithPromises() {
  let responsePromise = fetch('http://localhost:8000/movies');
  let resultsPromise = responsePromise.then((response) => {
    return response.json();
  });
  resultsPromise.then((results) => {
    // We have the array of movies here.
    console.log('fetchDataWithPromises:', results);
  });
}

function fetchDataWithPromisesChained() {
  fetch('http://localhost:8000/movies')
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      // We have the array of movies here.
      console.log('fetchDataWithPromises:', results);
    });
}

console.log('before fetchData(): not dependent on an await');
fetchData().then((results) => {
  console.log('fetchData returns a promise with...', results);
});

// This is "top-level" await, because it's in the main part of the module
// Relatively recently added to most browsers
// let outerResults = await fetchData();
// console.log("Blocked, because we're awaiting outerResults:", outerResults);
console.log('after fetchData(): not dependent on an await');

fetchDataWithHTTPError();
