let moviesTable = document.querySelector('#movies-table tbody');

async function fetchMoviesAsync() {
  try {
    // Think of 'await' as a block in this function
    console.log('2: Fetching movies...');
    let response = await fetch('http://localhost:8000/movies?_delay=2000');
    if (response.ok) {
      console.log('4: Fetched movies, parsing JSON results...');
      let movies = await response.json();
      console.log('5: Parsed results, building table...');
      renderMovies(movies);
      console.log('7: Finished');
      return movies;
    }
  } catch (err) {
    console.error('fetchMovies: Something went wrong:', err);
  }
}

function fetchMovies() {
  console.log('2: Fetching movies...');
  let responsePromise = fetch('http://localhost:8000/movies?_delay=2000');

  // Promise.then(successCallback?, failureCallback?) -> Promise
  // successCallback(oneValue);
  // failureCallback(error);
  let resultsPromise = responsePromise.then((response) => {
    if (response.ok) {
      console.log('4: Fetched movies, parsing JSON results...');
      return response.json(); // becomes resultsPromise
    }
  });

  let catchPromise = resultsPromise.then((movies) => {
    console.log('5: Parsed results, building table...');
    renderMovies(movies);
    console.log('7: Finished');
  });

  catchPromise.catch((err) => {
    console.error('fetchMovies: Something went wrong:', err);
  });
}

function fetchMoviesChained() {
  return fetch('http://localhost:8000/movies?_delay=2000')
    .then((response) => {
      // p1
      if (response.ok) {
        console.log('4: Fetched movies, parsing JSON results...');
        return response.json();
      }
    })
    .then((movies) => {
      // p2
      console.log('5: Parsed results, building table...');
      renderMovies(movies);
      console.log('7: Finished');
      return movies;
    })
    .catch((err) => {
      // p3
      console.error('fetchMovies: Something went wrong:', err);
      throw err;
    });
}

function renderMovies(movies) {
  let tableRows = movies.map((movie) => {
    let { title, year, rating, director } = movie;
    let tr = document.createElement('tr');
    tr.insertAdjacentHTML(
      'beforeend',
      `<td>${title}</td><td>${year}</td><td>${rating}</td><td>${director}</td>`
    );
    return tr;
  });

  console.log('6: Table complete, revealing...');
  moviesTable.append(...tableRows);
  moviesTable.parentElement.hidden = false;
}

console.log('1: Before fetchMovies()');
// let movies = await fetchMovies();
// fetchMovies();
fetchMoviesChained().then((movies) => {
  console.log(`Look, we have ${movies.length} movies!`);
});
console.log('3: After fetchMovies()');
