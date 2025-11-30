// 1. SUM13  ______________________________________________________________________________________________________________________________________________________________________
// Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, 
// so it does not count and numbers that come immediately after a 13 also do not count.
// sum13([1, 2, 2, 1]) → 6
// sum13([1, 1]) → 2
// sum13([1, 2, 2, 1, 13]) → 6

function sum13(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 13) {
      i++; // praleidžiam ir patį 13, ir skaičių po jo
    } else {
      sum += nums[i];
    }
  }
  return sum;
}
console.log(sum13([1, 2, 2, 1]));        // 6
console.log(sum13([1, 1]));              // 2
console.log(sum13([1, 2, 2, 1, 13]));     // 6

// 2. lucky13 ____________________________________________________________________________________________________________________________________________________________________
// Given an array of ints, return true if the array contains no 1's and no 3's.
// lucky13([0, 2, 4]) → true
// lucky13([1, 2, 3]) → false
// lucky13([1, 2, 4]) → false
// DIRBA SU INDEKSAIS  nums[i]
function lucky13(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1 || nums[i] === 3) {
      return false;
    }
  }
  return true;
}
console.log(lucky13([0, 2, 4]));   
console.log(lucky13([1, 2, 3]));   
console.log(lucky13([1, 2, 4])); 

// 2 Sprendimas: // DIRBA SU REIKSME  n
// function lucky13(nums) {
//   for (let n of nums) {
//     if (n === 1 || n === 3) {
//       return false;
//     }
//   }
//   return true;
// }
// // 3 Sprendimas
// function lucky13(nums) {
//   return !nums.includes(1) && !nums.includes(3);
// }  