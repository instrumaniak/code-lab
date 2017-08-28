// split the sentence to get an array of words
// iterate over each words and apply capitalization & lower case
// join the words back to sentence

function titleWords(str){ 
  var cap = str.charAt(0); //get the first letter
  var rest = str.slice(1); //get rest of the word
  
  cap = cap.toUpperCase(); 
  rest = rest.toLowerCase();
  
  return cap.concat(rest); // return title cased word
}



function titleCase(str) {
  var words = str.split(' '); //get words
  
  for(var i=0,l=words.length;i<l;i++){  // Iterate over the words
     words[i]=titleWords(words[i]); // alter the arry with title cased words
  
  }
  
  var titled = words.join(' '); //put the words back into a sentence
  return titled;
}


//Test code
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
