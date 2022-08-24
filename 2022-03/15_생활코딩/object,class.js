// 생활코딩 강의내용
// <생성자 함수 Constrictor function >
function Generator(name, a, b) {
  this.name = name;
  this.first = a;
  this.second = b;
}

// 메소드는 따로 프로토타입 객체에 넣어줌
// (이 메소드는 객체가 만들어질 때 마다 생성되진 않게됨. 따라서 메모리 절약됨.)
// 모든 인스턴스 객체가 이 메서드를 공유하게 됨.
Generator.prototype.sum = function () {
  return this.first + this.second;
};

// 실행1
const o1 = new Generator('jihyun', 1, 2);

// console.log(o1.name);
// console.log(o1.sum()); // 3

// 실행2
const o2 = new Generator('min', 5, 4);
// o2의 sum메서드는 다르게 동작하고 싶으면 o2의 인스턴스 객체에 써줌
// (인스턴스 객체를 먼저 찾아보고 없으면 -> 프로토타입 객체를 찾아보게 되는 것임.)
o2.sum = function () {
  return `other : ${this.first - this.second}`;
};

// console.log(o2.name);
// console.log(o2.sum()); // 1

// //////////////////////////////////////////////////////////

// < class >
class Generator2 {
  constructor(name, a, b) {
    this.name = name;
    this.first = a;
    this.second = b;
  }

  sum = function () {
    return this.first + this.second;
  };
}

// 실행1
const gtwo1 = new Generator2('jihyun', 1, 2);
// console.log(gtwo1);
// console.log(gtwo1.sum()); // 3

// 실행2
const gtwo2 = new Generator2('min', 5, 6);
// gtwo2에만 다른 메서드를 넣어 준다면
gtwo2.sum = function () {
  return `other : ${this.first + this.second}`;
};
// console.log(gtwo2.sum()); // other : 11

// //////////////////////////////////////////////////////////

// < 상속 >
// 1.부모 클래스
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum() {
    return this.first + this.second;
  }
}

// 2.자식 클래스 - 부모 생성자 함수의 기능을 기본적인 전제로 함.
class PersonPlus extends Person {
  // suepr - 부모가 이미 갖고있는 기능을 자식함수에서 실행할 수 있게됨.
  // 1)suepr() : 를 통해 부모클래스의 프로퍼티를 갖고옴. 이후 자식에서 추가하고 싶은 프로퍼티만 추가하면 되게 됨.
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }

  // 2)super.메서드() : 부모클래스에 있는 sum메서드를 실행 한 결과가 들어가게 됨.
  sum() {
    return super.sum() + this.third;
  }

  average() {
    return (this.first + this.second + this.third) / 3;
  }
}

// 실행1
const plus1 = new PersonPlus('min', 1, 2);
// console.log(plus1.sum()); // 3 // 상속에 됐기 떄문에 Person함수를 쓸 수 있음.
// console.log(plus1.average()); // 1.5

// 실행2
const plus2 = new PersonPlus('min', 1, 2, 3);
// console.log(plus2);
// console.log(plus2.sum()); // 6
// console.log(plus2.average()); // 2

// ////////////////////////////////////////////////////////////////////
/* < 프로토타입 상속: 1)비표준: .__proto__  2)Object.setprototypeOf() 3)Object.create()  > */
// (( 예제1 -간단한 예 ))
const superObj = { superVal: '1super' };
const subObj = { subVal: '2sub' };
subObj.__proto__ = superObj; // subObj가 프로토타입 링크로 superObj를 상속받음

// 실행
// console.log(subObj.subVal); // 2sub
// console.log(subObj.superVal); // 1super

subObj.superVal = 'other';
// console.log(subObj.superVal); // other

// (( 예제2 - 정식 예 ))
function Animal(name, act) {
  this.name = name;
  this.act = act;
}

Animal.prototype.move = function () {
  return `move ${this.act}`;
};

function Human(name, act) {
  this.name = name;
  this.act = act;
}

Human.prototype.walk = function () {
  return `walk ${this.act}`;
};

const ani1 = new Animal('dog', 'fast');
// console.log(ani1.move()); // move fast

const hu1 = new Human('jihyuni', 'slowly');
// console.log(hu1.walk()); // walk slowly

// 프로토타입 상속 -방법1 : 상속받는 객체 .__proto__= 상속하는 객체
// Human.prototype.__proto__ = Animal.prototype;
// console.log(hu1.move()); // move slowly

// 프로토타입 상속 - 방법2 : Object.setPrototypeOf(상속받는 객체 ,상속하는 객체 )
// Object.setPrototypeOf(Human.prototype, Animal.prototype);
// console.log(hu1.move()); // move slowly
// console.log(hu1.name); // jihyuni

// 프로토타입 상속 - 방법3 : Object.create()
Human.prototype = Object.create(Animal.prototype);
// console.log(Human.prototype.move()); // move
// console.log(hu1.constructor); // Human
// Human.prototype.constructor = Human;

// <프로토타입 체인>
// : 1.자신의 인스턴스 객체 -> 2.자신의 프로토타입 객체 -> 3.부모클래스의 프로토타입 객체 -> 4.Object생성자 함수의 프로포타입 객체 순으로 찾게됨.

// ////////////////////////////////////////////////////////////////////

// <Object.create()> : 위 __proto__ 에서 쓴 것을 create()로 만드는 법
const superObj1 = { superVal: '1super' };
const subObj1 = Object.create(superObj1);
// 1)superObj1를 prototype으로 갖는 새로운 객체를 만들어줌.
// subObj(자식객체)  프로토타입 링크--> superObj(부모 객체)
subObj1.subVal = '2sub';
// 2)subOj1 객체에 프로퍼티를 넣어줌

// 실행
// console.log(subObj1.subVal); // 2sub
// console.log(subObj1.superVal); // 1super

/*
object.create() :인자로 넘어온 객체에 __proto__로 연결된 객체로 만들어 반환됨. (subObj(자식객체)  프로토타입 링크--> superObj(부모 객체))
object.setprototypeof(객체1,객체2): 객체1의 prototype과 객체2의 prototype를 proto link로 연결하는 것.
*/

// ////////////////////////////////////////////////////////////////////

// <Object.create() 예제코드2>
// const kim = {
//   name: 'kim',
//   first: 10,
//   second: 20,
//   sum: function () {
//     return this.first + this.second;
//   },
// };

// kim을 프로토타입 링크로 하는 객체 lee를 새로 만들고, average메소드를 새로 추가함.
// const lee = Object.create(kim);
// lee.average = function () {
//   return (this.first + this.second) / 2;
// };

// console.log(lee.average()); // 15

// ////////////////////////////////////////////////////////////////////

// < apply, call, bind >

const Kim = { name: 'Kim', first: 10, second: 20 };
const Lee = { name: 'lee', first: 30, second: 40 };
function sum(prefix) {
  return prefix + (this.first + this.second);
}

// apply, call : 함수가 "실행할 때", this를 바꾸는 것
// console.log(sum.call(Kim, '=>')); // => 30
// console.log(sum.apply(Lee, ['-->'])); // --> 70

// bind : 아예 함수의 this를 다른 객체로 고정시켜버린 "새로운 함수"가 만들어짐.
const KimSum = sum.bind(Kim, '000 '); // bind는 함수가 실행되진 않고, 새로운 함수를 반환함.
// console.log(KimSum()); // 000 30

// ////////////////////////////////////////////////////////////////////

// < constructor >
// 인스턴스 객체가 어느 생성자 함수에서 만들어졌는지 알 수 있음.
// 어떤 객체가 누구로부터 만들어졌는지 알 수 있게됨.
function Gen(name) {
  this.name = name;
}

const gg1 = new Gen('jiji');
console.log(gg1.constructor); // ƒ Gen(name) {}
