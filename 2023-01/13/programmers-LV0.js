// < LV0. 다음에 올 숫자 > -----------------------------------------------------------------------------
// < 나의풀이 >
function solution(common) {
  if (common[1] - common[0] === common[2] - common[1]) {
    return common.pop() + (common[1] - common[0]);
  } else {
    return common.pop() * (common[1] / common[0]);
  }
}

// < 실행코드 >
// console.log(solution([0, 0, 0])); // 0
// console.log(solution([1, 2, 3, 4])); // 5
// console.log(solution([1, 3, 5, 7])); // 9
// console.log(solution([2, 4, 8])); // 16

// < LV0. 연속된 수의 합 > -----------------------------------------------------------------------------

// < 나의풀이 >- 초기값을 구해서 채워가는 방법
function solution(num, total) {
  let flagNum = Math.floor(total / num); // 1, 0, -1
  let iniFlagNum = num / 2; // 1.5, 0.5, -1.5

  while (iniFlagNum > 0) {
    flagNum -= 1;
    iniFlagNum -= 1;
  }

  return new Array(num).fill(null).map(_ => {
    flagNum++;
    return flagNum;
  });
}

// < 다른 사람 풀이> - 초기값 구하는 방법이 깔끔함
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2)); // 4 - 1 = 3 // 3.5 - 2 = 2

  return new Array(num).fill(null).map((_, i) => {
    return min + i;
  });
}

// <실행코드>
// console.log(solution(3, 0)); // [-1, 0 ,1];
// console.log(solution(5, 0)); // [-2, -1, 0 ,1 ,2];
// console.log(solution(3, 12)); // [3, "4", 5];
// console.log(solution(5, 15)); // [1, 2, "3", 4, 5]
// console.log(solution(5, 5)); // [-1, 0, "1", 2, 3]

// console.log(solution(4, 14)); // [2, "3", 4, 5]
// console.log(solution(6, 27)); // [2, 3, "4", 5, 6, 7]
