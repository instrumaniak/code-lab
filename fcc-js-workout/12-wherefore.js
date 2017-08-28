
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  for(var i=0,l=collection.length;i<l;i++){
    console.log(i,collection[i]);
    if(collection[i].hasOwnProperty(source)){
      arr.push(collection[i]);
    }
  }
  console.log(arr);
  // Only change code above this line
  return arr;
}

console.log(
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
               { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
);