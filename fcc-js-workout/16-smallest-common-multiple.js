//Smallest common multiple
//Using table method from wikipedia
//2016,Raziur Rahman

//list of primes as much as you see it'll require
// here it's below 30

primeTable=[2,3,5,7,11,13,17,19,23,29]; 

//get a list of range of numbers
function range(list){
 min=Math.min(list[0],list[1]);
 max=Math.max(list[0],list[1]);
 var r=[];
 for(i=min;i<=max;i++){
   r.push(i);
  }
return r;
}

//is all the items are 1?
function allOne(list){
  return list.filter(a=>a!==1).length === 0;
}

//is any of the item divisible by the number?
function isDivisible(list,num){
  state = false;
  list.forEach(a=> a%num===0?state=true:undefined);
  return state;
}

//only divide those who are divisible
function applyDiv(list,num){
  return list.map(a=>a%num===0?a/num:a);
}

//find the smallest common multiple of the items
//Implements the table algorithm
function scm(list){
  mul=[];
  for(i=0;;){
    if(allOne(list)) break;
    else{ 
         if(isDivisible(list,primeTable[i])){
           mul.push(primeTable[i]);
           list = applyDiv(list,primeTable[i]);
         } 
         else i++;
        
    }
  }
  return mul.reduce((a,b)=>a*b);
}

//FCC
function smallestCommons(arr) {
   
  return scm(range(arr));
}


//Test
console.log(smallestCommons([1,5])); //--> 60
