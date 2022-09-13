// XMLHttpRequest

const baseURL = 'http://localhost:8000/api/zippay/v1/users?_delay=3000';

const fetchPromise = fetch(baseURL);

fetchPromise
  .then((response) => {
    if (response.ok) {
      return response.json(); // Technically returns a Promise!
    } else {
      throw new Error('Could not find users');
      // return Promise.reject( 'Could not find users' );
    }
  })
  .then((users) => {
    console.log(`There are ${users.length} users.`);
  })
  .catch((error) => {
    console.error('Something went wrong: ', error);
  })
  .finally(() => {});
