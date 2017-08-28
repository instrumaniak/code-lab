
function findElement(arr, func) {
  var num;
  for(var i=0,l=arr.length;i<l;i++){
   // console.log(i);
    if(func(arr[i])) {return arr[i];}
  }
  return num;
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
