// Get a list of Fibonacci sequence less than the limit
// Get the list to have only even numbers
// Sum the numbers and return it.
console.time('fibo');

var fibo = [1,2],
    next = 0,
    limit = 4000000;

//Get a list of Fibo
for(i=2;;i++){
  next = fibo[i-2]+fibo[i-1];
  if(next<limit){
    fibo.push(next);
  }
  else break;
}

//Filter out the odds
fibo = fibo.filter(a => a%2 ==0);

//Get the sum
var sum = fibo.reduce((a,b)=>a+b);

console.log(sum);

console.timeEnd('fibo');