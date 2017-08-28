//spinal tap case
//2016, Raziur Rahman

function spinalCase(str) {
  var newS =[];
  newS.push(str.charAt(0));
  
  for(i=1,l=str.length;i<l;i++){
    if(str.charAt(i).search(/[A-Z]/)===0 &&
       str.charAt(i-1) !== ' ' &&
       str.charAt(i-1) !== '_'
      ){
      newS.push(" ");
    }
    newS.push(str.charAt(i));
  }
  
  str = newS.join('').replace(/[ _]/g, '-').toLowerCase();
  return str;
  
}

console.log(spinalCase("This Is Spinal Tap")); // "this-is-spinal-tap".
console.log(spinalCase("thisIsSpinalTap")); // "this-is-spinal-tap".
console.log(spinalCase("The_Andy_Griffith_Show")); // "the-andy-griffith-show".
console.log(spinalCase("Teletubbies say Eh-oh")); // "teletubbies-say-eh-oh".
console.log(spinalCase("AllThe-small Things")); // "all-the-small-things".
