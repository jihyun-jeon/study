// 방법3 - entries, 정규식 활용
function solution(s) {
  const charSet = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let [key, value] of Object.entries(charSet)) {
    const re = new RegExp(key, 'g'); // <-new RegExp로 정규식 쓸땐 모든 인자를 문자로 "g"이렇게 써야 함.
    s = s.replace(re, value);
  }
  return parseInt(s, 10);
  // parseInt는 기수(radix)(10진수)를 2번째 인자에 항상 넣어줘야 함, 안넣어주면 2진수로 변환되서 출력되는 경우가 있어서.
}

// console.log(solution('oneone4seveneight')); // 1478
// console.log(solution('23four5six7')); // 234567
// console.log(solution('2three45sixseven')); // 234567
// console.log(solution('1zerozero')); // 100
// console.log(solution('sevenoneonesixsix')); // 1166
// ---------------------------------------------------------------------------

// 공부
// <split, join>
// let txt = 'oneone234';
// txt = txt.split('one'); // ["","","234"]
// txt.join(1); // 11234

// <entries>
