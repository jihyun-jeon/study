// 다른 사람 풀이
// 방법1
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// 방법2
function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count % 2) answer -= i;
    else answer += i;
  }

  return answer;
}

// 방법3
function solution(left, right) {
  let sum = ((left + right) / 2) * (right - left + 1);
  let l = Math.ceil(Math.sqrt(left));
  while (l ** 2 <= right) sum -= (l++) ** 2 * 2;
  return sum;
}

// 방법4
function getDivisorCount(number) {
  if (number === 1) {
    return 1;
  }

  let count = 2;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  return count;
}

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    const summand = getDivisorCount(i) % 2 === 0 ? i : -i;

    result += summand;
  }

  return result;
}
