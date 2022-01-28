// // 1.json형식으로 response값이 나옴
// fetch('https://learn.codeit.kr/api/members') // <-옵션객체 없으면 기본적으로 get request로 실행됨
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });

// // 2.그 중 3번째 멤버에 대한 정보만 요청함
// fetch('https://learn.codeit.kr/api/members/3')
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });

// 3.POST request - 새로운 사원정보를 추가함
// const newMember = {
//   name: '져닝',
//   email: 'jhplus13@naver.com',
//   department: 'FE',
// };

// fetch('https://learn.codeit.kr/api/members', {
//   // <= <옵션객체>(설정해주지 않으면 자동으로 get request로 작동됨)
//   method: 'POST',
//   body: JSON.stringify(newMember), // <-자바스크립트를 json형태로 바꾸는 법
// });

// // 4.PUT request - Alice의 부서 marketing으로 수정하기
// const member = {
//   name: 'Alice',
//   email: 'alice@naver.com',
//   department: 'marketing',
// };
// fetch('https://learn.codeit.kr/api/members/2', {
//   method: 'PUT',
//   body: JSON.stringify(member),
// })
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });

// // 5.DELETE request -  Alice 사원정보 삭제
// fetch('https://learn.codeit.kr/api/members/2', {
//   method: 'DELETE',
// })
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });

// 6. 신입사원 정보 중 pass인 사원들의 정보를, 기존 직원정보에 추가하기
// https://learn.codeit.kr/api/interviews/summer - 신입사원 정보
// https://learn.codeit.kr/api/members - 기존 직원

// fetch('https://learn.codeit.kr/api/interviews/summer')
//   .then((res) => res.json())
//   .then((result) => {
//     const updata = result.interviewees.filter((el) => el.result === 'pass');
//     return fetch('https://learn.codeit.kr/api/members', {
//       method: 'POST',
//       body: JSON.stringify(updata),
//     });
//   });

// 7.
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     // return response.json(); // <- Case(1)  콜백에서 Promise 객체를 리턴
//     // return 10; // <- Case(2) : 콜백에서 Promise 객체가 아닌 일반적인 값을 리턴
//     // <- Case(3): 콜백에서 아무것도 리턴하지 않음
//     throw new Error('failed'); // <- Case(4): 콜백 실행 중 에러 발생
//   })
//   .then((result) => {
//     console.log(result);
//   });

//----------------------------------------------------------------
// 문제0.
/*
function helloWorld(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello world" + num), 1000);
  });
}

helloWorld(2)
  .then((str) => {
    console.log(str); // 'hello world 2'

    return helloWorld(5);
  })
  .then((str) => console.log(str)) // 'hello world 5'
  .catch((err) => {
    console.error(err);
  });
*/

// 문제1
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

// 문제2
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

// 문제3
// ex3. 인자로 넘어온 함수의 결과를 보고. 식이 정상이면 결과를,
// 비정상이면 값(value)와 이유(reason)을 반환하는 함수 calc를 만드시오
/*
function calc(some) {
  return new Promise((resolve, reject) => {
    const s = some();

    if (s === Infinity) {
      reject({ value: s, reason: "0으로 나눌 수 없습니다" });
    } else if (isNaN(s) || typeof s === "string") {
      reject({ value: s, reason: "올바른 계산식이 아닙니다" });
    }
    if (isFinite(s)) {
      //infinite도 자료타입이 number임 . 따라서 typeof로 구분이 안되고 isfinite 활용해야 함.
      resolve(s);
    }
  });
}

calc(() => 3 + 5).then((res) => console.log(res)); // 8
calc(() => 6 / 0).catch((err) => {
  console.log(err.value); // Infinity
  console.log(err.reason); // 0으로 나눌 수 없습니다
});
calc(() => "a" * 15).catch((err) => {
  console.log(err.value); // NaN
  console.log(err.reason); // 올바른 계산식이 아닙니다
});
calc(() => "3" + "5").catch((err) => {
  console.log(err.value); // '35'
  console.log(err.reason); // 올바른 계산식이 아닙니다
});
*/

/* async,await */
/* async+함수 => 프로미스 객체를 반환함 */
// 예제1
// const hello = async () => {
//   return 'Hello';
// };
// hello().then((res) => console.log(res)); // "Hello"

// 예제2
// async function print() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const result = response.json();
//   return result;
// }
// console.log(print()); // [{},{}....10개]

// 예제3
// async function print() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('bbuyaa');
//     }, 1000);
//   });
// }

// console.log(print());

/* async 붙은 함수 안에 await쓰면 그 부분은 비동기 실행이 됨. */
// async function fetchAndPrint() {
//   console.log(2);
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   console.log(7);
//   const result = response.json(); // await은 프로미스를 리턴하는게 아니라 값만 리턴함! 따라서 then()쓰지x
//   console.log(result);
// }

// console.log(1); // 실행순서: 1
// fetchAndPrint(); // 실행순서: 2
// console.log(3); // 실행순서: 5
// console.log(4); // 실행순서: 6
// console.log(5); // 실행순서: 7
// console.log(6); // 실행순서: 8
// // 결과 1,2,3,4,5,6,7,[result값]

/* try catch finally */
// async function fetchAndPrint() {
//   // 1.프로미스 객체가 fullfiled 일 때
//   try {
//     const response = await fetch('https://www.google.www');
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     // 2.try블럭 안에서 await가 붙은 프로미스 객체 중 rejected 상태가 될 경우 catch가 실행됨.
//     console.log(error);
//   } finally {
//     // 3.프로미스 객체 상태와 상관없이 무조건 실행됨
//     console.log('exit');
//   }
// }

// fetchAndPrint();
