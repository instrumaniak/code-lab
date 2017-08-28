
function rot13(str) { // LBH QVQ VG!
  var d = "";
  var code = 0;
  
  for(var i=0,l=str.length;i<l;i++){
    code= str.charCodeAt(i);
        
    if(code>=65 && code<=77){ //A to M
      d = d.concat(String.fromCharCode(code+13));
      
    }
    else if(code>=78 && code<=90){ //N to Z
      d = d.concat(String.fromCharCode(code-13));
    }
    else {
      d = d.concat(str.charAt(i));}
  }
  
  return d;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
