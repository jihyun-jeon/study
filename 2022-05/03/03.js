// <이상한 문자 만들기>
// 내가 한 방법1
// function solution(str) {
//   const result = [];
//   const arr = str.split(' ');
//   for (let j = 0; j < arr.length; j += 1) {
//     let word = '';
//     for (let i = 0; i < arr[j].length; i += 1) {
//       if (i % 2 === 0) {
//         word += arr[j][i].toUpperCase();
//       } else {
//         word += arr[j][i].toLowerCase();
//       }
//     }
//     result.push(word);
//   }
//   return result.join(' ');
// }

// console.log(solution("try hello world")); // "TrY HeLlO WoRlD"

// <자릿수 더하기>
// 내가 한 방법1
// function solution(num) {
//   return String(num)
//     .split('')
//     .reduce((acc, cur) => (acc += Number(cur)), 0);
// }

// console.log(solution(123)); // 6
// console.log(solution(987)); // 24

// <자연수 뒤집어 배열로 만들기>
// function solution(num) {
//   return String(num)
//     .split('')
//     .reverse()
//     .map((el) => +el);
// }

// console.log(solution(12345)); // [5,4,3,2,1]

// <정수 내림차순으로 배치>
// function solution(num) {
//   return Number(
//     String(num)
//       .split('')
//       .sort((a, b) => b - a)
//       .join(''),
//   );
// }

// console.log(solution(118372)); // 873211

// < 정수 제곱근 판별 >
/* 소숫점이 있는지 없는지를 알아보기 위한 방법
  1.Math.sqrt(num) - Math.floor(Math.sqrt(num)) 해서 0.1 이상이 나오면 true가 됨.
  2.Number.isInteger() - 주어진 값이 정수인지 판별합니다. // 반환값 : true,false
*/

// function solution(num) {
//   return Math.sqrt(num) - Math.floor(Math.sqrt(num))
//     ? -1
//     : Math.pow(Math.sqrt(num) + 1, 2);
// }

// function solution(num) {
//   return Number.isInteger(Math.sqrt(num))
//     ? Math.pow(Math.sqrt(num) + 1, 2)
//     : -1;
// }

// console.log(solution(121)); // 144
// console.log(solution(3)); // -1
