// Get a list of Fibonacci sequence less than the limit
// Get the list to have only even numbers
// Sum the numbers and return it.
console.time('fibo');
var a = 1,
b = 2,
limit = 4000000,
sum = 2,
next = 0;
for (; ; a = b, b = next) {
  next = a + b;
  if (next <= limit) {
    if (next % 2 == 0) {
      sum += next;
    }
  } 
  else {
    break;
  }
}
console.log(sum);
console.timeEnd('fibo');