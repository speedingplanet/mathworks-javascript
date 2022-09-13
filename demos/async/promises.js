const p1 = new Promise((resolve, reject) => {
  if (Date.now() % 2) {
    resolve('Success!');
  } else {
    // eslint-disable-next-line prefer-promise-reject-errors
    reject('Failed!');
  }
});

function onResolve(result) {
  console.log('The promise resolved successfully with', result);
}

function onReject(result) {
  console.error('The promise rejected (failed) with', result);
}

// p1.addEventListener('success', onResolve);
// p1.addEventListener('error', onReject);
// p1.then( onResolve );
p1.then(onResolve, onReject); // check the event queue

console.log('After .then()'); // check the event queue

const p2 = p1.then((result) => {
  console.log('result level 1:', result);
  return 10; // resolve(10)
});

const p3 = p2.then((result) => {
  console.log('result level 2:', result);
  return result * 2;
});

const x = p3.then((result) => {
  console.log('result level 3:', result);
});

x.then((someValue) => {
  // do something with the value here;
});

async function whatever() {
  const result = await p1;
  console.log(result);
}

whatever();
