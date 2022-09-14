let moviesTable = document.querySelector('#movies-table tbody');

async function fetchMovies() {
  try {
    // Think of 'await' as a block in this function
    console.log('2: Fetching movies...');
    let response = await fetch('http://localhost:8000/movies?_delay=2000');
    if (response.ok) {
      console.log('4: Fetched movies, parsing JSON results...');
      let movies = await response.json();
      console.log('5: Parsed results, building table...');
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
      console.log('7: Finished');
      return movies;
    }
  } catch (err) {
    console.error('fetchMovies: Something went wrong:', err);
    throw err; // So the caller can see the error
  }
}

console.log('1: Before fetchMovies()');
// let movies = await fetchMovies();
fetchMovies();
console.log('3: After fetchMovies()');
