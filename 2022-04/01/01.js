// <내가 한 방법>
// function solution(arr, budget) {
//   arr.sort((a, b) => a - b);

//   let sum = 0;
//   let reuslt = 0;
//   //
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i]; // 3,5,7,9,NaN
//     if (sum <= budget) {
//       reuslt = i + 1;
//     } else {
//       break;
//     }
//   }
//   //
//   return reuslt;
// }

// 방법1 - reduce를 활용해 카운트함.
// function solution(arr, budget) {
//   return arr
//     .sort((a, b) => a - b)
//     .reduce((acc, cur) => {
//       // console.log((budget -= cur) >= 0); // t,t,t, f,f
//       return acc + ((budget -= cur) >= 0);
//     }, 0);
// }

// // 방법2
// function solution(arr, budget) {
//   arr.sort((a, b) => a - b);

//   while (arr.reduce((a, b) => a + b, 0) > budget) {
//     arr.pop();
//   }

//   return arr.length;
// }

// // 방법4 - 질문
// function solution(arr, budget) {
//   return arr
//     .sort((a, b) => a - b) // [1,2,3,4,5]
//     .filter((x) => (budget - x >= 0 ? ((budget -= x), 1) : 0)); // [1,2,3,]
// }

// 실행코드
// console.log(solution([1, 3, 2, 5, 4], 9)); // 3 [1,2,3,4,5]
// console.log(solution([2, 2, 3, 3], 10)); // 4
