/***** <이중for문> *****/
/***** 문제 1. arr를 순회하는데 첫번째 요소는 한번, 두번째 요소는 두번, 세번째 요소는 세번 출력되도록 해보자. *****/
// 방법1;
function rotate(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    // 0,1,2
    for (let j = 0; j <= i; j += 1) {
      // 0 , 01, 012
      console.log(arr[i]);
    }
  }
}
// 방법2;
function rotate(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    // 0,1,2
    for (let j = i; j >= 0; j -= 1) {
      // 0 , 10, 210
      console.log(arr[i]);
    }
  }
}

// 실행
// rotate(['a', 'b', 'c']);

/***** 문제 2. a를 피라미드 형태로 찍어보기 *****/
function piramid(num) {
  for (let i = num; i > 0; i -= 1) {
    let result = '';
    // 3,2,1
    for (let j = i; j <= num; j += 1) {
      // 3, 2,3, 1,2,3
      result += 'a';
    }
    console.log(result);
  }
}

// piramid(3);

/***** 문제 3. a를 피라미드 꺼꾸로 찍어보기 *****/
function piramid2(num) {
  for (let i = num; i > 0; i -= 1) {
    let result = '';
    // i = 3,2,1
    for (let j = i; j > 0; j -= 1) {
      // 321, 21, 1
      result += 'A';
    }
    console.log(result);
  }
}

// piramid2(3);

// ☆변수의 유효범위 - let 변수는 블록범위기 때문에  for문 안에서만 미치고,
// for문이 한번 끝나면, let result 값은 처음부터 다시 실행됨.

//------------------------------------------------------------------
/***** <배열문제> *****/
/* 문제1: 배열을 받아서 그 배열을 뒤집어서 반환하는  함수를 만들어 보자 (reverse없이) */
function name1(arr) {
  let result = [];
  arr.forEach((el) => {
    result.unshift(el);
  });
  return result;
}

// console.log(name1([0, 2, 3, 4, 5]));

/* 문제2 : 4의 인덱스값을 반환하시오. */
let arr3 = [1, 2, 3, 4, 5, 6];
let idxNum = arr3.findIndex((el) => el === 4);
// console.log(idxNum); //3

/* 문제3: 함수의 인자가 배열이랑 숫자값을 받아서 그 숫자값에 해당하는 배열요소가 삭제되도록 (4가 삭제되도록) */
function app1(arr, num) {
  const idx = arr.findIndex((el) => el === num); // 3
  arr.splice(idx, 1);
  return arr;
}

// console.log(app1([1, 2, 3, 4, 5], 4)); // [1,2,3,5]
// console.log(app1([4, 6, 2, 8, 1, 9], 1)); // [4, 6, 2, 8, 9]

/* 문제4. 함수가 숫자배열을 받음, 그 중 홀수와 짝수를 구별해서 2차원 배열을 두개 반환하라 */
function app2(arr) {
  let eval = [];
  let odd = [];

  arr.forEach((el) => {
    if (el % 2) {
      odd.push(el); // 1,3,5
      return;
    }
    eval.push(el); // 2,4
  });
  return [odd, eval];
}

// console.log(app2([1, 2, 3, 4, 5])); // 결과 [[1,3,5], [2,4]]

//문제5 - 함수가 인자를 두개를 받는데, 첫번째는 숫자배열, 두번째는 함수배열이다.
function test4(arr, calArr) {
  let result = 0;

  calArr.forEach((fn) => {
    result = fn(arr[0], arr[1]); // result = 11,77,38.5
    arr.splice(0, 2, result); // arr = [11,7,2],[77,2],[38.5]
  });
  return result;
}

console.log(
  test4(
    [5, 6, 7, 2],
    [
      function (a, b) {
        return a + b;
      },

      function (a, b) {
        return a * b;
      },
      function (a, b) {
        return a / b;
      },
    ],
  ),
); // 11, 77, 결과: 38.5
