/* <문자열 다루기 기본> */
// 내가 한 방법
// function solution(idx) {
//   const arr = [...idx];

//   if (arr.length === 4 || arr.length === 6) {
//     arr.sort();
//     return isNaN(Number(arr[arr.length - 1])) ? false : true;
//   }
//   return false;
// }

// 방법2 - 정규식 이용
// function solution(idx) {
//   // 1.문자있으면 거름
//   if (idx.match(/[a-z]/g)) {
//     return false;
//   }
//   // 2. 문자없으면 길이 따짐
//   if (idx.length === 4 || idx.length === 6) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(solution('6234')); // true
// console.log(solution('a234')); // false
// console.log(solution('1e22')); // false // 지수형식("1e22")을 넣었을 경우 문제가 됩니다

/* <서울에서 김서방 찾기> */
// function solution(arr) {
//   const num = arr.indexOf('Kim');
//   return `김서방은 ${num}에 있다`;
// }

// console.log(solution(['Jane', 'Kim'])); // "김서방은 1에 있다"

// indexOf() : 인덱스 값 찾는 메소드
// includes() : 있는지 없는지만 true, false로 알 수 있음. 인덱스 값은 알 수 없음

/* <문자열을 정수로 바꾸기> */
// function solution(idx) {
//   return Number(idx);
// }

// function solution(idx) {
//   return +idx;
// }

// function solution(idx)
