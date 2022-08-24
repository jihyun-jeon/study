// < 내가 한 방법>
// function solution(str, num) {
// const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
//   let result = '';

//   for (let i = 0; i < str.length; i += 1) {
//     // 공백이면 그냥 공백으로 리턴
//     if (str[i] === ' ') {
//       result += ' ';
//       continue;
//     }

//     let idx = alpha.findIndex((el) => el === str[i]);

//     if (idx >= 0) {
//       // 소문자가 있을 경우
//       let position = idx + num; // 26
//       if (position > alpha.length - 1) {
//         // 26 > 25
//         position -= alpha.length;
//       }
//       result += alpha[position];
//       continue;
//     } else {
//       // 대문자일 경우
//       idx = alpha.findIndex((el) => el === str[i].toLowerCase());
//       let position = idx + num;
//       if (position > alpha.length - 1) {
//         position -= alpha.length;
//       }
//       result += alpha[position].toUpperCase();
//     }
//   }

//   return result;
// }

// < 다른 사람 방법>
// function solution(str, num) {
//   const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
//   const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

//   let result = '';

//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === ' ') {
//       result += ' ';
//       continue;
//     }
//     const arr = lower.includes(str[i]) ? lower : upper;
//     let index = arr.indexOf(str[i]) + num;
//     if (index > arr.length - 1) {
//       index -= arr.length;
//     }
//     result += arr[index];
//   }
//   return result;
// }

// 방법2
// function solution(str, n) {
//   const alpha =
//     'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ';
//   return str
//     .split('')
//     .map((el) => alpha[alpha.indexOf(el) + n])
//     .join('');
// }

// console.log(solution('Ab', 1)); /// BC
// console.log(solution('z', 1)); // a
// console.log(solution('a B', 1)); // b C
// console.log(solution('a B z', 4)); // e F d

let x = 1;
let x = 2;
