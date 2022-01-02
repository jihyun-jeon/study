// <문제 1. 기간을 나타내는 클래스 Duration을 만드시오>
// 문자 -> Date
function strToDate(str) {
  return new Date(
    new Date().getFullYear(),
    Number(str.slice(0, 2) - 1),
    Number(str.slice(2)),
  );
}
// Date -> 문자
function dateToStr(date) {
  return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(
    2,
    '0',
  )}/${String(date.getDate()).padStart(2, '0')}`;
}

// 생성자 함수
function Duration(date1, date2) {
  this.date1 = strToDate(date1);
  this.date2 = strToDate(date2);
}

// 기간 출력 함수
Duration.prototype.toString = function () {
  const arr = [];
  for (const key in this) {
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      // 설명1 참조 !!!!
      arr.push(dateToStr(this[key]));
    }
  }

  return `${arr[0]} ~ ${arr[1]}`;
};
/*
설명1
for in 으로 순회하면 인스턴스 객체인 d1에 있는 메서드뿐 아니라 프로토타입 객체에 있는 메소드들도 다 나오게 됨.
따라서 Object.prototype.hasOwnProperty().call(this,"date1")을 붙여줘서
그래야 인스턴스 객체의 프로퍼티인 d1의 date1,date2만 순회됨. // d1인스턴스안에 직접적으로 있는 프로퍼티면 true가 됨.

d1.hasOwnProperty(key) 이런식으로 써도 되는데, hasOwnProperty를 생성자함수 안의 프로퍼티객체의 메서드로
직접 구현하는 경우 헷갈리기때문에, call(this)를 써주어 this는 d1이라는걸 명확히 해주는 것임.
call.this = d1이 됨 / key = date1,date2
 d1안에 직접있는 프로퍼티로 date1,2가 있는지 확인하기 위한 것.(프로퍼티객체 안의 메서드는 false가 됨.)
 */

// 문제1 실행코드
// const d1 = new Duration('0305', '0502'); // {date1: 2021.03.05 , date2: 2021.05.02}
// console.log(String(d1)); // 2021/03/05 ~ 2021/05/02;

// ----------------------------------------------------------------------------------------
// <문제 2. 두 개의 Duration인스턴스의 겹치는 날짜가 있는지 true,false로 출력 >
/* <두 날짜를 비교하는 법>
: >,< 연산자를 사용하면 암묵적으로 valueOf()가 호출되어 초로 숫자가 나오게 됨.
const a = new Date(2021, 0, 1);
const b = new Date(2021, 0, 2);

console.log(a.getTime() > b.getTime()); // false
console.log(a > b); // 같은것임 - 자동으로 valueOf()가 호출되어 계산됨
console.log(a.getTime() < b.getTime()); // true
console.log(a < b);
console.log(a.getTime() === b.getTime()); // false
console.log(a === b);
*/

Duration.prototype.isIntersect = function (otherDate) {
  if (
    (this.date2 > otherDate.date1 && this.date1 < otherDate.date2) ||
    (this.date1 < otherDate.date2 && this.date2 > otherDate.date1)
  ) {
    return true;
  }
  return false;
};

// 문제2 실행코드
const d1 = new Duration('0302', '0305'); // {date1: new Date(), date2: new Date()}
const d2 = new Duration('0304', '0308'); // {date1: new Date(), date2: new Date()}
const d3 = new Duration('0502', '0508');
const d4 = new Duration('0101', '0102');

// console.log(d1.isIntersect(d2)); // true
// console.log(d1.isIntersect(d3)); // false
// console.log(d1.isIntersect(d4)); // false
// console.log(d2.isIntersect(d3)); // false
// console.log(d2.isIntersect(d4)); // false
// console.log(d3.isIntersect(d4)); // false

// <문제3 - 겹치는 구간의 날짜를 출력하시오.>
Duration.prototype.intersection = function (otherDate) {
  if (!this.isIntersect(otherDate)) {
    return null;
  }
  const startDate = Math.max(this.date1.getTime(), otherDate.date1.getTime()); // 1614783600000
  const endDate = Math.min(this.date2.getTime(), otherDate.date2.getTime()); // 1614870000000

  const d1 = dateToStr(new Date(startDate)); // 질문1)어떻게 저 숫자가 new Date()로 날짜로 만들어 지는지?
  const d2 = dateToStr(new Date(endDate));
  return `${d1} ~ ${d2}`;
};

// 문제3 실행코드
const d1to2 = d1.intersection(d2);
console.log(d1to2); // 2021/03/04 ~ 2021/03/05

const d1to3 = d1.intersection(d3);
console.log(d1to3); // null;
