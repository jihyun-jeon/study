// < 나의 풀이 >
// 해당 단어가 있으면 그 단어를 없애가면서 찾음
function solution(babbling) {
  const possible = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i]; // aya ye

    for (let j = 0; j < possible.length; j++) {
      const posWord = possible[j];
      if (word.includes(posWord)) {
        word = word.split(posWord).reduce((acc, cur) => `_${acc}` + `_${cur}`);
      }
    }

    if (!word.split('_').reduce((acc, cur) => acc + cur)) {
      count++;
    }
  }

  return count;
}

// < 다른사람 풀이 > --------------------------------------------------------------------------------
// 단어의 글자 하나하나를 더하면서 해당 문자가 있는지 확인
function solution(babbling) {
  const wordSet = new Set(['aya', 'ye', 'woo', 'ma']);
  let result = 0;

  for (const word of babbling) {
    let remainWord = ''; // a ay aya """ y ye
    let prevWord = ''; // aya ye

    for (const char of word) {
      remainWord += char; // char = a y a y e

      if (wordSet.has(remainWord)) {
        if (remainWord === prevWord) {
          break;
        } else {
          prevWord = remainWord;
          remainWord = '';
        }
      }
    }

    if (remainWord === '') {
      result++;
    }
  }
  return result;
}

// <다른 사람 풀이2 > --------------------------------------------------------------------------------
// 정규식 활용 방법
function solution(babbling) {
  let count = 0;
  const reg = /^(aya|ye|woo|ma)*$/;

  babbling.forEach(word => {
    if (reg.test(word)) {
      count++;
    }
  });

  return count;
}

// < 실행코드 >
console.log(solution(['wyeoo'])); // 0
// console.log(solution(['ayaye'])); // 1 // "aya+ye"
// console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo'])); // 1 // "aya+ye"
// console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])); // 3 // "aya+ye" , "ye" , "ye+ma+woo"
