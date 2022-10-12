// < 내가 한 방법 - 70ms >
const longestCommonPrefix = function (strs) {
  const shortStr = strs.sort((a, b) => a.length - b.length)[0].split(''); // [a,a]
  let result = '';

  for (let idx = 0; idx < shortStr.length; idx += 1) {
    const isEveryTrue = strs.every(str => str[idx] === shortStr[idx]);

    if (isEveryTrue) {
      result += shortStr[idx];
    } else {
      break;
    }
  }

  return result;
};
/*
< 나의 방법 - 설명 >
1. 가장 짧은 단어 하나를 기준으로 잡고, for문을 돌음
2. for문을 돌면서 가장 짧은 단어의 각 idx번호에 해당하는 값과 === 다른 단어들의 idx번호에 해당하는 값을 비교함
3. 같으면 result 변수에 하나씩 더하고, 다르면 for문을 멈춘
4. for문 다 돌았으면, result 변수를 리턴함
*/

// < 다른 사람 방법 - 78ms >
// const longestCommonPrefix = function (strs) {
//   return strs.reduce((prev, next) => {
//     // console.log(prev, next); // flower flow // flow flight // fl
//     // [순서] 1 // 6
//     let i = 0;
//     while (prev[i] && next[i] && prev[i] === next[i]) {
//       // [순서] 2,3,4,5 // 7,8
//       i += 1; // 1,2,3,4, // 1,2
//     }
//     return prev.slice(0, i);
//   });
// };
/*
< 다른사람 방법 - 설명 >
1.reduce로 일단 첫 단어와 두번째 단어만 비교함
2.while로 : 각 idx에 있는 글자를 하나하나씩 비교해 나감
3.다르면 while문 끝내고, 공통 단어만 slice로 잘라서 prev 값으로 리턴함
4.이후 > 그 prev값과 세번째 단어를 다시 비교하는 식으로 반복
5.reduce를 다 돌았으면 이제 reduce의 최종 값을 리턴해줌
*/

// < 실행코드 >
// console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
// console.log(longestCommonPrefix(['floweraaa', 'flowaaa', 'flightaaa'])); // "fl"
// console.log(longestCommonPrefix(['aa', 'aa'])); // "aa"
// console.log(longestCommonPrefix(['avsfl', 'egwfl', 'dhefl'])); // ""
// console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""
// console.log(longestCommonPrefix(['reflower', 'flow', 'flight'])); // ""
// console.log(longestCommonPrefix(['abkcc', 'ibcc', 'gbcc'])); // ""

/*
<문제 분석>
1. 자리도 같고 문자도 연속적으로 같아야 함
2. 연속적인 문자는 같은데 자리가 다른면 ""
*/
