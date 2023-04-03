/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
    let newArr = [];
    let args = Object.values(arguments);
    
    args.shift(); // removing the first element since it's the initial array and I only wanted the following arguments
    
    for(let i = 0; i < arr.length; i++) {
      let found = false;
      for(let j = 0; j < args.length; j++) {
        if(arr[i] === args[j]) {
          found = true;
        }
      }
      if(!found) {
        newArr.push(arr[i]);
      }
    }
  
    return newArr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));