/*
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    const arr = new Array(num - 1);
  
    // populates the array starting from 2
    for(let i = 0; i < arr.length; i++) {
      arr[i] = i + 2;
    }
  
    // sieve or Eratosthenes algorithm
    for(let i = 0; i < arr.length - 1; i++) {
      for(let j = i + 1; j < arr.length; j++) {
        if(arr[j] % arr[i] == 0) {
          arr.splice(j, 1);
        }
      }
    }
  
    // sum the numbers in the array
    return arr.reduce((sum, currentValue) => sum + currentValue);
  }
  
  console.log(sumPrimes(977));