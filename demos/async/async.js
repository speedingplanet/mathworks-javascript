// Promise API
// promise.then(successCallback, failureCallback)
//              (resolved)       (rejected)
//
// promise.then(successCallback)
// promise.catch(errorCallback) / promise.then(null, errorCallback)
//
// promise.then(callbackA)
// promise.then(callbackB)
// promise.then(callbackC)
// promise.then(callbackD)
// promise.catch(callbackError)
//
// let p2 = promise.then() (or promise.catch())
// p2.then() / p2.catch()
//
//         fails->fall-thru----->fall-thru------>fall-thru-> gets caught
// fetch().then(callbackA).then(callbackB).then(callbackC).catch(callbackError)

// fetch().then(callbackA)
//        .then(callbackB)
//        .then(callbackC)
//        .catch(callbackError);

//
// let p1 = fetch(); // takes 10 seconds
// let p2 = p1.then(callbackA); // fails
// let p3 = p2.then(callbackB);
// let p4 = p3.then(callbackC);
// p4.catch(callbackError);

// promise.finally(() => {})

const baseUrl = 'http://localhost:8000/api/zippay/v1/users/';

const responsePromise = fetch(baseUrl);

responsePromise
  .then(
    function (response) {
      if (response.ok) {
        // return response.json();
        return 10;
      } else {
        throw new Error('Bad Response!');
      }
    },
    function (responseError) {
      console.log('fetch error handler');
      // How to pass on a rejected Promise
      return Promise.reject(responseError);
      // throw new Error(responseError);
    }
  )
  .catch((err) => {
    // Can see errors from fetch or responsePromise.then()

    // Pass it along, or don't
    return Promise.reject(err);
  })
  .then(function (results) {
    console.log('Results: ', results);
  })
  .catch(function (err) {
    console.error('Something went wrong! ', err);
  });

console.log('After calling fetch()');
