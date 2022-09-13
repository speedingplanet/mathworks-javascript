console.log('one');
setTimeout(() => {
  console.log('two');
}, 2000);

setTimeout(() => {
  console.log('four');
}, 1000);
console.log('three');
