// <03.19>
// <축약형>
// * 1.프로퍼티 축약형 *
// 1) 객체의 키와 값의 명이 같으면 하나로 생략하여 쓸 수 있음.
// 1) 예제-1.프로퍼티값으로 사용할 변수나 함수의 이름이, 프로퍼티키로 사용할 이름과 같다면 중복해서 그 이름을 두 번 작성하지 않고, 하나만 작성 가능함.
const title = 'festival';
const birth = '0207';
const job = 'dev';
function getFullName() {
  return 'JiHyun-Jeon';
}
const user = {
  title, // title : title
  birth, // birth : birth
  job, // job : job
  getFullName,
};
// console.log(user.birth); // "0207"
// console.log(user.getFullName()); //JiHyun-Jeon

// 1) 예제-2. getFullName 메소드를 객체 내부에서 선언하는데, 프로퍼티키와 값으로 사용할 함수이름이 같다면, 프로퍼티키와 값의 "funtion"키워드 생략가능함.
const user22 = {
  firstName: 'Jihyun',
  lastName: 'jeon',
  getFullName() {
    // getFullName : funtion getFullName(){} <-축약
    return `${this.firstName}-${this.lastName}`;
  },
};
// console.log(user22.getFullName()); // Jihyun-jeon

// 2) 표현식을 []로 감싸주면 프로퍼티명을 표현식의 값으로 쓸 수 있음.
// 2) 예제1
const propertyName = 'year';
const getJob = () => {
  return 'Job';
};

const obj2 = {
  ['topic' + 'Name']: 'JavaScript',
  [propertyName]: '2022',
  [getJob()]: 'developer',
};
// console.log(obj2); // {topicName: 'JavaScript', year: '2022', Job: 'developer'}
// /////////////////////////////////////////////////////////////////////////////////

// * <null 병합 연산자> ??  *
// :왼편의 값이 null 이나 undefined가 아니라면, 연산자 "왼편의 값"이 리턴되고,
//  연산자 왼편의 값이 null 이나 undefined라면, 연산자 "오른편의 값"이 리턴됨.
//  둘다 null, undifined면 null, undifined 출력됨.
const example1 = null ?? 'I'; // I
const example2 = undefined ?? 'love'; // love
const example3 = 'Codeit' ?? 'JavaScript'; // Codeit

// console.log(example1, example2, example3); // I love Codeit

// * <옵셔널 체이닝> ?. *
// user.cat이 undefined 또는 null이 아니라면, 그다음 프로퍼티 값(user.cat.name)을 리턴하고
//  user.cat이 undefined 또는 null이라면, undefined(user.cat)를 반환하는 문법입니다.
const user12 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  },
};

function printCatName(user) {
  console.log(user.cat?.name);
}

// console.log(printCatName(user12)); // Crew

// * < ?? 와 ?. 응용> *
const user123 = {
  name: 'Captain',
  dog: {
    name: 'Crew',
    breed: 'British Shorthair',
  },
};

function printCatName2(user) {
  console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다.');
}

// printCatName2(user123);
// 1. user.cat?.name  => undifined
// 2. 때문에 '함께 지내는 고양이가 없습니다.' 출력!

// /////////////////////////////////////////////////////////////////////////////////
// * < 구조분해(Destruncturing) > *
// <배열 - 구조분해>
// 1.배열의 값을 분해해서 변수에 하나씩 할당하는 것임
// 1-1.예제
const alpha = ['a', 'b', 'c'];

const [A1] = alpha;
// console.log(A1); // "a"

const [A2, B2] = alpha; // "a","b"
// console.log(A2, B2);

const [, B3] = alpha;
// console.log(B3); // "b"

const [, , C] = alpha;
// console.log(C); // "c"

// 1-2.예제
const rank = ['susu', 'micall', 'nako', 'jim', 'bab'];
const [macbook, ipad, airpods, coupon, candy] = rank;
// console.log(macbook, candy); // susu bab

// 1-3.예제 : rest파라미터 처럼 마지막 변수에 ... 을 쓰면 나머지값을 변수로 모아서 받을 수 있음.
const rank2 = ['susu', 'micall', 'nako', 'jim', 'bab'];
const [macbook2, ipad2, ...candy2] = rank2;
// console.log(macbook2, ipad2, candy2); // susu ,micall, ['nako', 'jim', 'bab']

// 1-4.예제 : 두 변수의 값을 바꿀때 유용하게 사용할 수 있음.
let winner = ['jihyun'];
let loser = ['minhyung'];

[winner, loser] = [...loser, ...winner];
// console.log(winner, loser); // winner = minhyung  , loser = jihyun

// /////////////////////////////////////////////////////////////////////////////////
// <객체 - 구조분해>
// 프로퍼티 이름만 맞으면 순서 상관없이 변수로 만들어짐.
const macbookPro = {
  macTitle: '맥북 프로 16형',
  macPrice: 3690000,
  macMemory: '16GB',
  macStorage: '1TB',
  macDisplay: '16형 디스플레이',
};

// -1) 기본예제
// const { macTitle, macMemory } = macbookPro;
// console.log(macTitle, macMemory); // 맥북 프로 16형 , 16GB

// -2) 기본값 설정
// const { macTitle, macColor = 'gray' } = macbookPro;
// console.log(macTitle, macColor); // 맥북 프로 16형 , gray

// -3) rest파라미터 이용
// const { macTitle, ...rest } = macbookPro;
// console.log(macTitle, rest); // 맥북 프로 16형 , {macPrice: 3690000, macMemory: '16GB', macStorage: '1TB', macDisplay: '16형 디스플레이'}
// console.log(rest.macPrice); // 3690000

// -4) 프로퍼티 키와 다른 이름인 변수에 저장하는 법.
// 구조분해할당으로 받은 변수인 macTitle의 이름을 macProduct으로 변경하기 위해, :macProduct 사용함.
// const { macTitle: macProduct } = macbookPro;
// console.log(macProduct); // 맥북 프로 16형

// -5) 중첩 구조분해
// 대입 연산자 좌측의 패턴은, 정보를 추출하려는 우측 객체(options)와 같은 구조를 갖추고 있습니다.
const boxOptions = {
  boxSize: {
    boxWidth: 100,
    boxHeight: 200,
  },
  boxItems: ['Cake', 'Donut'],
  boxExtra: true,
};

// 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
// const {
//   boxSize: {
//     // boxSize는 여기,
//     boxWidth,
//     boxHeight,
//   },
//   boxItems: [item11, item22], // boxItems는 여기에 할당함
//   boxTitle = 'Menu', // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
// } = boxOptions;

const {
  boxTitle = 'Menu',
  boxSize: { boxWidth, boxHeight },
  boxItems: [item11, item22],
} = boxOptions;

// console.log(boxTitle); // Menu
// console.log(boxWidth); // 100
// console.log(boxHeight); // 200
// console.log(item11); // Cake
// console.log(item22); // Donut

// 6) 함수 매개변수에 사용
function printWinner([macbookPro2, ipad22, airPods2, ...coupons]) {
  console.log(`맥북의 주인공은 ${macbookPro2}님`);
  console.log(`아이패드의 주인공은 ${ipad22}님`);
  console.log(`에어팟의 주인공은 ${airPods2}님`);
  console.log(`그 외 쿠폰 당첨자 ${coupons.length}명`);
}

const rank11 = ['sujan', 'bab', 'mim', 'jun', 'cris', 'nunu'];
// printWinner(rank11);
