/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    const newArr = [];
  
    for(let i = 0; i < arr1.length; i++) {
      if(arr2.indexOf(arr1[i]) == -1) {
        newArr.push(arr1[i]);
      }
    }
  
    for(let i = 0; i < arr2.length; i++) {
      if(arr1.indexOf(arr2[i]) == -1) {
        newArr.push(arr2[i]);
      }
    }
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);