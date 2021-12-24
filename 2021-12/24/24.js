/** 문제1. */
// // 방법1 - sort사용
// function myFunction1(arr) {
//   arr.sort();
//   const obj = {};
//   let alpha = arr[0][0];

//   let value = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (alpha === arr[i][0]) {
//       value.push(arr[i]);
//     } else {
//       [alpha] = arr[i]; // alpha = arr[i][0]; <-구조분해할당 연산자: destructoring
//       value = [];
//       value.push(arr[i]);
//     }

//     obj[alpha.toLowerCase()] = value;
//   }

//   console.log(obj);
//   /* 구조분해할당 연산자: destructoring
// const arr = ["a","b","c"];

// let x = arr[0];
// let [x] = arr; //"a"

// let [x,y] = arr; // x="a", y="b"

// let [,z] = arr; // "b"
// let [,,k] = arr; // "c"
//  */
// }

// 방법2 - for문 도는 법
// function myFunction1(arr) {
//   const obj = {};
//   // let alpha = '';

//   // alpha = arr[0][0].toLocaleLowerCase();
//   // obj[alpha.toLocaleLowerCase()] = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     const alpha = arr[i][0].toLocaleLowerCase();

//     if (!(alpha in obj)) {
//       // obj에 키가 없으면 // in: 키가 있는지 찾는 연산자

//       obj[alpha.toLocaleLowerCase()] = [];
//     }

//     obj[alpha].push(arr[i]);
//   }
//   console.log(obj);
// }

// myFunction1(['Alf', 'Alice', 'Ben', 'Bab']); // {a:["Alf","Alice"],b:["Ben","Bab"]}
// myFunction1(['Berlin','Paris','Prague','Belgium']);// {b:['Berlin','Belgi'],p:['Paris','Prague']}
// myFunction1(['Cafe', 'La', 'Li', 'Coo']);

/*
// 문제2. - 객체의 값이 empty string(" ") 또는 공백("")이면 null로 바꾸는 함수
function myFunction2(obj) {
  for (const el in obj) {
    if (obj[el] === '' || obj[el] === ' ') {
      obj[el] = null;
    }
  }
  console.log(obj);
}

myFunction2({ a: 'a', b: 'b', c: '' }); // { a: 'a', b: 'b', c: null }
myFunction2({ a: '', b: 'b', c: ' ', d: 'd' }); // { a: null, b: 'b', c: null, d: 'd' }
*/
