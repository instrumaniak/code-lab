
function steamrollArray(arr) {
  var narr = [];
  
  function roller(ar){
    if(Array.isArray(ar)){ ar.forEach(
      function (a){
        if(Array.isArray(a)){ roller(a);}
        else narr.push(a);
      }
    );}
    else narr.push(ar);
  }
  roller(arr);
  return narr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
