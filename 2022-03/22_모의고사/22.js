// 내가 한 방법
// function solution(answers) {
//   const person = [
//     [1, 2, 3, 4, 5],
//     [2, 1, 2, 3, 2, 4, 2, 5],
//     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
//   ];

//   const correct = [[], [], []]; // [[1,2,3,4,5],[],[]];
//   for (let j = 0; j < person.length; j += 1) {
//     for (let i = 0; i < answers.length; i += 1) {
//       if (answers[i] === person[j][i % person[j].length]) {
//         correct[j].push(person[j][i % person[j].length]);
//       }
//     }
//   }

//   const rank = []; // [5, 0, 0] [2,2,2] [2,3,1]
//   for (let i = 0; i < correct.length; i += 1) {
//     rank.push(correct[i].length);
//   }

//   const maxNum = Math.max(...rank);

//   const result = [];
//   for (let i = 0; i < rank.length; i += 1) {
//     if (maxNum === rank[i]) {
//       result.push(i + 1);
//     }
//   }
//   return result;
// }

// 방법1
// function solution(answers) {
//   const p1 = [1, 2, 3, 4, 5];
//   const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   const p1Answer = answers.filter((el, i) => el === p1[i % p1.length]);
//   const p2Answer = answers.filter((el, i) => el === p2[i % p2.length]);
//   const p3Answer = answers.filter((el, i) => el === p3[i % p3.length]);

//   const maxNum = Math.max(p1Answer.length, p2Answer.length, p3Answer.length);

//   const result = [];
//   if (maxNum === p1Answer.length) {
//     result.push(1);
//   }

//   if (maxNum === p2Answer.length) {
//     result.push(2);
//   }

//   if (maxNum === p3Answer.length) {
//     result.push(3);
//   }

//   return result;
// }

// 방법2
// function solution(answers) {
//   const man1 = [1, 2, 3, 4, 5];
//   const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   const count = [0, 0, 0];
//   const result = [];

//   for (let i = 0; i < answers.length; i += 1) {
//     if (answers[i] === man1[i % man1.length]) count[0] += 1;
//     if (answers[i] === man2[i % man2.length]) count[1] += 1;
//     if (answers[i] === man3[i % man3.length]) count[2] += 1;
//   }

//   const max = Math.max(count[0], count[1], count[2]);
//   for (let i = 0; i < count.length; i += 1) {
//     if (max === count[i]) {
//       result.push(i + 1);
//     }
//   }

//   return result;
// }

// function solution(answers) {
//   const man1 = [1, 2, 3, 4, 5];
//   const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   const rank = [0, 0, 0];
//   const result = [];

//   for (let i = 0; i < answers.length; i += 1) {
//     if (answers[i] === man1[i % man1.length]) {
//       rank[0] += 1;
//     }
//   }

//   for (let i = 0; i < answers.length; i += 1) {
//     if (answers[i] === man2[i % man2.length]) {
//       rank[1] += 1;
//     }
//   }

//   for (let i = 0; i < answers.length; i += 1) {
//     if (answers[i] === man3[i % man3.length]) {
//       rank[2] += 1;
//     }
//   }

//   const max = Math.max(...rank);

//   for (let i = 0; i < rank.length; i += 1) {
//     if (max === rank[i]) {
//       result.push(i + 1);
//     }
//   }

//   return result;
// }

// console.log(solution([1, 2, 3, 4, 5])); // [1]
// console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
// console.log(solution([1, 1, 2, 4, 2])); // [2]

// console.log(0 % 5); // 0
// console.log(1 % 5); // 1
// console.log(2 % 5); // 2
// console.log(3 % 5); // 3
// console.log(4 % 5); // 4
// console.log(5 % 5); // 0
// console.log(6 % 5); // 1
// console.log(7 % 5); // 2
