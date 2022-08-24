// // 방법1
// function solution(n, arr1, arr2) {
//   const result = [];

//   // 1. 2진수, 이중배열로 바꿈
//   const map1 = arr1.map((el) => [...el.toString(2).padStart(n, '0')]);
//   const map2 = arr2.map((el) => [...el.toString(2).padStart(n, '0')]);

//   // 2. map1,map2의 각 요소를 같이 순회하면서, 두 요소가 모두 0이면 "_", 하나라도 1이면 "#"을 넣어 새 배열로 만들기
//   for (let i = 0; i < n; i += 1) {
//     let idx = '';
//     for (let j = 0; j < n; j += 1) {
//       if ((map1[i][j] === '0' && map2[i][j]) === '0') {
//         idx += ' ';
//       } else {
//         idx += '#';
//       }
//     }
//     result.push(idx);
//   }

//   console.log(map2);

//   return result;
// }

// 방법2 -??
function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i += 1) {
    answer.push(
      (arr1[i] | arr2[i])
        .toString(2)
        .padStart(n, 0)
        .replace(/1/gi, '#')
        .replace(/0/gi, ' '),
    );
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

/*
1.배열을 돌아 새 배열을 반환할 땐, map이용!
2.toString, parseInt 포스팅한거 다시 보기
3.padStart,padEnd 다시 공부

*/
