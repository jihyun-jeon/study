/*
// 1. binary - 100%
// <내가 푼 문제>
function solution(number) {
  const binaryNumber = number.toString(2); // 이진법의 string으로 바꾼다

  const first = binaryNumber.indexOf("1");
  const last = binaryNumber.lastIndexOf("1");
  const middle = binaryNumber.slice(first, last + 1); // 1과 1 사이의 숫자(string임)

  if (middle.includes("0")) {
    const binaryGapArr = middle.split("1").map((el) => el.length);
    return Math.max(...binaryGapArr); // 최대 값을 구한다.
  } else {
    return 0;
  }
}

// <모범 정답>
// function maxBinaryGap(N) {
//   const binary = N.toString(2);
//   const trimmed = binary.substr(0, binary.lastIndexOf("1") + 1);
//   return Math.max(...trimmed.split("1").map((item) => item.length));
// }

// <실행>
console.log("result : ", solution(529)); // [4]  / 1 0000 1 000 1  /[0, 4, 3, 0]
console.log("result : ", solution(1041)); // [5]  / 1 00000 1 000 1 / [0, 5, 3, 0] <- 에러
console.log("result : ", solution(32)); // [0]  / 1 0000          / [0, 5] <- 에러
console.log("result : ", solution(15)); // [0]  / 1111            / [0,0,0,0,0] <- 에러
*/

/*
// 2. CyclicRotation -50%
function solution(A, K) {
  const cutFront = A.slice(0, A.length - K);
  const cutBack = A.slice(-K);
  return [...cutBack, ...cutFront];
}

console.log(solution([1, 2, 3, 4], 3)); // [2, 3, 4, 1]
console.log(solution([3, 8, 9, 7, 6], 3)); // [9, 7, 6, 3, 8]
console.log(solution([0, 0, 0], 1)); // [0, 0, 0]
console.log(solution([1, 2, 3, 4], 4)); // [1, 2, 3, 4]
*/

/*
// 3. OddOccurrencesInArray - 66%
function solution(A) {
  const obj = {}; // {3: 2, 7: 1, 9: 4}

  A.forEach((el) => (obj[el] = obj[el] ? (obj[el] += 1) : 1));
  // const objToArr = Object.entries(obj); // [["3",2],["7",1],["9",4]]

  for (const key in obj) {
    if (obj[key] === 1) {
      return +key;
    }
  }
}

// <모범정답>
// function solution(A) {
//   const totalCounter = A.reduce((counter, num) => {
//     counter[num] = counter[num] ? counter[num] + 1 : 1;
//     return counter;
//   }, {});

//   for (key in totalCounter) {
//     if (totalCounter[key] % 2 === 1) {
//       return Number(key);
//     }
//   }
// }

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
 */

/*
 4. FrogJmp - 100% (8분)

function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}

 console.log(solution(10, 85, 30)); // 3
console.log(solution(1, 5, 2)); //2
 */

/*
 5. PermMissingElem - 50% 모르겠음;;

 // <나의풀이>
function solution(A) {
  if (!A.length) {
    return 1;
  }

  const arr = [...A].sort((a, b) => a - b); // [1,2,3,5]

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
  // 왜 length +1? // 왜 idx와 비교?
}

// <모범정답>
function solution2(A) {
  if (!A.length) return 1;
  A = A.sort((a, b) => a - b);

  for (let i = 0; i < A.length + 1; i++) {
    if (A[i] !== i + 1) {
      return i + 1;
    }
  }
}

console.log(solution([2, 3, 1, 5])); // 4
// console.log(solution([2, 3, 4, 5])); // 1
// console.log(solution([])); // 1
 */

/*
 6. TapeEquilibrium - 모르겟음 정답률 38%


function solution(A) {
  const results = [];

  A.forEach((num, idx) => {
    const P = idx + 1; //  1,2,3,4,5
    const firstArr = A.slice(0, P).reduce((acc, cur) => acc + cur);
    const secondArr = A.slice(P).reduce((acc, cur) => acc + cur, 0);

    const gap = Math.abs(firstArr - secondArr);
    results.push(gap);
  });

  return Math.min(...results);
}

console.log(solution([3, 1, 2, 4, 3])); //

 */

/*
7. FrogRiverOne <- 문제 잘 이해 안됨 skip


function solution(X, A) {
  const s = new Set(); // {1,3,4,2}

  for (let idx = 0, leng = A.length; idx < leng; idx++) {
    const value = A[idx];
    s.add(value);

    if (s.size === X) {
      return idx;
    }
    // console.log(s.size); // 1 2 2 3 4 4 6
  }

  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])); // 6
*/

/*
8. PermCheck - 41%


function solution(A) {
  const sortArr = [...A].sort(); // [1,2,3,4] [1,3,4]
  let result = '';

  for (let i = 0; i < sortArr.length - 1; i += 1) {
    if (Math.abs(sortArr[i] - sortArr[i + 1]) === 1) {
      result = 1;
    } else {
      result = 0;
      break;
    }
  }

  return result;
}

console.log(solution([4, 1, 3, 2])); // 1 순열ㅇ
console.log(solution([4, 1, 3])); // 0 순열x
*/

// const dec1 = 13;
// const dec2 = 7;
// const dec3 = 2;
// const dec4 = 8;
// const dec5 = 3;

// console.log(dec1.toString(2).padStart(4, '0')); // 1101
// console.log(dec2.toString(2).padStart(4, '0')); // 0111
// console.log(dec3.toString(2).padStart(4, '0')); // 0010
// console.log(dec4.toString(2).padStart(4, '0')); // 1000
// console.log(dec5.toString(2).padStart(4, '0')); // 0011

// const result = 0001;
// console.log(result.toString(10)); // 1

const dec1 = 1;
const dec2 = 2;
const dec3 = 4;
const dec4 = 8;

console.log(dec1.toString(2).padStart(4, '0')); // 0001
console.log(dec2.toString(2).padStart(4, '0')); // 0010
console.log(dec3.toString(2).padStart(4, '0')); // 0100
console.log(dec4.toString(2).padStart(4, '0')); // 1000
