let fetch = require('node-fetch');

async function addMovie(movie) {
  let response = await fetch('http://localhost:8000/movies', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(movie),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status === 201) {
    let insertedMovie = await response.json();
    console.log(`Movie inserted with id ${insertedMovie.id}`);
    return insertedMovie;
  } else {
    console.error(`Didn't get a 201, got ${response.status}`, response);
    throw new Error('Could not insert movie');
  }
}

let nextMovie = {
  title: 'The Lord of the Rings: Return of the King',
  year: 2003,
  director: 'Peter Jackson',
  writer: ['J.R.R. Tolkien', 'Phillipa Boyens', 'Fran Walsh'],
  rating: 5,
  genres: ['action', 'fantasy', 'epic'],
};

addMovie(nextMovie);
