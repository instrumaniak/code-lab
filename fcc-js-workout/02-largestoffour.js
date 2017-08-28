/*
1. iterate over main array
2. for each main arry element find the max number of the innerarry
   by sort the inner arry using compare funtion
3. get the max number and push it to a new array//return the new array.


*/

function getMax(arr){
  arr.sort(function(a,b){return b-a;});
  return arr[0];
}

function largestOfFour(arr) {
  var nArr = [];
  
  for(var i=0,l=arr.length;i<l;i++){
    nArr.push(getMax(arr[i]));  
  }
  
  return nArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));