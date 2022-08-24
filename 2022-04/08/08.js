/* <문제1.나머지가 1이 되는 수 찾기> */
// // 방법1 - for문 사용
// function solution(num) {
//   for (let i = 2; i <= num; i += 1) {
//     if (num % i === 1) {
//       return i;
//     }
//   }
// }

// // 방법2 - while문 사용
// function solution(num) {
//   let i = 2;
//   while (num % i !== 1) {
//     i += 1;
//   }
//   return i;
// }

// console.log(solution(10)); // 3
// console.log(solution(12)); // 11

/* <문제2. 부족한 금액 계산하기 > */
// 방법1
function solution(price, money, count) {
  let sum = 0;
  while (count > 0) {
    sum += price * count;
    count -= 1;
  }
  return sum - money > 1 ? sum - money : 0;
}

console.log(solution(3, 20, 4)); // 10
