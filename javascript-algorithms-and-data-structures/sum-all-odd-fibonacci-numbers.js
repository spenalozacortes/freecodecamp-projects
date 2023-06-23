/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
*/

function sumFibs(num) {
  let sum = 0;
  let fib = [1, 1];

  while((fib[fib.length - 1] + fib[fib.length - 2]) <= num) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  for(let num of fib) {
    if(num % 2 != 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumFibs(75025)); // should log 135721