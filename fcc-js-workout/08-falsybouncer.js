function bouncer(arr) {
  
  var a = arr.filter(function(val){
   
    if (val === "" ||
        val === false ||
        val === null ||
        val === 0 ||
        val === undefined ||
        val.toString() === "NaN"
       ){return false;}
    else {return true;}
    
  });
  return a;
}

//Test
console.log(
bouncer([7, "ate", "", false, 9]), // should return [7, "ate", 9].
bouncer(["a", "b", "c"]), // should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]), // should return [].
bouncer([1, null, NaN, 2, undefined]) //should return [1, 2]
  );
