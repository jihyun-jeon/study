/*
// 문제1. 숫자 또는 연산자 문자열을 받아 연산을 반환하는 함수를 만드시오.(첫번쨰 인덱스는 숫자임)
function myFunction1(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    const el = arr[i];
    if (typeof el === 'number') {
      result += el;
    } else {
      const num = +el.slice(1);
      switch (el[0]) {
        case '+':
          result += num;
          break;
        case '-':
          result -= num;
          break;
        case '*':
          result *= num;
          break;
        default:
          result /= num;
          break;
      }
    }
  }
  console.log(result);
}

myFunction1([0, '+7', '-5', 6]); // 8
myFunction1([7, '+3', '*5', 4, '-1']); // 53
myFunction1([7, '+3', '*5', 4, '-12']); // 42
*/

/*
// 문제2. 알파벳으로 구성된 문자열 중 연속된 문자의 갯수가 젤 많은 것의 숫자를 출력하는 함수를 만드시오. //while, indexOf 활용
// 방법1 - 객체 활용 , for문 돌면서 obj에 값을 +1해나가는 방식으로
// function myFunction2(str) {
//   const arr = str.split('').sort(); // [a,a,a,b,c,d,d];
//   const obj = {};

//   let count = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] in obj) {
//       count += 1;
//     } else {
//       count = 1;
//     }

//     obj[arr[i]] = count;
//   }

//   const result = Object.values(obj);
//   console.log(Math.max(...result));
// }

// 방법2 - reduce 활용
function myFunction2(str) {
  return Math.max(
    ...Object.values(
      str.split('').reduce((obj, ch) => {
        if (ch in obj) {
          obj[ch] += 1;
        } else {
          obj[ch] = 1;
        }

        return obj;
      }, {}), // 초기값 {}
    ),
  );
}

myFunction2('dabacad'); // 3 //aaa b c dd
myFunction2('abccccccdefff'); // 6
*/
