// <내가 한 방법>
function solution(arr) {
  let result = 1;
  const max = arr.sort((a, b) => b - a)[0]; // arr중 제일 큰 숫자를 찾음

  for (let i = 2; i <= max; i += 1) {
    let trueFalse = arr.some((el) => el % i === 0); // arr의 요소 중 하나라도 2로 나눠지는게 있으면 true

    // arr에서 2로 나눌 수 있는 요소가 없을 때 까지 계속 나눠주면서, result에 2를 곱함.
    // 2로 나눌 수 있는 요소가 없으지면 i를 3,4,5...로 늘려가면서 최대한 나눠주면서, result에 i를 곱함.
    while (trueFalse) {
      arr = arr.map((el) => (el % i === 0 ? el / i : el));
      result *= i;
      if (arr.some((el) => el % i === 0)) {
        trueFalse = true;
      } else {
        trueFalse = false;
      }
    }
  }
  // arr에서 더이상 나눠지는 숫자가 없으면, resul와 arr의 모든 요소를 다 곱하여 반환함.
  return arr.reduce((acc, cur) => acc * cur, result);
}

// < 다른 사람 방법1 >
// function gcd(a, b) {
//   return a % b ? gcd(b, a % b) : b;
// }

// function solution(num) {
//   return num.reduce((a, b) => (a * b) / gcd(a, b));
// }

// < 다른 사람 방법2 > - while문 대신 reduce로 도는 방법
// function solution(arr) {
//   return arr.reduce((acc, cur) => {
//     const recursive = (min, max) => {
//       return min % max === 0 ? max : recursive(max, min % max);
//     };

//     let max = 0;
//     return (acc * cur) / recursive(acc, cur);
//   });
// }

// < 다른 사람 방법3 >
// function solution(arr) {
//   let answer = 0;
//   let isFind = false;
//   let i = 1;
//   arr.sort((a, b) => a - b);
//   const max = arr.splice(arr.length - 1, 1);

//   while (!isFind) {
//     isFind = arr.every((e) => (max * i) % e === 0);
//     i += 1;
//   }

//   answer = max * (i - 1);
//   return answer;
// }

console.log(solution([60, 48, 40])); // 240
console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
console.log(solution([39, 26, 13, 11, 7, 5, 3, 2, 1])); // 30030
