// 나의 풀이 - 허접함, 버그있음
// function isValid(str) {
//   const obj = {
//     '(': 1,
//     ')': -1,
//     '[': 2,
//     ']': -2,
//     '{': 3,
//     '}': -3,
//   };

//   // 1. 두 짝이 안맞는 경우
//   const sum = [...str].reduce((acc, cur) => acc + obj[cur], 0);
//   if (sum) {
//     return false;
//   }

//   // 2. 순서대로 조회
//   let result = false;
//   for (let i = 0; i < str.length; i += 2) {
//     if (Math.abs(obj[str[i]]) === Math.abs(obj[str[i + 1]])) {
//       result = true;
//     } else {
//       result = false;
//       return result;
//     }
//   }

//   return result;

//   // 3. 대칭으로 조회

// }

// <모범 답안 - stack구조 활용>
function isValid(str) {
  const obj = { '(': ')', '[': ']', '{': '}' };
  const arr = [...str].map((el) => obj[el] ?? el); // [")",")"]
  const flag = [arr[0]]; // [")"]

  for (let i = 1; i < arr.length; i += 1) {
    const nowStr = arr[i];
    if (nowStr === flag[flag.length - 1]) {
      flag.pop();
    } else {
      flag.push(nowStr);
    }
  }

  return flag.length === 0;
}

// console.log(isValid('()'));
// console.log(isValid('()[]{}'));
// console.log(isValid('{[]}'));
// console.log(isValid('[]{}'));
// console.log(isValid('[{}{}{}]'));
// console.log(isValid('(]')); // f
// console.log(isValid('{[}]')); // f
