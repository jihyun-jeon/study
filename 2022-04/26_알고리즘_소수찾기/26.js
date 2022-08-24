/* < 소수찾기 > */

/* 내가 한 방법 */
// function isPrime(num) {
//   if (num === 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i += 1) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function solution(num) {
//   let cnt = 0;
//   for (let i = num; i >= 1; i -= 1) {
//     if (isPrime(i)) {
//       cnt += 1;
//     }
//   }
//   return cnt;
// }

/* 다른 사람 방법1 */
function solution(num) {
  let cnt = 0;

  if (num === 1) {
    return 0;
  }

  for (let i = 2; i <= num; i += 1) {
    if (i === 2 || i === 3) {
      cnt += 1;
      continue;
    }

    let x = 0;
    for (let j = 2; j <= Math.sqrt(num); j += 1) {
      // console.log(j); // 2,3
      if (i % j === 0) {
        x += 1;
      }
    }

    if (!x) {
      cnt += 1;
    }
  }

  return cnt;
}

console.log(solution(1)); // 0
console.log(solution(10)); // 4
console.log(solution(5)); // 3

/*
 * < 소수 구하는 법 >
 * 1. 1은 소수가 아니다
 * 2. 제곱근이 1이건 무조건 소수다
 * 3. 해당 숫자를 '제곱근~2'까지의 숫자로 나누어서 나머지가 0이 나오는게 없으면, 소수다.
 */
// console.log(isPrime(1)); // f *제곱근 : 1
// console.log(isPrime(2)); // t *제곱근 : 1.4142135623730951
// console.log(isPrime(3)); // t *제곱근 : 1.7320508075688772
// console.log(isPrime(4));
// console.log(isPrime(5)); // t *제곱근 :  2.23606797749979
// console.log(isPrime(6));
// console.log(isPrime(7)); // t *제곱근 :  2.6457513110645907
// console.log(isPrime(8));
// console.log(isPrime(9));
// console.log(isPrime(10));
// console.log(isPrime(11)); // t *제곱근 : 3.3166247903554
// console.log(isPrime(12));
// console.log(isPrime(13)); // t *제곱근 : 3.605551275463989

/*
num / 제곱근( Math.sqrt(num) )
 1  /  1
 2  /  1.4142135623730951
 3  /  1.7320508075688772
 4  /  2
 5  /  2.23606797749979
 6  /  2.449489742783178
 7  /  2.6457513110645907
 8  /  2.8284271247461903
 9  /  3
 10  /  3.1622776601683795
 11  /  3.3166247903554
 12  /  3.4641016151377544
 13  /  3.605551275463989
 14  /  3.7416573867739413
 15  /  3.872983346207417
 16  /  4
 */
