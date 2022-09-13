let movieForm = document.querySelector('#movie-form');
let list = document.createElement('ul');
let clearButton = document.querySelector('#clear-movies-button');
document.querySelector('#output').append(list);
let movies = [];

document.addEventListener('DOMContentLoaded', () => {
  let storedMovies = retrieveMovies();
  if (storedMovies) {
    // movies.push(storedMovies[0], storedMovies[1], storedMovies[2], ... )
    movies.push(...storedMovies);
  }

  /*
  let movieListItems = [];
  for (let movie of movies) {
    let li = document.createElement('li');
    li.textContent = `${movie.title} (${movie.year}) directed by ${movie.director}`;
    movieListItems.push(li);
  }
  */

  /*
  // with Array.prototype.map()
  let movieListItems = movies.map((movie) => {
    let li = document.createElement('li');
    li.textContent = `${movie.title} (${movie.year}) directed by ${movie.director}`;
    return li;
  });
  list.append(...movieListItems);
  */

  /*
  for (let movie of movies) {
    movieListItems.push(`<li>${movie.title}(${movie.year}) directed by ${movie.director}</li>`);
  }
  list.insertAdjacentHTML('beforeend', movieListItems.join(''));
  */

  let fragment = new DocumentFragment();
  for (let movie of movies) {
    let li = document.createElement('li');
    li.textContent = `${movie.title} (${movie.year}) directed by ${movie.director}`;
    fragment.append(li);
  }
  list.append(fragment);
});

clearButton.addEventListener('click', () => {
  // Could use localStorage.clear(), but that could wipe out other data
  localStorage.removeItem('movies');
});

movieForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let movieData = new FormData(event.target);
  let movie = {};
  let keys = movieData.keys();
  for (let key of keys) {
    let field = key.slice(6);
    movie[field] = movieData.get(key);
  }

  movies.push(movie);
  saveMovies(movies);
  list.insertAdjacentHTML(
    'beforeend',
    `<li>${movie.title}(${movie.year}) directed by ${movie.director}</li>`
  );
});

function saveMovies(movies) {
  // Storage only stores strings, so....

  let moviesJSON = JSON.stringify(movies);
  localStorage.setItem('movies', moviesJSON);
}

function retrieveMovies() {
  let moviesJSON = localStorage.getItem('movies');
  if (!moviesJSON) return null;
  return JSON.parse(moviesJSON);
}
