//if given number is positive
//for given number of times 
//push the given string to an array
//return the stringified array

function repeatStringNumTimes(str, num) {
  var arr = [];
  
  if(num>0){
    for(var i=0;i<num;i++){
      arr.push(str);
    }
    
    return arr.join('');
  } 
  else{return "";}
}


//Test
console.log(
repeatStringNumTimes("*", 3),   //should return "***".
repeatStringNumTimes("abc", 3), //should return "abcabcabc".
repeatStringNumTimes("abc", 4), //should return "abcabcabcabc".
repeatStringNumTimes("abc", 1), //should return "abc".
repeatStringNumTimes("*", 8),   //should return "********".
repeatStringNumTimes("abc", -2) // should return "".
);