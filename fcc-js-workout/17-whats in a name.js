//2016,Raziur Rahman

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  for(var i=0,l=collection.length;i<l;i++){
    var state = true;
    Object.keys(source).forEach(function (a){
      if(collection[i].hasOwnProperty(a)){
        if(collection[i][a] !== source[a]){
          state = false;
        }
      }
      else {
      state = false;
    }
    });
    if(state){arr.push(collection[i]);}
  }
  
  // Only change code above this line
  return arr;
}

//test
console.log(
whatIsInAName([{ first: "Romeo", last: "Montague" },
               { first: "Mercutio", last: null },
               { first: "Tybalt", last: "Capulet" }],
              { last: "Capulet" })
);