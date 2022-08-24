// 방법1 - forEach, push 활용
// function solution(array, commands) {
//   //
//   const result = [];
//   //
//   commands.forEach((el) => {
//     result.push(array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1]);
//   });
//   //
//   return result;
// }

// 방법2 - reduce활용
// function solution(array, commands) {
//   //
//   const result = commands.reduce((acc, cur) => {
//     const x = array.slice(cur[0] - 1, cur[1]).sort((a, b) => a - b)[cur[2] - 1];
//     return [...acc, x];
//   }, []);
//   //
//   return result;
// }

// 방법3 - 다른사람 풀이 map활용
// function solution(array, commands) {
//   const result = commands.map(
//     (el) => array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1],
//   );
//   return result;
// }

// 방법4 - map,filter활용
// function solution(array, commands) {
//   return commands.map((command) => {
//     const [sPosition, ePosition, position] = command;
//     //
//     const newArray = array
//       .filter(
//         (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1,
//       )
//       .sort((a, b) => a - b);
//     //
//     return newArray[position - 1];
//   });
// }

// ***** 실행코드 *****
// console.log(
//   solution(
//     [1, 5, 2, 6, 3, 7, 4],
//     [
//       [2, 5, 3], // [2,3,5,6]
//       [4, 4, 1], // [6]
//       [1, 7, 3], // [1, 2, 3, 4, 5, 6, 7]
//     ],
//   ),
// ); // 결과 - [5, 6, 3]
