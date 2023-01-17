/*
// [] LV.0 종이 자르기 ]
// < 나의 풀이 >
function solution(M, N) {
  return M - 1 + (N - 1) * M;
}

// < 다른사람 풀이 >
function solution(M, N) {
  return M * N - 1;
}

// console.log(solution(2, 2)); // 3
// console.log(solution(2, 5)); // 9
// console.log(solution(1, 1)); // 0
// console.log(solution(3, 4)); // 11
*/
// ----------------------------------------------------------------------------------------------------------------

/*
// [ LV0. 문자열 밀기 ]
// // < 나의풀이 >
function solution(A, B) {
  for (let i = 0; i < B.length; i++) {
    const streamed = `${B.slice(i)}${B.slice(0, i)}`;
    if (streamed === A) {
      return i;
    }
  }
  return -1;
}

// < 다른사람 풀이 >
let solution = (a, b) => (b + b).indexOf(a); // 'ohellohell' // 1

// console.log(solution('hello', 'hello')); // 0
// console.log(solution('hello', 'ohell')); // 1
// console.log(solution('hello', 'lohel')); // 2
// console.log(solution('apple', 'elppa')); // -1
// console.log(solution('atat', 'tata')); // 1
// console.log(solution('abcd', 'cdab')); // 1
// console.log(solution('abc', 'abc')); // 0
*/

// ----------------------------------------------------------------------------------------------------------------

/*
// [LV0. 잘라서 배열로 저장하기]
// <나의 풀이 >
function solution(my_str, n) {
  let answer = [];

  for (let i = 0; i < Math.ceil(my_str.length / n); i += 1) {
    const streamed = my_str.slice(i * n, (i + 1) * n); // (0,6) (6,12) (12,16)
    answer.push(streamed);
  }

  return answer;
}

function solution(my_str, n) {
  let arr = my_str.split('');
  let answer = [];

  while (arr.length > 0) {
    answer.push(arr.splice(0, n).join(''));
  }
  return answer;
}

// console.log(solution('abcdef', 1)); // ["a", "b", "c" , "d", "e","f"]
// console.log(solution('abc1Addfggg4556b', 6)); // ["abc1Ad", "dfggg4", "556b"]
// console.log(solution('abcdef123', 3)); // ["abc", "def", "123"]
*/

// ----------------------------------------------------------------------------------------------------------------
/*
// [LV0. 7의 개수]
// <나의 풀이 >
function solution(array) {
  const sum = array.join('');
  const answer = sum.match(/7/g).length;
  return answer;
}

// < 다른사람 풀이 >
function solution(array) {
  const answer = array.join('').split('7'); // ["","","","1",""] // ["1029"]
  return answer.length - 1;
}

// console.log(solution([7, 77, 17])); // 4
// console.log(solution([10, 29])); // 0

// <split 공부>
const str = 'red yelrlow green brlue';

const arr1 = str.split(); // 고대로 배열에 해당 문자 담아서 반환
const arr2 = str.split(' '); // 공백으로 나눈 문자들을 배열에 담아서 반환
const arr3 = str.split('r'); // 특정 문자 기준 앞뒤로 자른 값을 반환. 여기서 특정 문자가 있는 자리는 ""가 되면서 없어짐.

// console.log(arr1); // ['red yellow green blue']
// console.log(arr2); // ['red', 'yellow', 'green', 'blue']
// console.log(arr3); // ['', 'ed yel', 'low g', 'een b', 'lue'] (5)
*/
// ----------------------------------------------------------------------------------------------------------------
/*
// [LV0. 문자열 정렬하기 (2)]
// <나의 풀이 >

function solution(my_string) {
  var answer = [...my_string.toLowerCase()].sort().join('');
  return answer;
}

// console.log(solution('Bcad')); // "abcd"
// console.log(solution('heLLo')); // "ehllo"
// console.log(solution('Python')); // "hnopty"
*/
// ----------------------------------------------------------------------------------------------------------------
// [LV0. 세균 증식]
// <나의 풀이1 > - 재귀함수 이용
function solution(n, t) {
  t -= 1;
  console.log(t);

  if (t === -1) {
    return n;
  }

  return solution(n * 2, t);
}

// <나의 풀이2 > - while문 이용
function solution(n, t) {
  while (t > 0) {
    n *= 2;
    t -= 1;
  }

  return n;
}

// // <다른사람 풀이1> - 거듭제곱 이용
function solution(n, t) {
  return n * Math.pow(2, t);
}

// // <다른사람 풀이2>- 거듭제곱 이용
function solution(n, t) {
  return n * 2 ** t;
}

// console.log(solution(2, 10)); // 2048 // 2*2*
// console.log(solution(7, 15)); // 229,376 (7*1, 7*2 7*3)
// console.log(solution(7, 5)); // 224 (7*1, 7*2 7*3 7*4 7*5)
