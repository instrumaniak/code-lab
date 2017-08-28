function slasher(arr, howMany) {
 
  if(howMany === 0) {return arr;}
  else if(arr.length<=howMany){return [];}
  else{
    return arr.slice(howMany);
  }
  
}
console.log(slasher([1, 2, 3], 2));
