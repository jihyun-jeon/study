/* 알고리즘 문제 <2016년> */
// 방법1
// function solution(a, b) {
//   const Yoil = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//   const d = new Date(2016, a - 1, b);
//   const day = d.getDay();
//   return Yoil[day];
// }

// 방법2
// function solution(a, b) {
//   const d = new Date(2016, a - 1, b);
//   const day = d.toString().slice(0, 3);
//   return day.toUpperCase();
// }

// 실행코드
// console.log(solution(5, 24)); // "TUE"

/* 알고리즘 문제 <최소직사각형> */
// 방법1
// function solution(arr) {
//   const num1 = [];
//   const num2 = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     // arr[i][0]와 arr[i][1]를 비교해서, 큰 수를 num1에 넣기
//     if (arr[i][0] > arr[i][1]) {
//       num1.push(arr[i][0]);
//       num2.push(arr[i][1]);
//     } else {
//       num1.push(arr[i][1]);
//       num2.push(arr[i][0]);
//     }
//   }

//   return Math.max(...num1) * Math.max(...num2);
// }

// 방법2 - reduce로 돌면서 가로,세로의 최대값만 배열에 담아 추출.
// function solution(arr) {
//   // reduce를 돌면서 [젤 큰 수,젤 작은 수]를 리턴하기
//   const [x, y] = arr.reduce(
//     (acc, cur) => {
//       return [
//         Math.max(acc[0], Math.max(...cur)),
//         Math.max(acc[1], Math.min(...cur)),
//       ];
//     },
//     [0, 0],
//   );
//   return x * y;
// }

// 방법3- 이중배열을 오름차순으로 정렬시킨 후, forEach로 순회하면서 젤 큰 수를 뽑아냄.
// function solution(arr) {
//   // 1.이중배열 구조를 유지한 채, 안에있는 숫자를 오름차순으로 정렬함
//   const newArr = arr.map(([a, b]) => [Math.max(a, b), Math.min(a, b)]);

//   const maxSize = [0, 0];
//   newArr.forEach((el) => {
//     maxSize[0] = Math.max(maxSize[0], el[0]);
//     maxSize[1] = Math.max(maxSize[1], el[1]);
//   });

//   return maxSize[0] * maxSize[1];
// }

// 실행코드
// console.log(
//   solution([
//     [60, 50],
//     [30, 70],
//     [60, 30],
//     [80, 40],
//   ]),
// ); // 4000
// console.log(
//   solution([
//     [10, 7],
//     [12, 3],
//     [8, 15],
//     [14, 7],
//     [5, 15],
//   ]),
// ); // 120
// console.log(
//   solution([
//     [14, 4],
//     [19, 6],
//     [6, 16],
//     [18, 7],
//     [7, 11],
//   ]),
// ); // 133
