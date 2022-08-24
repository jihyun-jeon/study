/* <<< 문자열 내 p와 y의 개수 >>> */
// <내가 한 방법>
// function solution(idx) {
//   const CntP = [...idx].filter((el) => el === 'p' || el === 'P').length;
//   const CntY = [...idx].filter((el) => el === 'y' || el === 'Y').length;
//   return CntP === CntY;
// }

// < 다른 사람 방법>
// function solution(idx) {
//   return (
//     idx.toUpperCase().split('P').length === idx.toUpperCase().split('Y').length
//   );
// }
// function solution(idx) {
//   // console.log(idx.match(/p/gi)); // ["p","P"]
//   return (idx.match(/p/gi) || []).length === (idx.match(/y/gi) || []).length;
// }

// console.log(solution('pooos')); // false - [case1] p만 있는 경우
// console.log(solution('pPoooyY')); // true - [case2] p, y 둘다 있는 경우
// console.log(solution('Pyy')); // false - [case2] p, y 둘다 있는 경우
// console.log(solution('sgq')); // true - [case3] 둘다 없는 경우

/* <<< 문자열 내림차순으로 배치하기 >>> */
// function solution(idx) {
//   return [...idx].sort().reverse().join('');
// }

// console.log(solution('Zbcdefg')); // 'gfedcbZ'
