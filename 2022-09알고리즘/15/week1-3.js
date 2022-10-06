/* eslint-disable guard-for-in */

// < 방법1 >
// function getLengthOfStr(txt) {
//   let arr = [];
//   const lengthArr = [];

//   for (let i = 0; i < txt.length; i += 1) {
//     if (arr.includes(txt[i])) {
//       const txtIdx = arr.indexOf(txt[i]);
//       lengthArr.push(arr.length); // 2. 중복된 문자면 기존 배열의 길이를 lengthArr에 넣고

//       const scliedArr = arr.slice(txtIdx + 1); // 3.중복된 문자 뒤로 새 배열을 만들어
//       scliedArr.push(txt[i]); // 3-1. 현재 문자를 뒤로 넣어준 뒤
//       arr = scliedArr; // 4. 그 배열을 arr로 대체한다. -> 이후 1번부터 반복
//     } else {
//       arr.push(txt[i]); // 1. 중복된 문자가 아니면 그냥 다 arr에 넣는다.
//     }
//   }

//   lengthArr.push(arr.length); // 5. 최종적으로 만들어진 arr의 길이를 legnthArr에 담는다.

//   return Math.max(...lengthArr); // 6. legnthArr 중 젤 킁 길이를 반환.
// }

// < 방법2 >
// function getLengthOfStr(str) {
//   const legnthArr = [];
//   let newStr = '';

//   for (const i in str) {
//     if (newStr.includes(str[i])) {
//       const idxNum = newStr.indexOf(str[i]);
//       newStr = newStr.slice(idxNum + 1);
//     }

//     newStr += str[i];
//     legnthArr.push(newStr.length);
//   }

//   return Math.max(...legnthArr);
// }

const getLengthOfStr = (str) => {
  // 아래 코드를 작성해주세요.
  let arr = [];
  const lengthArr = [];

  for (let i = 0; i < str.length; i += 1) {
    if (arr.includes(str[i])) {
      // console.log('inc');
      lengthArr.push(arr.length);
      const idx = arr.indexOf(str[i]);
      const slicedArr = arr.slice(idx + 1);
      slicedArr.push(str[i]);
      arr = slicedArr;
    } else {
      arr.push(str[i]);
    }
  }
  lengthArr.push(arr.length);
  return Math.max(...lengthArr);
};

console.log(getLengthOfStr('abcabcabc')); // 3 "abc"
console.log(getLengthOfStr('abcabcabcabcd')); // 4 "abcd" // 📍3이 나옴
console.log(getLengthOfStr('aaaaa')); // 1 "a"
console.log(getLengthOfStr('sttrg')); // 3 "trg" //📍 2
console.log(getLengthOfStr('jellygumi')); // 6  //  [j,e,l] => [] => [l,t,g,u,m,i] // 📍3
console.log(getLengthOfStr('jelylgumi')); // 6  // [j,e,l,y] => [y] => [y,l,g,u,m,i] // 📍4
console.log(getLengthOfStr('abcdefcighzh')); // 8 // defcighz
console.log(getLengthOfStr('abc12345defcighzh')); // 13 // 12345defcighz

/*
< 풀이 방법 >
1. 배열에 문자를 하나씩 넣어보려고 하는데
2. 이 때 배열에 중복된 문자가 없으면 그냥 넣고
3. 중목된 문자가 있으면 , 배열을 그 문자까지 다 자르고 그 뒤에만 남김다.
2. 이후 다시 문자 넣는다.
*/
