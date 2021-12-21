// 3.비밀번호 4개리 중 *이 있는 부분에 0~9를 채워서 배열로 반환하는 함수를 만드시오.
// ex. 12*3 //결과 [1203,1213,1223,1233,...1293];

function star(num) {
  const result = [];
  if (num === 0) {
    return [];
  }

  if (num === 1) {
    for (let i = 0; i < 10; i += 1) {
      result.push(`${i}`);
    }
  }

  if (num === 2) {
    for (let i = 0; i < 10; i += 1) {
      for (let l = 0; l < 10; l += 1) {
        result.push(`${i}${l}`);
      }
    }
  }

  if (num === 3) {
    for (let i = 0; i < 10; i += 1) {
      for (let l = 0; l < 10; l += 1) {
        for (let k = 0; k < 10; k += 1) {
          result.push(`${i}${l}${k}`);
        }
      }
    }
  }

  if (num === 4) {
    for (let i = 0; i < 10; i += 1) {
      for (let l = 0; l < 10; l += 1) {
        for (let k = 0; k < 10; k += 1) {
          for (let j = 0; j < 10; j += 1) {
            result.push(`${i}${l}${k}${j}`);
          }
        }
      }
    }
  }
  return result;
}

function password(input) {
  const starCnt = input.match(/\*/g).length;

  const arr = star(starCnt);

  const result = [];

  function replaceAt(str, index, replacement) {
    return (
      str.substr(0, index) +
      replacement +
      str.substr(index + replacement.length)
    );
  }

  for (const str of arr) {
    let inputCopy = input;

    let pos = 0;
    while (inputCopy.indexOf('*') > -1) {
      const idx = inputCopy.indexOf('*');
      inputCopy = replaceAt(inputCopy, idx, str[pos]);
      pos += 1;
    }

    result.push(inputCopy);
  }
  console.log(result);
}
password('*3*4');
