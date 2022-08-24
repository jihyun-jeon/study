// 키패드 누르기
// https://bsscl.tistory.com/47

// 방법1
// 거리구하는 식
// function getDistance(pos, index) {
//   return Math.ceil(
//     Math.sqrt(Math.pow(pos[0] - index[0], 2) + Math.pow(pos[1] - index[1], 2)),
//   );
// }

// function solution(numbers, hand) {
//   let answer = '';

//   let left = [1, 4, 7];
//   let right = [3, 6, 9];
//   let center = [2, 5, 8, 0];

//   let LPos = [3, 0];
//   let RPos = [3, 2];

//   numbers.map((number) => {
//     // 왼손으로 눌러야할 때
//     if (left.includes(number)) {
//       answer += 'L';
//       LPos = [left.indexOf(number), 0];
//     } // 오른손으로 눌러야할 때
//     else if (right.includes(number)) {
//       answer += 'R';
//       RPos = [right.indexOf(number), 2];
//     } // 두 손중 하나를 선택할 때
//     else {
//       const index = [center.indexOf(number), 1]; // 눌러야 하는 번호의 위치

//       const LDist = getDistance(LPos, index); // 왼손과의 거리
//       const RDist = getDistance(RPos, index); // 오른손과의 거리

//       if (LDist > RDist) {
//         // 오른손이 거 가까이 있으면
//         answer += 'R'; // R을 추가하고
//         RPos = index; // 오른손을 타겟 번호위치로 이동
//       } else if (RDist > LDist) {
//         // 왼손이 더 가까이 있으면
//         answer += 'L';
//         LPos = index;
//       } else {
//         // 거리가 같을때
//         if (hand === 'right') {
//           // hand가 right이면
//           answer += 'R';
//           RPos = index;
//         } else {
//           // hand가 left이면
//           answer += 'L';
//           LPos = index;
//         }
//       }
//     }
//   });

//   return answer;
// }

// <방법2> - 젤 간단
// const solution = (numbers, hand) => {
//   const answer = [];

//   let leftHandPosition = '*';
//   let rightHandPosition = '#';

//   numbers.forEach((number) => {
//     if (number === 1 || number === 4 || number === 7) {
//       answer.push('L');
//       leftHandPosition = number;
//       return;
//     }

//     if (number === 3 || number === 6 || number === 9) {
//       answer.push('R');
//       rightHandPosition = number;
//       return;
//     }

//     const leftHandDistance = getDistance(leftHandPosition, number);
//     const rightHandDistance = getDistance(rightHandPosition, number);

//     if (leftHandDistance === rightHandDistance) {
//       if (hand === 'right') {
//         answer.push('R');
//         rightHandPosition = number;
//         return;
//       }

//       if (hand === 'left') {
//         answer.push('L');
//         leftHandPosition = number;
//         return;
//       }
//     }

//     if (leftHandDistance > rightHandDistance) {
//       answer.push('R');
//       rightHandPosition = number;
//     }

//     if (leftHandDistance < rightHandDistance) {
//       answer.push('L');
//       leftHandPosition = number;
//     }
//   });

//   return answer.join('');
// };

// // 가로,세로 거리구하는 함수
// const getDistance = (handPosition, target) => {
//   const keyPad = {
//     1: [0, 0],
//     2: [0, 1],
//     3: [0, 2],
//     4: [1, 0],
//     5: [1, 1],
//     6: [1, 2],
//     7: [2, 0],
//     8: [2, 1],
//     9: [2, 2],
//     '*': [3, 0],
//     0: [3, 1],
//     '#': [3, 2],
//   };

//   const nowPosition = keyPad[handPosition]; // [3,0] [3,2]
//   const targetPosition = keyPad[target]; // [0,0]

//   return (
//     Math.abs(targetPosition[0] - nowPosition[0]) +
//     Math.abs(targetPosition[1] - nowPosition[1])
//   );
// };

// <방법3 - set,map, 이차원배열 이용>
function solution(numbers, hand) {
  const hands = new Map();
  let answer = '';
  hands.set('left', '*');
  hands.set('right', '#');

  numbers.forEach((number) => {
    if ([1, 4, 7].includes(number)) {
      answer += 'L';
      hands.set('left', number);
    } else if ([3, 6, 9].includes(number)) {
      answer += 'R';
      hands.set('right', number);
    } else {
      answer += findNearest(hands, number, hand);
    }
  });

  return answer;
}

function findNearest(hands, number, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  const left = hands.get('left');
  const right = hands.get('right');
  let numIndex;
  let leftIndex;
  let rightIndex;

  keypad.forEach((arr, index) => {
    if (arr.includes(number)) numIndex = [index, arr.indexOf(number)];
    if (arr.includes(left)) leftIndex = [index, arr.indexOf(left)];
    if (arr.includes(right)) rightIndex = [index, arr.indexOf(right)];
  });

  const leftDistance = checkDistance(numIndex, leftIndex);
  const rightDistance = checkDistance(numIndex, rightIndex);

  if (leftDistance === rightDistance) {
    if (hand === 'left') {
      hands.set('left', number);
      return 'L';
    } else {
      hands.set('right', number);
      return 'R';
    }
  } else {
    if (leftDistance < rightDistance) {
      hands.set('left', number);
      return 'L';
    } else {
      hands.set('right', number);
      return 'R';
    }
  }
}

function checkDistance(numIndex, hand) {
  if (numIndex[0] === hand[0]) {
    return Math.abs(numIndex[1] - hand[1]);
  }

  return Math.abs(numIndex[0] - hand[0]) + Math.abs(numIndex[1] - hand[1]);
}

// 연습
function solution(numbers, hand) {
  let result = '';
  let leftHand = '*';
  let rightHand = '#';
  numbers.forEach((el) => {
    if (el === 1 || el === 4 || el === 7) {
      result += 'L';
      leftHand = el;
      return;
    }
    if (el === 3 || el === 6 || el === 9) {
      result += 'R';
      rightHand = el;
      return;
    }
    // 중앙에 있을때
    else {
      let Ldistan = distance(leftHand, el);
      let Rdistan = distance(rightHand, el);
      if (Ldistan > Rdistan) {
        result += 'R';
        rightHand = el;
        return;
      }
      if (Ldistan < Rdistan) {
        result += 'L';
        leftHand = el;
        return;
      }
      if (Ldistan === Rdistan) {
        if (hand === 'left') {
          result += 'L';
          leftHand = el;
          return;
        }
        if (hand === 'right') {
          result += 'R';
          rightHand = el;
          return;
        }
      }
    }
  });
  return result;
}

// 거리 구하는 방식!
function distance(hand, num) {
  const arr = {
    1: [0, 0],
    4: [1, 0],
    7: [2, 0],
    3: [0, 2],
    6: [1, 2],
    9: [2, 2],
    2: [0, 1],
    5: [1, 1],
    8: [2, 1],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  return (
    Math.abs(arr[hand][0] - arr[num][0]) + Math.abs(arr[hand][1] - arr[num][1])
  );
}

// 실행
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // "LLRLLRLLRL"
