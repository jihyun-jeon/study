// 내가 한 방법1
// function solution(N, stages) {
//   // 1. 실패율을 담은 배열을 만듦.
//   const rates = []; // [1,0,0]
//   for (let i = 1; i <= N; i += 1) {
//     const failUser = stages.filter((el) => el === i).length;
//     const user = stages.filter((el) => el >= i).length;
//     rates.push(Number.isNaN(failUser / user) ? 0 : failUser / user);
//   }
//   // 2.실패율 배열을 정렬한 새 배열을 만듦
//   const rank = [...rates].sort((a, b) => a - b).reverse(); // [0,0,1]

//   // 3.정렬한 배열을 돌면서 rates에 맞는 인덱스 값을 추출하여 result에 담아 반환
//   const result = [];
//   for (const el of rank) {
//     const idx = rates.findIndex((d) => d === el);
//     result.push(idx + 1);
//     rates[idx] = -1;
//   }

//   return result;
// }

// // 방법2 - 젤 데이터 적게 나옴!
// function solution(N, stages) {
//   const rate = []; // 1결과 - [{stage: 1, failRate: 0.125},{stage: 2, failRate: 0.42},{stage: 3, failRate: 0.5}, {stage: 4, failRate: 0.5},{stage: 5, failRate: 0}]

//   // 1.for문으로 stage수만큼 돌면서 실패율을 구해 rate에 넣음.
//   for (let i = 1; i <= N; i += 1) {
//     // stage 도달한 사람 수
//     const userInStage = stages.reduce(
//       (acc, cur) => acc + (cur >= i ? 1 : 0),
//       0,
//     );
//     // stage 못깬 사람 수
//     const failUser = stages.reduce((acc, cur) => acc + (cur === i ? 1 : 0), 0);

//     // stage도달한 사람이 0명이면, 해당 stage의 실패율 0으로
//     if (userInStage === 0) {
//       rate.push({ stage: i, failRate: 0 });
//       continue;
//     }

//     // 그게 아니면 실패율 넣기
//     rate.push({
//       stage: i,
//       failRate: failUser / userInStage,
//     });
//   }

//   // 2. 실패율이 큰 순서대로 sort로 정렬함
//   // sort결과 - [{stage: 3, failRate: 0.5}, {stage: 4, failRate: 0.5},{stage: 2, failRate: 0.42},{stage: 1, failRate: 0.125},{stage: 5, failRate: 0}]
//   return rate
//     .sort((a, b) => {
//       if (a.failRate > b.failRate) return -1;
//       if (a.failRate < b.failRate) return 1;
//       return a.stage - b.stage;
//     })
//     .map((el) => el.stage);
// }

// 방법3
function solution(N, stages) {
  const result = [];
  for (let i = 1; i <= N; i += 1) {
    const reach = stages.filter((x) => x >= i).length;
    const curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}

// 방법4
// function solution(N, stages) {
//   let tempArr = stages;
//   const answerObj = {};
//   for (let i = 1; i <= N; i += 1) {
//     const top = tempArr.filter((el) => el === i).length;
//     const bottom = tempArr.length;
//     answerObj[i] = top / bottom;
//     tempArr = tempArr.filter((el) => el !== i);
//   }
//   return Object.entries(answerObj)
//     .sort((a, b) => b[1] - a[1])
//     .map((v) => +v[0]);
// }

// 실행코드
// console.log(solution(3, [1, 1, 1])); // [1,2,3,];
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
// console.log(solution(4, [4, 4, 4, 4, 4])); // [(4, 1, 2, 3)];
// console.log(solution(8, [1, 2, 3, 4, 5, 7, 7, 8, 8, 9, 9])); // [8,7,5,4,3,2,1,6];
