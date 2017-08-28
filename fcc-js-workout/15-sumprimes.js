//Sum the primes
//Using Eratosthenes method originated at 300BC !!!
//Adapted by Raziur Rahman, 2016

function sumPrimes(num) {
  
  //Initialize
  var table = [],
      primes= [],
      limit=Math.floor(Math.sqrt(num));
  
  //Get the table
  for(var a=2;a<=num;a++) { table.push(a);}
  
  //Iterate over the table until the element is less than sqrt of num
  //and Get rid of it's multiples
  while(primes[primes.length-1]===undefined || primes[primes.length-1]<=limit){
    primes.push(table.shift());
    table = table.filter(a=>a%primes[primes.length-1]!==0);
    
  }
  primes = primes.concat(table); //All the primes in the range
  return primes.reduce((a,b)=>a+b); //Sum of the primes
}

console.log(sumPrimes(10)); //--> 17
