/** 문제1. 날짜 두개를 받아 두 날짜가 같은지 비교하는 함수를 만드시오. */
/*
function myFunction2(a, b) {
  console.log(a - b !== 0);
  // a-b : 이 되는 이유
  // valueOf(): 객체를 연산자랑 활용해서 쓰면, valueOf메서드가 있는 것이라면 이 메소드가 자동으로 실행됨
  // (Date 프로토타입 객체에 valueOf 메서드가 이미 구현되있음.)
  // a.valueOf() - b.valueOf() 가 자동으로 호출되는 것임
  //
  // getTime(): 이 메서드를 사용하여 숫자로 반환해도 됨.
  // return a.getTime() - b.getTime() === 0;
}

myFunction2(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')); // false
myFunction2(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')); // true
myFunction2(new Date('2010/01/01 08:00:00'), new Date('2000/01/01 08:00:00')); // false

// *** 객체를 문자열과 연산할때 또는 객체를 문자열로 변환할땐 toString()이 호출됨
const a = {} + ''; // toSting()
const a = String({}); // toSting()
// *** 객체를 원시값과 연산하거나 또는 원시값으로 변환할땐, valueOf()가 호출됨
const a = {} + 3; // valueOf()
const a = {}+3; {}-3; {}*3; {}/3; {}>3; {} <3; 등.. 연산자
const a = {} + {}; // valueOf()
*/

/** 연습문제1 */
/*
function TodoItem(todo, hourObj) {
  this.todo = todo;
  this.hourObj = hourObj;
}

TodoItem.prototype.toString = function () {
  return `${this.todo}(${this.hourObj.hours}시간 소요)`;
};

TodoItem.prototype.valueOf = function () {
  return this.hourObj.hours;
};

// 실행코드
const t1 = new TodoItem('장보기', { hours: 2 });
// console.log(t1); // {todo: '장보기', hourObj: {hours: 2}
// console.log(t1 + ''); // t1.toString()이 호출됨 // 장보기 (2시간 소요)
const t2 = new TodoItem('요리하기', { hours: 1.5 });
// console.log(t2 + ''); // t2.toString()이 호출됨 // 요리하기 (1.5시간 소요)
const t3 = new TodoItem('코인빨래', { hours: 0.2 });
console.log(t1 + t3); // t1.valueOf() + t3.valueOf();  // 2.2
*/

/** 연습문제2 */
/*
function TodoList() {
  this.list = [];
}

TodoList.prototype.push = function (a, b, c) {
  this.list.push(a, b, c);
};

TodoList.prototype.toString = function () {
  let str = '';
  let result = 0;
  for (let el of this.list) {
    // el(t1) = {todo: '장보기', hourObj: {hours: 2}
    str += String(el); // t1의 메서드로 등록해논 string()이 호출됨.
    result += result + el; // t1의 메서드로 등록해논 valueOf()가 호출됨.
    // str += `${el.todo} (${el.hourObj.hours}시간 소요),`;
    // result += +el.hourObj.hours;
  }
  return `${str} 총합:${result}`;
};

TodoList.prototype.valueOf = function () {
  let result = 0;
  for (let el of this.list) {
    result += +el.hourObj.hours;
  }
  return result;
};
// 실행코드
const list = new TodoList();
list.push(t1, t2, t3); // list = [{todo: '장보기', hourObj: {hours: 2}, {}, {}]
console.log(String(list));
//   장보기 (2시간 소요), 요리하기 (1.5시간 소요), 코인빨래 (0.2시간 소요), 총합: 3.7
console.log(0 + list); // 3.7;
*/

/** 문제1 기간구하는 클래스 설계 */
/*
function Duration(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Duration.prototype.toString = function () {
  const bDate = `${this.b.getFullYear()}/${
    this.b.getMonth() + 1
  }/${this.b.getDate()}`;
  const cDate = `${this.c.getFullYear()}/${
    this.c.getMonth() + 1
  }/${this.c.getDate()}`;
  console.log(bDate);
  return `${this.a} (${bDate} ~ ${cDate})`;
};

Duration.prototype.valueOf = function () {
  return this.c.getDate();
};

// 실행코드
const d1 = new Duration(
  '2021년 1월',
  new Date(2021, 0, 1),
  new Date(2021, 0, 31),
);
console.log(d1); // {a:a, b:b, c:c}
console.log(String(d1)); // 2021년 1월 (2021/01/01 ~ 2021/01/31)
console.log(0 + d1); // 31

const d2 = new Duration(
  '2021년 2월',
  new Date(2021, 1, 1),
  new Date(2021, 1, 28),
);
console.log(d1 + d2); // 31+ 28 => 59
*/
