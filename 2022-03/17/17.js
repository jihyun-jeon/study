// 완주하지 못한 선수 - 1명을 리턴하기
// completion의 길이는 participant의 길이보다 1 작습니다.
// 동명이인이 있을 수 있음.

// 방법1. - sort, for문

// 방법2- sort,find사용
// function solution(participant, completion) {
//   participant.sort();
//   completion.sort();
//   return participant.find((el, idx) => el !== completion[idx]);
// }

// 방법3 - Map 활용
// function solution(participant, completion) {
//   const obj = new Map();

//   for (let i = 0; i < participant.length; i += 1) {
//     obj.set(
//       participant[i],
//       obj.get(participant[i]) ? obj.get(participant[i]) + 1 : 1,
//     );
//     obj.set(
//       completion[i],
//       obj.get(completion[i]) ? obj.get(completion[i]) + 1 : 1,
//     );
//   }
//   //
//   for (const [k, v] of obj) {
//     if (v % 2) {
//       return k;
//     }
//   }
// }

// 방법4 - reduce , find 활용
function solution(participant, completion) {
  const obj = completion.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  // const x = participant.forEach((el) => {
  //   if (obj[el] > 0) {
  //     obj[el] -= 1;
  //   } else {
  //     return el;
  //   }
  // });

  return participant.find((el) => {
    if (obj[el]) {
      obj[el] = obj[el] - 1;
    }
    return true;
  });

  // return obj;
}

// 실행코드
// console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"
// console.log(
//   solution(
//     ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
//     ['josipa', 'filipa', 'marina', 'nikola'],
//   ),
// ); // "vinko"
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']),
); // "mislav"

/*
피드백
1.
find() : 주어진 콜백 함수를 만족하는 첫 번째 요소의 값을 반환합니다.
Array.find( (el,idx,arr)=>{} ,thisAr-this로 사용할 객체. )

2. Map() 사용법 까먹음.
  : for of
  : 질문1.Map은 객체형식으로 나오는데 왜 for of로 돌면 배열로 나오는지?

*/

/*
const map = new Map();
map.set('leo', 1);
map.set('susu', 2);

map.forEach((el) => console.log(el)); // 1 2

for (const el of map) {
  console.log(el); // ['leo', 1] , ['susu', 2]
}
*/
