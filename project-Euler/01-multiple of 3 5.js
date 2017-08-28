//P1-Multiples of 3 and 5
//Find the sum of all the multiples of 3 or 5 below 1000.
// for below the sum is 23
function mul35(num) {
  for (i = 1, sum = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(mul35(1000));