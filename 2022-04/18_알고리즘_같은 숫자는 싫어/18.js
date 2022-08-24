// <같은 숫자는 싫어>
// function solution(arr) {
//   return arr.reduce((acc, cur) => {
//     if (acc[acc.length - 1] !== cur) {
//       acc.push(cur);
//     }
//     return acc;
//   }, []);
// }

// 다른사람 방법
// function solution(arr) {
//   return arr.filter((el, idx) => el !== arr[idx + 1]);
// }

// 피드백
// 인자가 배열인데 - 같은 길이의 배열을 반환할 땐 map, 다른 길이의 배열을 반환할 땐 filter 사용 추천

// 실행코드
// console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
// console.log(solution([4, 4, 4, 3, 3, 4, 4])); // [4,3,4]

// <나누어 떨어지는 숫자 배열>
// function solution(arr, divisor) {
//   const divArr = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b);
//   return divArr.length ? divArr : [-1];
// }
// 실행코드
// console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
// console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
// console.log(solution([3, 2, 6], 10)); // [-1]

// <두 정수 사이의 합>
// function solution(a, b) {
//   const first = Math.min(a, b);
//   const second = Math.max(a, b);
//   let result = 0;

//   for (let i = first; i <= second; i += 1) {
//     result += i;
//   }

//   return result;
// }

function solution(a, b) {
  let result = a < b ? a : b; // 3
  while (a !== b) {
    result += a < b ? (a += 1) : (b += 1); // 3+ 4+ 5
  }
  return result;
}

console.log(solution(3, 5)); // 12
console.log(solution(3, 3)); // 3
console.log(solution(5, 3)); // 12
