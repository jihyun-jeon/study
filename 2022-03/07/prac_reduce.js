// <문제1>
const arr1 = ['A', 'B', 'C', 'A', 'C', 'C'];

function test() {
  return arr1.reduce((acc, cur) => {
    acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
    return acc; // 온전히 그 객체를 리턴해줘야 함.
    // 다음 reduce실행시 본문의 실행결과값이 acc인자에 들어감.
  }, {});
}
// console.log(test());

/*
const obj = {};
console.log((obj.a = 1)); // 1 대입문의 리턴값은 , 대입할 값이 리턴됨.
// console.log(obj); // {a:1}
*/

// ------------------------------------------------------------

// <문제2>
const arr2 = ['A', 'B', 'C', 'A', 'C', 'C'];

const result1 = arr2.reduce(
  (acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }),
  {},
); // 객체의 키값이 변수면 [변수명] 이렇게 써야 함.

// console.log(result1); // {A: 2, B: 1, C: 3}
// ------------------------------------------------------------

// <문제3> 짝수 홀수 구별하는 문제
const arr3 = [3, 7, 22, 42, 17, 24, 13, 1];
const result2 = arr3.reduce(
  (acc, cur) => {
    if (cur % 2) {
      // 홀수
      acc.odd = [...acc.odd, cur];
    } else {
      // 짝수
      acc.even = [...acc.even, cur];
    }
    return acc;
  },
  { even: [], odd: [] },
);

// console.log(result2); // {even: [22, 42, 24], odd: [3, 7, 17, 13, 1]};
// ------------------------------------------------------------

// <문제3-2> 짝수 홀수 구별하는 문제
const arr4 = [3, 7, 22, 42, 17, 24, 13, 1];
const result3 = arr4.reduce(
  (acc, cur) => {
    cur % 2 ? acc.odd.push(cur) : acc.even.push(cur);
    return acc;
  },
  { even: [], odd: [] },
);
console.log(result3); // {even: [22, 42, 24], odd: [3, 7, 17, 13, 1]};
// ------------------------------------------------------------

// <문제4> oo가 들어가있는 단어만 배열에 담도록
const arr5 = ['hello', 'kitty', 'sun', 'moon', 'soon'];

function myFilter(arr, regexr) {
  return arr.reduce((acc, cur) => {
    //
    if (regexr.test(cur)) {
      acc = [...acc, cur];
    }
    //
    return acc;
  }, []);
}

// console.log(myFilter(arr5, /oo/)); // ['moon', 'soon'];
// ------------------------------------------------------------
