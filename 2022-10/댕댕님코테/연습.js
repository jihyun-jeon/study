// <문제1>
// function group(sordGrpArr, colorArr) {
//   let idx = -1; // colorArr에 접근할 인덱스 번호를 관리. 초기값은 아직 idx가 없음을 의미하기 위해 -1로 둠
//   let flagNum = null; // 이전 숫자와 현재 숫자가 같은지 비교하기 위한 기준 num임.

//   // [순서1] sordGrpArr배열을 map으로 돈다
//   // (resultArr값이 wordGrpArr 배열과 같은 길이를 갖는 배열이기 때문에 map을 씀)
//   return sordGrpArr.map(num => {
//     // [순서2] 0이면 null 리턴
//     if (!num) {
//       flagNum = num;
//       return null;
//     }

//     // [순서3]0이 아니고, 앞전 숫자랑 다를 경우
//     if (num && flagNum !== num) {
//       // [3-1]기준 숫자를 새로운 num으로 업데이트 시켜준다.
//       flagNum = num;
//       // [3-2] idx가 colorArr의 마지막 인덱스 번호라면 0으로 , 아니라면 1씩 증가시킨다.
//       idx = idx === colorArr.length - 1 ? 0 : (idx += 1);
//       // [3-3] colorArr의 해당 값 리턴
//       return colorArr[idx];
//     }

//     // [순서4]0이 아니고, 앞전 숫자랑 같을 경우
//     if (num && flagNum === num) {
//       // [4-1] 동일한 idx값 유지, colorArr의 해당 값 리턴
//       return colorArr[idx];
//     }
//   });
// }

// console.log(group([0, 3, 3, 1, 1, 1, 0, 0, 2, 2, 2, 8, 8], ['red', 'blue']));
// console.log(group([6, 6, 6, 0, 0, 11, 11], ['green', 'red', 'violet']));

// <문제2>
function dubby(textArr) {
  // [순서1] 객체에 userId에 해당하는 변경되는 닉네임값을 관리한다. 최종적으로 변경된 닉네임이 남게 됨. (객체의 key값은 unique한 속성을 이용한 것)
  const userInfo = {}; // {uid1234: '떠난 더비', uid4567: 'White'}
  // [순서2] textArr를 돌면서 어떤 userId가 방명록 입력했는지 알기 위해 userId값을 배열에 쌓아논다.
  let resultArr = []; // ['uid1234', 'uid4567', 'uid1234', 'uid4567']

  textArr.forEach(txt => {
    const textSplitArr = txt.split(' '); // ['Write', 'uid1234', 'Black']

    // [순서3] Write가 있을 때마다, resultArr에 id를 쌓아주고, userInfo의 닉네임 값을 바꿔준다.
    if (textSplitArr[0] === 'Write') {
      userInfo[textSplitArr[1]] = textSplitArr[2];
      resultArr.push(textSplitArr[1]);
    } else {
      // [순서4] Leave면 userInfo에서 해당 id값의 닉네임을 "떠난 도비"로 바꾼다.
      userInfo[textSplitArr[1]] = '떠난 더비';
    }
  });

  // [순서5] resultArr를 돌면서 id에 해당하는 닉네임값을 userInfo에서 찾아서, 문자를 출력해준다
  return resultArr.map(id => `${userInfo[id]}님이 방명록에 새글을 남겼습니다.`);
}

// console.log(
//   dubby([
//     'Write uid1234 Black',
//     'Write uid4567 Josh',
//     'Write uid1234 White',
//     'Write uid4567 White',
//     'Write uid8901 Tom',
//     'Write uid1234 Blue',
//     'Leave uid1234',
//     'Write uid4567 Josh',
//     'Leave uid8901',
//   ])
// );

// console.log(
//   dubby([
//     'Write uid1234 Black',
//     'Write uid4567 Josh',
//     'Write uid1234 White',
//     'Write uid4567 White',
//     'Leave uid1234 ',
//   ])
// );
