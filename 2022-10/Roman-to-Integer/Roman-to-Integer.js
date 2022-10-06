// <나의 풀이> - 251ms

// const numberObj = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// const romanToInt = function (s) {
//   let result = 0;

//   for (let i = 0; i < s.length; i += 1) {
//     const currentNum = numberObj[s[i]];
//     const nextNum = numberObj[s[i + 1]];

//     if (currentNum >= (nextNum ?? 0)) {
//       result += currentNum;
//     } else {
//       result += nextNum - currentNum;
//       i += 1;
//     }
//   }

//   return result;
// };

/*
< 나의 풀이방식 >
 "M   /   C   M      /    X C     /  I V"
1000    100 1000        10 100       1 5

m이 c 보다 같거나 또는 큼
그럼 m(1000)더함.
그리고 다음턴 for문 순회

근데 c가 m 보다 작음
그럼 m-c한걸 더함
그리고 i증가 > 그리고 다음턴 for문 순회

x가 c보다 작음
그럼 c-x를 더함
그리고 i증가 > 그리고 다음턴 for문 순회

i가 v보다 작음
그럼 v-i한걸 더함
그리고 i증가 > 그리고 다음턴 for문 순회

for문 끝나면 합산결과 리턴
*/

// // < 다른 사람 풀이 > - 230ms
// const romanToInt = function (s) {
//   const dict = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;
//   let intVal = 0;
//   let nextIntVal = 0;
//   for (let i = 0; i < s.length; i += 1) {
//     intVal = dict[s[i]];

//     if (i !== s.length - 1) {
//       nextIntVal = dict[s[i + 1]];
//       if (nextIntVal > intVal) {
//         intVal = nextIntVal - intVal;
//         i += 1;
//       }
//     }
//     result += intVal;
//   }
//   return result;
// };

/*
<다른사람 방식 설명>
1. 나랑 비슷한데
*/

console.log(romanToInt('III')); // 3  <- III = 3.
console.log(romanToInt('LVIII')); // 58 <- L = 50, V= 5, III = 3.
console.log(romanToInt('MCMXCIV')); // 1994 <- M = 1000, CM = 900, XC = 90 and IV = 4.
