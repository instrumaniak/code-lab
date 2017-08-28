// return an array of elements (number or text) uncommon between two arrays.

// iterate over array 1
// for each element, iterate over array2
// if found delete from BOTH array
// concatenate both array and remove undefined holes


function diffArray(arr1, arr2) {
  var nArr1=[],
      nArr2=[],
      out=[],
      state=true; //uncommon
  
  for(var i=0,l=arr1.length;i<l;i++){ 
    for(var j=0,k=arr2.length;j<k;j++){
      if(arr1[i] === arr2[j]){
        state = false;
        delete arr2[j];
      }
    }
    if(state){
      nArr1.push(arr1[i]);
    }
  }
  
  
  nArr2 = arr2.filter(function(val){
    return val !== undefined;
  });
  
  out = nArr1.concat(nArr2);
  return out;
}

console.log(
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
