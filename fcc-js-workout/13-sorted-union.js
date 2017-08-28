Array.prototype.checkValue = function(val){
  for(var i=0,l=this.length;i<l;i++){
    if(this[i] == val){return true;}
  }
  return false;
};

function uniteUnique(arr) {
  
  for(var i=1,l=arguments.length;i<l;i++){
    for(var j=0,k=arguments[i].length;j<k;j++){
      if(!arr.checkValue(arguments[i][j])) arr.push(arguments[i][j]);
    }
  }
  return arr;
}

//Test
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
