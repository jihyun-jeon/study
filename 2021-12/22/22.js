/*
// 문제 1. 모든 요소가 동일할 때 true반환하는 myFunction함수를 개발하세요
function myFunction(arr) {
  // 방법1
  const first = arr[0];
  console.log(arr.slice(1).every((el) => el === first));
  // 방법2 - Set 아직 모름
  // return new Set(arr).size === 1;
}

myFunction([true, true, true, true]); // true
myFunction(['test', 'test', 'test']); // true
myFunction([1, 1, 1, 2]); // false
myFunction(['10', 10, 10, 10]); // false
*/

/*
// 문제 2. 문자열 배열을 받아서. 그 중에 제일 긴 문자열을 출력하도록 함수 myFunction2를 구현하시오.
function myFunction2(arr) {
  // 방법1
  // const lengthArr = arr.map((el) => el.length); // [4,2] [1,4,5]
  // const idx = lengthArr.indexOf(Math.max(...lengthArr)); // 0,2
  // console.log(arr[idx]);

  // 방법2 - for 를 돌면서 처리한다면 어떻게 하면 될까?
  let num = 0; // 4 , 5
  let str = '';
  for (let i = 0; i < arr.length; i += 1) {
    if (num < arr[i].length) {
      num = arr[i].length;
      str = arr[i];
    }
  }
  console.log(str);
}
myFunction2(['help', 'me']); // 'help'
myFunction2(['I', 'need', 'candy']); // 'candy'
*/

/*
// 문제 3. 여러 배열을 받아서 그것을 하나로 연결해 반환하는 myFunction3을 개발하시오
// 방법1 - rest
// function myFunction3(...arr) {
//   let sample = [];
//   let newArr = sample.concat(...arr);
//   console.log(newArr);
// }

// 방법2 - arguments 활용...★★★★★
function myFunction3() {
  const arr = Array.prototype.slice.call(arguments); // [[1,2,3] , [4,5,6,]]

  let arr2 = [];
  for (let i = 0; i < arr.length; i += 1) {
    arr2 = arr2.concat(arr[i]);
  }

  console.log(arr2);
}

myFunction3([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
myFunction3(['a', 'b', 'c'], [4, 5, 6]); // ['a', 'b', 'c', 4, 5, 6]
myFunction3([true, true], [1, 2], ['a', 'b']); // [true, true, 1, 2, 'a', 'b']
*/

/*
// 문제 4. 첫 번째 인자 배열에서 두 번째 인자와 일치하는 요소를 제거 후 반환하는 함수 myFunction을 개발하시오.
function myFunction4(arr, some) {
  // // 방법1 - filter 이용
  // // map은 안됨 :map으로 돌기위해선 기존 배열과 길이가 같은 결과값이 나와야 함 ★★★★★
  // const result = arr.filter(function (el) {
  //   if (el !== some) {
  //     return el;
  //   }
  // });
  // console.log(result);

  // 방법2 - filter 이용 없이
  const result = [];
  for (let el of arr) {
    if (el !== some) {
      result.push(el);
    }
  }
  console.log(result);
}

myFunction4([1, 2, 3], 2); // [1, 3]
myFunction4([1, 2, '2'], '2'); // [1, 2]
myFunction4([false, '2', 1], false); // ['2', 1]
myFunction4([1, 2, '2', 1], 1); // [2, '2']
*/

/*
// 문제 5. 배열 두개를 받아서 중복을 제거하고 병합하는 myFunction함수를 개발하시오
// 방법 1,2
// function myFunction5(a, b) {
//   const result = [];
//   const arrs = [a, b];
//   for (let i = 0; i < arrs.length; i += 1) {
//     for (let j = 0; j < arrs[i].length; j += 1) {
//       // 방법1)
//       if (result.indexOf(arrs[i][j]) === -1) {
//         // result에 요소 없으면 -1나옴
//         result.push(arrs[i][j]);
//       }
//       // 방법2)
//       // if (!result.includes(arrs[i][j])) {
//       //   result.push(arrs[i][j]);
//       // }
//     }
//   }
//   console.log(result);
// }

// 방법 3 - 객체의 프로퍼티 키값이 유효한 특성을 활용
function myFunction5(a, b) {
  const allArr = [a, b];
  const obj = {}; // { 1:"0", 2:"0", 3:"0", 4:"0", 5:"0"}
  for (const el of allArr) {
    for (const key of el) {
      obj[key] = '1';
    }
  }
  const keys = Object.keys(obj); // Object.keys() - 키값만 배열로 반환함.
  console.log(keys.map((el) => +el)); // 객체의 키는 "문자"여서 map을 돌려 숫자로 변환하기
}

myFunction5([1, 2, 3], [3, 4, 5]); // [ 1, 2, 3, 4, 5 ]
myFunction5([-10, 22, 333, 42], [-11, 5, 22, 41, 42]); // [ -11, -10, 5, 22, 41,  42, 333]
*/

/*
// 문제 6. 숫자 배열을 받고 두 번째 인자 숫자보다 큰 수들의 합을 출력하는 myFunction함수를 개발하세요. ★★★★★reduce
function myFunction6(arr, num) {
  const trueAll = arr.filter((el) => el > num);
  const result = trueAll.reduce((a, b) => a + b);
  console.log(result);
}

myFunction6([1, 2, 3, 4, 5, 6, 7], 2); // 25
myFunction6([-10, -11, -3, 1, -4], -3); // 1
myFunction6([78, 99, 100, 101, 401], 99); // 602
*/
