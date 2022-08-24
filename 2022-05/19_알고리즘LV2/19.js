// 예제 5번 같은 문제가 이상함!!!!! - 60점만 받음

function solution(s) {
  const arr = [];
  for (let x = 1; x <= s.length; x += 1) {
    let result = '';
    let unit = ''; // 문자열 단위
    let cnt = 1; // 같은게 몇개 있는지?
    //
    for (let i = 0; i < s.length; i += 1) {
      let part = s.slice(i, i + x); // (0,3)wab (1,4)abc , (7,10)zyz
      let comp = s.slice(i + x, i + x + x); // 0(3,6)cab 1(4,7)abc

      // < comp의 길이가 unit과 같지 않다면?? >
      if (x !== comp.length) {
        result += `${part}${comp}`;
        break;
      }

      // < 두 문자가 같으면, 단위 생성하기 >
      if (part === comp) {
        unit = part; // abc

        while (unit === comp) {
          cnt += 1;
          i += x; // 1+3(4)
          comp = s.slice(i + x, i + x + x); // i=4 (7,10) // zyz
        }
        result += `${cnt}${unit}`; // 2abc
        unit = '';
        cnt = 1;
        i = i + x - 1;
        continue;
      }

      // < 두 문자가 다르다면 하나씩 넣기>
      // ?? 제일 앞부터 정해진 길이만큼 잘라야 합니다. 충족하지 못한 경우??
      if (i === 0 && part !== comp) {
        result = s;
        break;
      }
      result += `${cnt === 1 ? '' : cnt}${part[0]}`;
      cnt = 1;
    }

    arr.push(result.length);
  }

  return arr.sort((a, b) => a - b)[0];
}

console.log(solution('aabbaccc')); // 7 2a2ba3c (1개단위)
console.log(solution('ababcdcdababcdcd')); // 9  2ababcdcd (8개단위)
console.log(solution('abcabcdede')); // 8 2abcdede (3개단위)
console.log(solution('abcabcabcabcdededededede')); // 14 2abcabc2dedede  (6개단위)

/*
문자열을 2개 단위로 자르면 "abcabcabcabc6de" 가 됩니다
문자열을 3개 단위로 자르면 "4abcdededededede" 가 됩니다
문자열을 4개 단위로 자르면 "abcabcabcabc3dede" 가 됩니다
문자열을 6개 단위로 자를 경우 "2abcabc2dedede"가 되며, 이때의 길이가 14로 가장 짧습니다
*/
console.log(solution('xababcdcdababcdcd')); // 17 // 이 경우 어떻게 문자열을 잘라도 압축되지 않음
console.log(solution('wabcabczyzyzy')); // w2abczazaza // 13

// ////////////////////////////////////////////////////////////////////////

// aaaacbbbbbbccc?
// 1단위: 4ac6b3c
// 2단위 : 2aac3bbccc
// 3단위 : aaaac2bbbccc

// wabcabczzz
// 3단위

// w2abczzz

// s 가 주어지면 1 ~ s.length 까지를 확인하면 됨
// 압축 길이: x, s 는 입력 문자열
// 입력 1번을 생각해 보자

/*
const s = 'wabcabczzz';
let result = '';

for (let i = 3; i <= s.length; i++) {
  let cnt = 0;

  for (let j = 0; j < s.length; j++) {
    const part = s.slice(j, j + i);

    for (let x = j + i; x < s.length - i; x += part.length) {
      const comp = s.slice(x, x + i);

      if (comp.length !== i) {
        break;
      }

      if (part === comp) {
        cnt += 1;
        continue;
      } else {
        if (cnt > 1) {
          result += `${cnt}${part}`;
        } else {
          result += s[j];
        }
      }
    }
  }
}

console.log(result);
*/
