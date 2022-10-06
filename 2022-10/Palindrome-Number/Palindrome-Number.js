// < 나의 풀이 > - 318ms
// const isPalindrome = function (x) {
//   return x === +String(x).split('').reverse().join('');
// };

// <다른사람 방식> - 316ms
// const isPalindrome = function (x) {
//   const arr = String(x).split(''); // ["1","2","1"]

//   while (arr.length > 1) {
//     if (arr.shift() !== arr.pop()) {
//       // 젤 첫번째 ["1"] === 젤 끝자리["1"]
//       return false;
//     }
//   }

//   return true;
// };

// < 실행코드 >
// console.log(isPalindrome(121)); // t
// console.log(isPalindrome(-121)); // f
// console.log(isPalindrome(10)); // f
