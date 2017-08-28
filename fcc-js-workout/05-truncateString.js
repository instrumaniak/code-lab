//Truncate a string according to the given length num

//If the num is equal or greater than the string length then return the string as it is.
//If the num greater than 3 then return string with length of (num-3) and append three dots (...)
//If the num is less than or equal to 3 , return string with length of num and append (...)

function truncateString(str, num) {
  if(num >= str.length ){return str;}
  else if (num > 3){
    return str.substr(0, num - 3).concat("...");
  }
  else {
    return str.substr(0, num).concat("...");
  }
 
}



//test
console.log(
truncateString("A-tisket a-tasket A green and yellow basket", 11), // should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14), // should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket",
               "A-tisket a-tasket A green and yellow basket".length),
  // should return "A-tisket a-tasket A green and yellow basket".
  
truncateString("A-tisket a-tasket A green and yellow basket",
               "A-tisket a-tasket A green and yellow basket".length + 2),
  //should return "A-tisket a-tasket A green and yellow basket".

truncateString("A-", 1), // should return "A...".
truncateString("Absolutely Longer", 2) // should return "Ab...". 

);