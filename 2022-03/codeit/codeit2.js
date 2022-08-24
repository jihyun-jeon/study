/*
<정리>
1.에러 객체는 기본적으로 에러 이름을 담고 있는 name 프로퍼티와 에러 내용을 담고 있는 message 프로퍼티를 가지고 있습니다.
2.자바스크립트에서 에러가 발생하면 그 순간 프로그램 자체가 멈춰버리고 그 이후의 코드는 더 이상 동작하지 않게 됩니다.
3.그리고 에러가 발생하면 자동으로 에러의 내용이 담긴 에러 객체가 만들어지는데요.
4.자바스크립트에서 에러를 다루는 방법 중 하나는 try catch 문을 활용하는 것입니다.
  try catch 문을 활용하면 에러가 발생해도 프로그램을 멈추지 않고, 에러가 발생했을 때 동작할 코드를 다룰 수 있게 됩니다.
5.try 문에서 동작할 코드를 작성하고, 에러가 발생했을 때 동작할 코드를 catch 문 안에 작성하면 되는데요.
  이때 try 문에서 에러가 발생해서 에러 객체가 만들어지면, 그 에러 객체를 catch 문 안에서 다룰 수가 있습니다.
 */

// < throw new Error() > : 의도적으로 에러를 만듦
//  new Error() : 에러 객체를 생성
//  throw       : 강제로 에러를 발생시키는 키워드
//
// 1.에러 객체 만들기
// 에러객체 형태 - 에러네임:에러메세지
// const err = new TypeError('타입 에러가 발생했습니다');
// console.log(err); // TypeError: 타입 에러가 발생했습니다
// console.log(err.name); // TypeError
// console.log(err.message); // 타입 에러가 발생했습니다

// 2.의도적으로 에러를 발생시킴
// console.log('시작');
// throw err; // 여기서 의도적으로 에러를 발생시키면, 다음 코드 실행이 안되게됨.
// console.log('끝');

// 3. 예제2 - 의도적으로 에러를 발생시킴
// const even = parseInt(prompt('짝수를 입력하세요'));
// if (even % 2 !== 0) {
//   throw new Error('짝수가 아닙니다.'); // Uncaught Error: 짝수가 아닙니다.
// }

// < try catch문  >
/* 형태
try {
  // 실행할 코드
} catch (err) {
  // 에러가 발상했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}
*/

// 예제1
// try {
//   console.log('에러전'); // 에러전

//   const code = 'a';
//   console.log(code); // a
//   code = 'b';

//   console.log('상수를 바꾸니 에러남'); // 안나옴
// } catch (err) {
//   // try에서 발생한 에러객체가 catch에 들어감
//   console.error(err); //  TypeError: Assignment to constant variable.
//   console.log('에러후'); // 에러후
// } finally {
//   console.log('에러 유무 상관없이 여긴 무조건 실행됨'); // 여긴 무조건 실행됨
// }

// function printMembers(...members) {
//   for (const member of members) {
//     console.log(member);
//   }
// }

// try {
//   printMembers('영훈', '윤수', '동욱');
// } catch (err) {
//   alert('에러가 발생했습니다!');
//   console.error(err);
// } finally {
//   const msg = `코드 실행을 완료한 시각은 ${new Date().toLocaleString()}입니다.`;
//   console.log(msg);
// }
