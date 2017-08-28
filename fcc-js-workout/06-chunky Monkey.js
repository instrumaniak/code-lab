/*
 Split an array into an array of smaller arrays
 
 keep moving over the given array upto the amount of size
 

 */

function chunkArrayInGroups(arr, size) {
  var out = [];
    
  for(var i=0,l=arr.length;i<l;i += size){
      
      var bit = [];
      for(var j=0;j<size;j++){
        var t = arr[i+j];
        if (t !== undefined) { bit.push(t); }
        else {break;}
      }
      out.push(bit);
      
  }
  return out;
}


//Test

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2).toString()); //should return [["a", "b"], ["c", "d"]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3).toString());  //should return [[0, 1, 2], [3, 4, 5]].
console.log( chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2).toString());  //should return [[0, 1], [2, 3], [4, 5]].
console.log( chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4).toString()); //should return [[0, 1, 2, 3], [4, 5]].
console.log( chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3).toString());  // [[0, 1, 2], [3, 4, 5], [6]].
console.log( chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4).toString()); //[[0, 1, 2, 3], [4, 5, 6, 7], [8]].
console.log( chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2).toString()); //[[0, 1], [2, 3], [4, 5], [6, 7], [8]].





 


