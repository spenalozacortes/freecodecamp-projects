/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
*/

function pairElement(str) {
    const arr = [];
    for(let base of str) {
      switch(base) {
        case "A":
          arr.push([base, "T"]);
          break;
        case "T":
          arr.push([base, "A"]);
          break;
        case "C":
          arr.push([base, "G"]);
          break;
        case "G":
          arr.push([base, "C"]);
          break;
      }
    }
  
    return arr;
  }
  
  pairElement("GCG");