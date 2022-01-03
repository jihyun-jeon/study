// 1. map 함수를 구현하시오.
const numbers = [1, 2, 3];

// 입력
function map(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(fn(arr[i]));
  }
  return result;
}

const doubles = map(numbers, (number) => {
  return number * 2;
});

console.log(doubles); // [2, 4, 6]

// 2. bing 함수를 call,apply만 가지고 구현하시오 ★★★★★
// *this는 호출 형태에 따라 this가 달라진다.
// 1)bind함수만 입력
function bind(fn, obj) {
  return function () {
    fn.apply(obj); // 2)리턴하는 함수를 실행하면, log함수가 실행하는데 log함수의 this를 obj으로 설정해 줘야함.
  };
}

function log() {
  console.log(this);
}

const log2 = bind(log, { txt: 'hello world' }); // 1.bind함수를 함수를 리턴해야 함

log2(); // {txt: 'hello world'}

// 2)응용
function bind(fn, obj) {
  return function (num) {
    obj.txt += num;
    fn.apply(obj);
  };
}

function log() {
  console.log(this);
}

const log2 = bind(log, { txt: 'hello world' });

log2(1); // {txt: 'hello world1'}
