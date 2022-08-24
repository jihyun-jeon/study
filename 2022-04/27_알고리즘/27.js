// <내가 한 방법>
// function solution(num) {
//   const arr = Array(num).fill('_');
//   const watermelon = arr.map((el, idx) => (idx % 2 ? '박' : '수'));
//   return watermelon.join('');
// }

// 방법1
// function solution(num) {
//   return '수박'.repeat(num / 2) + (num % 2 ? '수' : '');
// }

// 방법2
// function solution(num) {
//   // return '수박'.repeat(num).substring(0, num);
//   return '수박'.repeat(num).slice(0, num);
// }

// console.log(solution(3)); // "수박수"
// console.log(solution(4)); // "수박수박"

/**
 * String 메서드 공부!
 * String.prototype.repeat()
 * String.prototype.substring()
 */

console.log(Boolean(1));
console.log(Boolean('x'));
console.log(Boolean([]));
console.log(Boolean({}));
