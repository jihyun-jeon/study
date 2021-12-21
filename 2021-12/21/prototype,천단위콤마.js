/*
// 문제1. counter 생성자 함수 개발
// 프로퍼티로 count 라는 숫자만듦. 기본값은 0
// plus라는 메서드 있고 실행하면 count값을 +1 씩.
// minus 라는 메서드 있고 실행하면 count -1 인데. 0보다는 작아지지 않게.

function Counter() {
  this.count = 0;
}

Counter.prototype.plus = function () {
  this.count += 1;
  return this.count;
};

Counter.prototype.minus = function () {
  if (this.count === 0) {
    this.count = 0;
  } else {
    this.count -= 1;
  }

  return this.count;
};

// 실행 코드
const c1 = new Counter();

c1.plus();
console.log(c1.count); // 1
c1.minus();
console.log(c1.count); // 0
c1.minus();
console.log(c1.count); // 0;
*/

// 2번 문제 - 천단위 구분콤마 붙여서 출력
// Counter2가 초기값을 받아서. this.count에 저장해야 함
// print() 메서드 실행 시. 문자열을 천단위 콤마 찍어 반환.
function Counter2(cnt) {
  this.count = cnt;
}

Counter2.prototype.print = function () {
  // 방법1.
  // const parts = String(this.count).split(''); // ["3","1","2","0","0"]
  // const arr = []; // [[3,1],[2,0,0]]
  // while (parts.length) {
  //   arr.unshift(parts.splice(-3, 3));
  // }
  // return arr.map((el) => el.join('')).join(','); // ["31","200"];
  //
  // 방법2
  const parts2 = String(this.count).split(''); // ["3","1","2","0","0"]
  let _p = [];
  const result = [];

  for (let i = parts2.length - 1; i >= 0; i -= 1) {
    const item = parts2[i];
    _p.unshift(item);
    if ((i + 1) % 3 === 0) {
      result.unshift(_p);
      _p = [];
    }
  }

  if (_p.length) {
    result.unshift(_p);
  }
  console.log(result); // [[3, 1], [2, 0, 0]];

  //   let str = '';
  //   let arr = [];

  //   for (let i = 0; i < result.length; i += 1) {
  //     const idx = []; // [[3,1],[2,0,0]]
  //     for (let j = 0; j < result[i].length; j += 1) {
  //       idx.push(result[i][j]);
  //     }
  //     arr.push(idx);
  //   }

  // [[3, 1], [2, 0, 0]]

  let str = '';

  for (let i = 0; i < result.length; i += 1) {
    let idx = '';

    for (let j = 0; j < result[i].length; j += 1) {
      idx += result[i][j];
    }
    // (방법1)
    str += `${idx}${i === result.length - 1 ? '' : ','}`;
  }
  // (방법2)
  // str = arr.map((el) => el.join('')).join(',');
  // return str.slice(0, str.length - 1);
  return str;
  // (방법3)
  // return result.map((el) => el.join('')).join(',');

  // 방법3
  // return this.count.toLocaleString(); // number의 메소드임.
};

// 실행코드
const c1 = new Counter2(31200);
console.log(c1.count); // 31200
console.log(c1.print()); // 31,200
