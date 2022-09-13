function getUsersPromise() {
  const baseUrl = 'http://localhost:8000/api/zippay/v1/users/';

  const responsePromise = fetch(baseUrl);
  const resultsPromise = responsePromise.then(function (response) {
    if (response.ok) {
      return response.json();
    }
    // Hope that that response is 2xx
    // Hope that there are no errors
  });

  return resultsPromise;
}

getUsersPromise().then(function (users) {
  // console.log(`There are ${users.length} users.`);
});

async function getUsersAsync() {
  const baseUrl = 'http://localhost:8000/api/zippay/v1/users/';
  let users = [];

  try {
    const response = await fetch(baseUrl); // 2 (yield)
    // 5
    if (response.ok) {
      users = await response.json();
    }
  } catch (err) {
    console.log('getUsersAsync: problems: ', err);
    // return Promise.reject(err);
    throw err;
  }

  console.log('getUsersAsync(): still running');
  return users;
}

async function main() {
  let users;
  try {
    // let users = await getUsersAsync();
    users = await getUsersAsync();
    // let numbers = await doSomething();
  } catch (err) {
    console.error('main: problems: ', err);
  }
  // console.log('Awaited numbers: ', numbers);
  // console.log(`(async-await) There are ${users.length} users.`);
  console.log('(async-await) Users: ', users);
}

main();
