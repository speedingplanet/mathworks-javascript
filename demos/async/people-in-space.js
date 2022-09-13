let url = 'http://api.open-notify.org/astros.json';
// let url = 'http://api.open-notify.org/astronauts.json';

let pResponse = fetch(url);
let pData = pResponse.then((response) => {
  console.log('Got a response');
  console.log('Response object:', response);
  /*
  let astronauts = response.json();
  console.log('astronauts:', astronauts);
  */
  return response.json();
  // return 10;
  // return 'John Glenn';
});

pData.then((astronauts) => {
  console.log('Astronauts: ', astronauts);
});
