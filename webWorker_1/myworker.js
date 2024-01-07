// myworker.js

function calculateSum(limit) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
      sum += i;
  }
  return sum;
}

self.onmessage = function(event) {
  const limit = event.data;
  const result = calculateSum(9000000000);
  self.postMessage(result);
};
