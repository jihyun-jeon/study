// <CALLBACK HELL>
// document.addEventListener('load', (e) => {
//   window.setTimeout((d) => {
//     window.setTimeout((x) => {
//       // callback hell
//     }, 1000);
//   }, 1000);
// });

// document.addEventListener('load', () => {});

// <PROMISE>
// :미래에 어떤 "하나의 값"을 받을 수 있음을 보장하는 인터페이스.
// :프로미스는 하나만 기억함, 따라서 resolve와 then안에는 하나의 값만 들어갈 수 있음.
// resolve(num , result) <-이렇게 안됨.

/* <mdn 예제> */
/*
const myFirstPromise = new Promise((resolve, reject) => {
  // 우리가 수행한 비동기 작업이 성공한 경우 resolve(...)를 호출하고, 실패한 경우 reject(...)를 호출합니다.
  //  new Promise((resolve, reject) 인자 이름은 아무거나 상관없고, 인자순서에 따라 resolve() reject()를 호출하는 것임.
  // 실제로는 여기서 XHR이나 HTML5 API를 사용할 것입니다.
  setTimeout(
    () => resolve('성공!'), // 와! 문제 없음!
    250,
  );
});

myFirstPromise.then((successMessage) => {
  // successMessage는 위에서 resolve(...) 호출에 제공한 값입니다.
  console.log('와! ' + successMessage);
});
*/

/* <new promise 예시> : 1초 뒤에 hello world2 출력, 또 1초 뒤에 hello world5 출력 */
// function helloWorld(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hello world' + num), 1000);
//   });
// }

// helloWorld(2)
//   .then((str) => {
//     console.log(str); // 'hello world 2'

//     return helloWorld(5);
//   })
//   .then((str) => console.log(str)) // 'hello world 5'
//   .catch((err) => {
//     console.error(err);
//   });

/* <문제1> */
// ex1. 1초마다 1, 2, 3, 4, 5 를 출력하는 코드를 작성하시오.

// function helloWorld2(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(num), 1000);
//   });
// }

// helloWorld2(1)
//   .then((str) => {
//     console.log(str); // 'hello world 2'

//     return helloWorld2(2);
//   })
//   .then((str) => {
//     console.log(str);
//     return helloWorld2(3);
//   })
//   .then((str) => {
//     console.log(str);
//     return helloWorld2(4);
//   })
//   .then((str) => {
//     console.log(str);
//     return helloWorld2(5);
//   })
//   .then((str) => {
//     console.log(str);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

/* 문제2 */
// ex2. 1초마다 1, 12, 123, 1234, 12345, 출력 고고

// function hamsu(num, result) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(num + result), 1000);
//   });
// }
// 프로미스는 하나만 기억함, 따라서 resolve와 then안에는 하나의 변수만 들어갈 수 있음.
// resolve(num , result) <-이렇게 안됨.

// hamsu(1, "")
//   .then((str) => {
//     console.log(str); // 1

//     return hamsu(str, "2");
//   })
//   .then((str) => {
//     console.log(str);
//     return hamsu(str, "3");
//   })
//   .then((str) => {
//     console.log(str);
//     return hamsu(str, "4");
//   })
//   .then((str) => {
//     console.log(str);
//     return hamsu(str, "5");
//   })
//   .then((str) => {
//     console.log(str);
//   });

/* 문제3 */
// ex3. 인자로 넘어온 함수의 결과를 보고. 식이 정상이면 결과를,
// 비정상이면 값(value)와 이유(reason)을 반환하는 함수 calc를 만드시오

// function calc(some) {
//   return new Promise((resolve, reject) => {
//     const s = some();

//     if (s === Infinity) {
//       reject({ value: s, reason: '0으로 나눌 수 없습니다' });
//     } else if (isNaN(s) || typeof s === 'string') {
//       reject({ value: s, reason: '올바른 계산식이 아닙니다' });
//     }
//     if (isFinite(s)) {
//       // infinite도 자료타입이 number임 . 따라서 typeof로 구분이 안되고 isfinite 활용해야 함.
//       resolve(s);
//     }
//   });
// }

// calc(() => 3 + 5).then((res) => console.log(res)); // 8
// calc(() => 6 / 0).catch((err) => {
//   console.log(err.value); // Infinity
//   console.log(err.reason); // 0으로 나눌 수 없습니다
// });
// calc(() => 'a' * 15).catch((err) => {
//   console.log(err.value); // NaN
//   console.log(err.reason); // 올바른 계산식이 아닙니다
// });
// calc(() => '3' + '5').catch((err) => {
//   console.log(err.value); // '35'
//   console.log(err.reason); // 올바른 계산식이 아닙니다
// });

/* <4.19일 문제 - n초 후에 글자 출력하고, 0초면 에러나게 하기 >  */
// 설명1) 3초 후에 promise가 fulfilled 됨. 이후 then() 실행됨.
// resolve는 promise 함수 안에 쓰이고, resolve함수를 호출 함으로써 프로미스가 fullfilled가 되는 것임.
// 설명2) reject, resolve 호출할 때 안에 정보가 있어야 그 정보가 프로미스되서 그 정보가 보여짐.
function hello(second, idx) {
  return new Promise((res, rej) => {
    if (second === 0) {
      rej('err');
      return;
      // rej 방법2 - throw new Error('errr'); <- return 안써도 밑에 안읽힘.
    }
    setTimeout(() => {
      res(idx);
    }, second * 1000);
  });
}
// hello(3, 'world').then((d) => console.log(d));
hello(0, 'world').catch((d) => console.log(d));

/* [p] <둘이 다른것임> */
// 1.Promise의 executor함수의 인자인 res,rej는 이름만 붙인거지 실제로 resolve메서드는 아님. 그냥 자동으로 이렇게 실행되는 것임.
//  executor의 첫번째 인자가 resolve 함수인 것임.(executor의 첫번째 "인자 자체가" 함수인 것임!)
new Promise((res) => res(3));

// 2. 프로미스를 처음부터 fullfiled 상태로 만들때 쓰는 resolve는 진짜 프로미스의 메서드임! (static method) // 실무에선 별로 안씀
Promise.resolve(3);

/* <이벤트루프> 공부하기
: timer - event loop의 관계를 공부
*/
// :  https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop
