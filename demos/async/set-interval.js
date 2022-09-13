// eslint-disable-next-line no-unused-vars
const p1 = new Promise((resolve, reject) => {
  const el = document.getElementById('foo'); // whatever element
  let intervalCount = 0;
  const intervalCode = setInterval(() => {
    if (el.style.height) {
      clearInterval(intervalCode);
      resolve(el.style.height);
    } else if (intervalCount > 10) {
      clearInterval(intervalCode);
      reject(new Error('Height not found'));
    } else {
      intervalCount++;
    }
  }, 250);
});
