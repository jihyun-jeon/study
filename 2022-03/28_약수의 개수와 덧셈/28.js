/*
약수의 개수 구하는 법
A = B(**m) * C(**n)
결과 => (m+1)*(n+1)
*/

/*
// <72에 대한 약수 갯수>
let num = 72;
const obj = {}; // {2:3,3:2}

// 약수 갯수 구하기
for (let i = 2; i <= num; i += 1) {
  while (num / i > 0 && Number.isInteger(num / i)) {
    num /= i;
    obj[i] ? (obj[i] += 1) : (obj[i] = 1);
  }
}

const values = Object.values(obj);
const result = values.reduce((acc, cur) => (acc + 1) * (cur + 1));

console.log(result);
*/

function solution(left, right) {
  let answer = 0;

  // 1.left~right 나열
  const list = []; // [3]
  for (let i = left; i <= right; i += 1) {
    if (i === 1) {
      continue;
    }
    list.push(i);
  }
  // 2.각 요소를 돌면서 약수의 경우의 수를 객체로 만듦
  list.forEach((num, idx) => {
    const obj = {};
    if (num === 1) {
      obj[1] = 1;
    }
    //
    for (let i = 2; i <= num; i += 1) {
      while (num / i > 0 && Number.isInteger(num / i)) {
        num /= i;
        obj[i] ? (obj[i] += 1) : (obj[i] = 1);
      }
    }

    const values = Object.values(obj); // [1] [1,1] [1,1] [4] [1]
    const valuesSum = values.map((x) => x + 1); // [2] [2,2] [2,2] [5] [2]
    const result = valuesSum.reduce((acc, cur) => acc * cur); // 2, 4, 4, 5, 2

    if (result % 2) {
      answer -= list[idx];
    } else {
      answer += list[idx];
    }
  });
  console.log(answer);

  // 3.left가 1일 경우 무조건 뻬기
  if (left === 1) {
    answer -= 1;
  }

  return answer;
}

// <실행코드>
// console.log(solution(72, 72)); // 72 {2:3,3:2}
// console.log(solution(13, 17)); // 43( 13+14+15+17-16)
// console.log(solution(24, 27)); // 52 (24+26+27-25 )
// console.log(solution(1, 2)); // 3
