// // 방법1. 내가 한 방법
// function solution(idx) {
//   const long = idx.length;
//   const half = long / 2;

//   if (long % 2) {
//     return idx.slice(Math.floor(half), Math.floor(half) + 1); // 2,3
//   }

//   return idx.slice(half - 1, half + 1); // 1,3
// }

// // 방법4
// function solution(s) {
//   return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
// }

// 방법5
// function solution(s) {
//   const mid = Math.floor(s.length / 2);
//   return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
// }

// slice
console.log('0123456789'.slice(5, 7)); // 56
console.log('0123456789'.slice(7, 5)); // 공백   <- [P1]start가 end보다 크면 공백으로 나옴
console.log('0123456789'.slice(3, -1)); // 345678 <- [p2]마이너스 값은 활용 가능, NaN은 0으로 인식됨.
console.log('0123456789'.slice(-5, -1)); // 5678 (시작값이 마이너스면, 마이너스로 끝나야 함)
console.log('0123456789'.slice(-5, 1)); // 공백 (시작값이 마이너스면, 마이너스로 끝나야 함)
// substring
console.log('0123456789'.substring(5, 7)); // 56
console.log('0123456789'.substring(7, 5)); // 56 <- [P1]start가 end보다 크면 두 수가 뒤집어짐. (5,7)인 꼴
console.log('0123456789'.substring(3, -1)); // 012 <- [p2]마이너스값과 NaN은 0으로 인식됨, 따라서 (0,3)인 꼴임
