/* 내가 푼 방법 (시간초과 됨) */
// function solution(userList, report, k) {
//   // 1. 중복값 제거
//   const newArr = report.filter((el, idx) => report.indexOf(el) === idx);

//   // 2.이중배열로 만듦
//   const reportArr = [];
//   newArr.forEach((el) => {
//     reportArr.push(el.split(' ')); // [['muzi', 'frodo'],['apeach', 'frodo'],[],[],[] ]
//   });

//   // 3.객체에 {키(신고당한 사람): 값(신고한 사람 배열로)} 객체를 만듦
//   const obj = {}; // {frodo: ['muzi','apeach'] , muzi: ['apeach'], neo:['frodo', 'muzi']}
//   reportArr.forEach((el) => {
//     if (!obj[el[1]]) {
//       // 키값이 없으면
//       obj[el[1]] = [el[0]];
//     } else {
//       // 이미 있으면
//       obj[el[1]] = [...obj[el[1]], el[0]];
//     }
//   });
//   // 4.메일 받는 사람만 추출 - 객체의 값이 배열인데, 길이가 k이상이면 그 배열을 다 모음
//   let mail = []; // ['muzi', 'apeach', 'frodo', 'muzi']
//   for (const el in obj) {
//     if (obj[el].length >= k) {
//       mail = [...mail, ...obj[el]];
//     }
//   }
//   // 5.해당 값 몇 개 있는지 카운트
//   const result = [];
//   userList.forEach((el) => {
//     let cnt = 0;
//     for (let i = 0; i < mail.length; i += 1) {
//       if (el === mail[i]) {
//         cnt += 1;
//       }
//     }
//     result.push(cnt);
//   });
//   return result;
// }

/* best 답안 - new Set , map 뭔지??? */
/*
function solution(idList, report, k) {
  // <1.report를 이중배열로 만듦>
  const reports = [...new Set(report)].map((el) => el.split(' '));
  // console.log([...new Set(report)]); // ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi']
  // reports = [ ['muzi', 'frodo'],['apeach', 'frodo'], 'frodo', 'neo'],['muzi', 'neo'], ['apeach', 'muzi']]

  // <2.신고당한 사람 찾음>
  const counts = new Map(); // counts = {'frodo' => 2, 'neo' => 2, 'muzi' => 1}
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  // <3.신고해서 메일 받는사람 카운트>
  const good = new Map(); // good = {'muzi' => 2, 'apeach' => 1, 'frodo' => 1}
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }

  const result = idList.map((el) => good.get(el) || 0);
  return result;
}
*/

function solution(idList, report, k) {
  // 1.중복 제거
  // 2.이중배열로 만듦
  // 3.bad - {frodo : 3 , neo : 2, muzi : 1}
  // 4.good - {muzi : bad[frodo] >= k 그러면 count 1 , apeach:}
  // 5.idlist를 돌면서 해당 값을 배열로 출력

  const newArr = [...new Set(report)];
  // ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi']

  const reports = newArr.map((el) => el.split(' '));
  //  reports = [ ['muzi', 'frodo'],['apeach', 'frodo'], 'frodo', 'neo'],['muzi', 'neo'], ['apeach', 'muzi']]

  const bad = new Map(); // {'frodo' => 2, 'neo' => 2, 'muzi' => 1}
  for (const el of reports) {
    bad.set(el[1], bad.get(el[1]) + 1 || 1);
  }

  const good = new Map(); // {'muzi' => 2, 'apeach' => 1, 'frodo' => 1}
  for (const el of reports) {
    if (bad.get(el[1]) >= k) {
      good.set(el[0], good.get(el[0]) + 1 || 1);
    }
  }

  const result = idList.map((el) => good.get(el) || 0);
  console.log(result);
}

// 실행1
console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    [
      'muzi frodo',
      'muzi frodo',
      'apeach frodo',
      'frodo neo',
      'muzi neo',
      'apeach muzi',
    ],
    2,
  ),
); // [2, 1, 1, 0]

// 실행2
// console.log(
//   solution(
//     ['con', 'ryan'],
//     ['ryan con', 'ryan con', 'ryan con', 'ryan con'],
//     3,
//   ),
// ); // [0, 0],
