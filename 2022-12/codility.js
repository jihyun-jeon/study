// 1번문제 = https://www.geeksforgeeks.org/find-the-size-of-largest-subset-with-positive-bitwise-and/
/*
// [13,7,2,8,3] // 3개! (13,7,3)
const dec1 = 13;
const dec2 = 7;
const dec3 = 2;
const dec4 = 8;
const dec5 = 3;

console.log(dec1.toString(2).padStart(4, '0')); // 1101
console.log(dec2.toString(2).padStart(4, '0')); // 0111 // 0101
console.log(dec3.toString(2).padStart(4, '0')); // 0010
console.log(dec4.toString(2).padStart(4, '0')); // 1000
console.log(dec5.toString(2).padStart(4, '0')); // 0011 // 0001

const result = 0001;
console.log(result.toString(10)); // 1
*/

/*
// [1,2,4,7] // 1개! (and되는거 없어서 하나씩만 됨.)
const dec1 = 1;
const dec2 = 2;
const dec3 = 4;
const dec4 = 8;

console.log(dec1.toString(2).padStart(4, '0')); // 0001
console.log(dec2.toString(2).padStart(4, '0')); // 0010
console.log(dec3.toString(2).padStart(4, '0')); // 0100
console.log(dec4.toString(2).padStart(4, '0')); // 1000
*/

/*
// [16,16] // 2개! (16,16이 and됨)
const dec1 = 16;
const dec2 = 16;

console.log(dec1.toString(2).padStart(4, '0')); // 10000
console.log(dec2.toString(2).padStart(4, '0')); // 10000 // 10000
*/

/*
// <1번문제 제출>
function solution(A) {
  let sum = [];

  for (let i = 0; i < A.length; i += 1) {
    const binary = A[i].toString(2).padStart(4, '0'); // 1101 0111 0010 1000 0011

    [...binary].forEach((num, idx) => {
      if (num > 0) {
        sum[idx] = sum[idx] ? (sum[idx] += 1) : 1;
      }
    });
  }

  return Math.max(...sum);
}

// console.log(solution([13, 7, 2, 8, 3]));
// console.log(solution([1, 2, 4, 8]));
// console.log(solution([16, 16]));
 */
// ------------------------------------------------------------------------------------
// 문제 2 - https://leetcode.com/problems/largest-magic-square/
// 2번 스킵!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
var largestMagicSquare = function (grid) {
  const row = grid.length;
  const col = grid[0].length;
  const startSize = row <= col ? row : col;
  for (let s = startSize; s > 1; s--) {
    for (let r = 0; r < grid.length - s + 1; r++) {
      for (let c = 0; c < grid[0].length - s + 1; c++) {
        if (isMagic(grid, r, c, s)) {
          return s;
        }
      }
    }
  }
  return 1;
};

const isMagic = (grid, i, j, size) => {
  let targetSum = 0;
  for (let c = j; c < j + size; c++) {
    targetSum += grid[i][c];
  }
  //check rows
  for (let r = i; r < i + size; r++) {
    let sum = 0;
    for (let c = j; c < j + size; c++) {
      sum += grid[r][c];
    }
    if (targetSum !== sum) {
      return false;
    }
  }
  //check cols
  for (let c = j; c < j + size; c++) {
    let sum = 0;
    for (let r = i; r < i + size; r++) {
      sum += grid[r][c];
    }
    if (targetSum !== sum) {
      return false;
    }
  }
  //check diagonals
  let diagSum = 0,
    antiDiagSum = 0;
  for (let c = 0; c < size; c++) {
    diagSum += grid[i + c][j + c];
    antiDiagSum += grid[i + c][j + size - 1 - c];
  }
  if (diagSum !== antiDiagSum || diagSum !== targetSum) {
    return false;
  }
  return true;
};

console.log(
  largestMagicSquare([
    [4, 3, 4, 5, 3],
    [2, 7, 3, 8, 4],
    [1, 7, 6, 5, 2],
    [8, 4, 9, 5, 5],
  ])
); // 3 (3*3)
*/
// ------------------------------------------------------------------------------------
// 3번
function solution(arr) {
  // 차이가 0일때
  const numberObj = arr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? (acc[cur] += 1) : 1;
    return acc;
  }, {});
  const maxSameNum = Math.max(...Object.values(numberObj));

  // 차이가 1 이상일때
  let diff = 1;
  const obj = {};
  const strimedArr = Array.from(new Set(arr)).sort(); // [1,3,4,5,7]
  //

  while (diff < strimedArr.length) {
    console.log(diff);
    for (let i = 0; i < arr.length; i += 1) {
      let numArr = []; // 1
      numArr.push(strimedArr[i]);
      //
      for (let j = i + 1; j < arr.length; j += 1) {
        if (strimedArr[j] - strimedArr[i] === diff) {
          numArr.push(strimedArr[j]);
          i += 1;
        } else {
          continue;
        }
        obj[diff] = Math.max(obj[diff] ? obj[diff] : 0, numArr.length);
        console.log(numArr, obj);
      }
    }
    diff += 1;
  }

  return obj;
}

// console.log(solution([4, 3, 5, 1, 4, 4])); // 3
console.log(solution([1, 3, 4, 5, 7])); // 3

// ------------------------------------------------------------------------------------

// < 문제 4>
// https://leetcode.com/discuss/interview-question/1454542/number-of-water-tanks-needed

// function NumberofWaterTanks(str) {
//   let count = 0;
//   let pairArr = [];
//   let newPair = [];
//   if (str.length == 0 || str.length == 1) {
//     return -1;
//   }
//   let countHifen = 0;
//   let countH = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == '-') {
//       countHifen++;
//     }
//     if (str[i] == 'H') {
//       countH++;
//     }
//   }
//   if (countHifen < Math.round(countH / 2)) {
//     return -1;
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'H') {
//       pairArr.push(i);
//     }
//     if (pairArr.length == 2) {
//       newPair.push(pairArr);
//       pairArr = [];
//       i--;
//     }
//   }
//   for (let j = 1; j < newPair.length; j++) {
//     if (newPair[j - 1][1] - newPair[j - 1][0] > 1) {
//       count++;
//     }
//     if (newPair[j - 1][1] == newPair[j][0]) {
//       continue;
//     }
//   }
//   if (newPair[newPair.length - 1][1] < str.length - 1) {
//     count++;
//   }
//   if (count == 0) {
//     return -1;
//   }
//   return count;
// }

// console.log(NumberofWaterTanks('-H-HH--')); // 2
// console.log(NumberofWaterTanks('H')); // -1
// console.log(NumberofWaterTanks('HH-HH')); // -1
// console.log(NumberofWaterTanks('-H-H-H-H-H')); // 3
