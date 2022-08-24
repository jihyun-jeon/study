/*
Number.toString(raidx) -  숫자를 radix에 해당하는 진수로 바꾸고, 그 결과를 문자열로 나타냄.
Number.parseInt(string, radix) - 문자열을 radix에 해당하는 진수로 읽어서, 10진법인 숫자형으로 바꿈.
parseInt("10", 2); // 2 - 파라미터 "10"을 2진법으로 읽어서, 10진법으로 변환한 값을 리턴함.
parseInt("0021", 3); // 7 - 파라미터 "0021"을 3진법으로 읽어서, 10진법으로 변환한 값을 리턴하였습니다.
*/

// 방법0 - 내가한 방법
// function solution(num) {
//   return parseInt(num.toString(3).split().reverse().join(''), 3); // 0021
//   // return parseInt(bin, 3); // 7
// }

// 방법1
// function solution(n) {
//   return parseInt(n.toString(3).split('').reverse().join(''), 3);
// }

// 방법2 - 진법 계산을 직접하는 법
function solution(n) {
  const answer = []; // [1,2,0,0]
  while (n) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }

  return answer.reduce((acc, cur, i) => acc + cur * Math.pow(3, i), 0); // 1+4+
}

// 실행코드
console.log(solution(45)); // 7
// console.log(solution(125)); // 229

/*
console.log(45 % 3); // 0
console.log(45 / 3); // 15

console.log(15 % 3); // 0
console.log(15 / 3); // 5

console.log(5 % 3); // 2
console.log(5 / 3); // 1

console.log(1 % 3); // 1
console.log(1 / 3); // 0
*/

const elements = 'abcd';

console.log(elements.split()); // ["abcd"]
console.log(elements.split('')); // ["a","b","c","d"]

const el = 'ab-cd-ef';
console.log(el.split('-')); // ["ab","cd","ef"]
