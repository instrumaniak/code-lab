//use substr
//cut out the string of the length of the match from given string
//check if cut out and match string matches

function confirmEnding(str, target) {
  var cutOut = str.substr(str.length - target.length);
  
  console.log(cutOut);
  
  if(cutOut == target){return true;}
  else { return false;}
  
}






//Test
console.log(
      confirmEnding("Bastian", "n"),
      confirmEnding("Connor", "n"),
      confirmEnding("developing software from a specification are easy if both are frozen", "specification"),
      confirmEnding("He has to give me a new name", "name"),
      confirmEnding("Open sesame", "same"),
      confirmEnding("Open sesame", "pen"),
      confirmEnding("We dont know how much longer we can withstand the nothing", "mountain")
      );