// 소수 : 1과 자기 자신으로만 나누어 떨어지는 수를 가리키는 말이다.
// 문제. nums배열에서 3개 숫자를 더했을 떄 소수가 되는 경우의 수를 구하시오
// 조건1. nums배열은 3~50개
// 조건2. 1~1000까지의 자연수가 있음. 중복된 숫자 없음.

/*
풀이
1.소수 구하는 법 만들기
2.세자리 수 더할 수 있는 경우의 수 만들기
*/

// <정답>
function isPrime(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(arr) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      for (let p = j + 1; p < arr.length; p += 1) {
        const num = arr[i] + arr[j] + arr[p];
        //
        if (isPrime(num)) {
          cnt += 1;
        }
        //
      }
    }
  }
  return cnt;
}

// <소수 구하기> - 소수면 true, 아니면 false

// 방법1
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); // t
console.log(isPrime(2)); // t
console.log(isPrime(3)); // t
console.log(isPrime(4)); // f
console.log(isPrime(5)); // t
console.log(isPrime(6)); // f
console.log(isPrime(7)); // t
console.log(isPrime(8)); // f
console.log(isPrime(9)); // f
console.log(isPrime(10)); // f
console.log(isPrime(11)); // t

/*
 num / 제곱근
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
