// <09.30일 문제복습> 57,87번 질문!

/*
// 문제0: 숫자 배열을 받아 합하여 반환하는 함수를 만드시오
// sum([1, 2, 3]); // 6
// sum([0, 3, 5]); // 8

function sum(arr) {
  const result = arr.reduce((a, b) => a + b);
  console.log(result);
}

sum([1, 2, 3]); // 6
sum([0, 3, 5]); // 6
*/

/*
// 문제1. reduce를 활용하여 배열 복사하기 (깊은 복사 됨.)
function arr1(arr) {
  const result = arr.reduce((a, b) => [...a, b], []);
  return result;
}

const arr = [4, 8, 12];
console.log(arr1(arr));
*/

/*
// 문제1-1. reduce를 활용하여 이름이 세글자인 것만 배열로 반환하시오.
const userList = [
  { name: 'Mie,', age: 30 },
  { name: 'Tom', age: 20 },
  { name: 'Jane', age: 14 },
  { name: 'Sue', age: 75 },
  { name: 'Harry', age: 35 },
];

const nameResult = userList.reduce((prev, obj) => {
  if (obj.name.length === 3) {
    prev.push(obj.name);
  }
  return prev;
}, []);
console.log(nameResult);
*/

/*
// 문제 1-2. reduce를 활용하여 나이가 30 미만인 것의 합을 구하시오.
const userList = [
  { name: 'Mie,', age: 30 },
  { name: 'Tom', age: 20 },
  { name: 'Jane', age: 14 },
  { name: 'Sue', age: 75 },
  { name: 'Harry', age: 35 },
];

const ageResult = userList.reduce((acc, cur) => {
  if (cur.age < 30) {
    return acc + cur.age; // 조건에 맞을경우 콜백함수의 리턴값은 이거
  }
  return acc; // 조건에 맞지 않을 경우 콜백함수의 리턴값은 여기서 반환
}, 0);

console.log(ageResult);
*/

/*
// 문제2: 숫자가 아닌 값을 제외한 값의 합을 구하시오.
// sum([1, 2, 3, "a"]); // 6
// sum([3, true, 5]); // 8

function sum(arr) {
  const result = arr.reduce((acc, cur) => {
    if (typeof cur === 'number') {
      return acc + cur;
    }
    return acc; // 콜백함수의 리턴값
  }, 0);
  return result; // sum함수의 리턴값
}

console.log(sum([1, 2, 3, 'a'])); // 6
console.log(sum([3, true, 5])); // 8
*/

//-------------------------------------------------------------------
/*
// 문제4-함수가 배열을 받는데, 문자를 반환한다. 숫자면 합산, 문자는 이어붙임, (숫자는 앞쪽에 문자는 뒤에 붙임)
// sum=[1, "a", 2, "b", 3];      //6ab

function sum(arr) {
  let num = 0;
  let idx = '';

  arr.forEach((el) => {
    if (typeof el === 'number') {
      num += el;
    }
    if (typeof el === 'string') {
      idx += el;
    }
  });
  return num + idx;
}
console.log(sum([1, 'a', 2, 'b', 3]));
*/

/*
// 문제5- 숫자를 받아서 그 숫자만큼 문자만큼 표시해라, 피라미드형으로
function piramid(num) {
  let idx = '';

  if (num <= 0) {
    return;
  }

  for (let i = 1; i <= num; i += 1) {
    idx += 'a';
    console.log(idx);
  }
}
// piramid(3)
// a
// aa
// aaa
piramid(3);
*/

/*
// 문제6- 문제5 피라미드를 꺼꾸로
function piramid2(num) {
  for (let i = num; i > 0; i -= 1) {
    let result = '';

    for (let j = 0; j < i; j += 1) {
      result += 'a';
    }
    console.log(result);
  }
}

piramid2(3);
// aaa
// aa
// a
*/

//-------------------------------------------------------------------------------------------

// <10.01일 문제>
// 문제1. 연산 구분 문자열과 숫자 두개를 받아 계산해주는 함수를 만들어 보자.
// calc('add', 1, 5);  //6
// calc('minus', 3, 3);  //0
// calc('multiply', 3, 6); //18
// calc('divide', 4, 2);  //2
// calc('multiply', calc'('add', 1, 6), 2);  //14

function calc(some, a, b) {
  let result = '';
  switch (some) {
    case 'add':
      result = a + b;
      break;
    case 'minus':
      result = a - b;
      break;

    default:
      result = a * b;
      break;
  }
  return result;
}

console.log(calc('add', 1, 5)); // 6
console.log(calc('minus', 4, 3)); // 1
console.log(calc('multiply', calc('add', 1, 6), 2)); // 14
