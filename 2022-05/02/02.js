// function solution(num) {
//   const arr = new Set(); // 자동으로 중복값 제거됨
//   const x = Math.floor(Math.sqrt(num)); // 1.제곱근을 구함. 소수점은 버림

//   // 2. 제곱근~1의 숫자로 해당 숫자를 나눠봄.
//   // 나머지가 0이 나오면 약수인 것임. 약수이면 arr에 담음.
//   for (let i = x; i >= 1; i -= 1) {
//     if (num % i === 0) {
//       arr.add(i);
//       arr.add(num / i);
//     }
//   }

//   // 3.arr에 있는 모든 수를 합해서 반환함
//   return [...arr].reduce((acc, cur) => acc + cur, 0);
// }

// 다른 사람 방법
// 방법1
// function solution(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i += 1) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// 방법2
// function solution(num) {
//   let result = 0;
//   const sqrt = Math.floor(Math.sqrt(num));

//   for (let i = 1; i <= sqrt; i += 1) {
//     if (!(num % i)) {
//       num / i === i ? (result += i) : (result += i + num / i); // 두 약수가 같으면 하나만 더함.
//     }
//   }
//   return result;
// }

// 실행코드
// console.log(solution(12)); // 28 (1, 2, 3, 4, 6, 12) // 제곱근 :3
// console.log(solution(10)); // 18 (1, 2 , 5, 10) // 제곱근 : 3
// console.log(solution(5)); // 6 (1, 5) // 제곱근 : 2
// console.log(solution(13)); // 14 (1,2,7,14)
// console.log(solution(1)); //  1 (1)
// console.log(solution(2)); //  3 (1,2)
// console.log(solution(0)); //  0 (0)
// console.log(solution(4)); // 7  (1,2,4)
