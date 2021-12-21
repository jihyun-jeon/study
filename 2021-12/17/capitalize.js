// 1. 각 단어가 대소대소 로 출력되는 함수를 만드시오
function convert(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
  }

  console.log(result);
}
convert('helLo wOrld good');

// 2. 각 단어의 첫번째 글자만 대문자로 만드는 함수를 만드시오.(정규식 이용)
// 방법1) 정규식(치환) 사용
function capitalize1(str) {
  const regexp = /(\w{1})(\w+)/gi;
  const result = str.replace(
    regexp,
    (all, $1, $2) => $1.toUpperCase() + $2.toLowerCase(),
    // helLo(전체), h(첫번째추출) ,elLo(두번째추출)
  );
  console.log(result);
}

capitalize1('helLo wOrld good'); // g글로벌로 써서, 세 단어가 한번에 replace된 값으로 나옴
capitalize1('helLo wOrld good nice');

// 방법2)문자를 하나하나 검사하는 방법
function capitalize2(str) {
  let result = '';
  const s = str.split(' '); // ["helLo", "wOrld", "good"]

  for (let i = 0; i < s.length; i += 1) {
    let idx = '';
    for (let j = 0; j < s[i].length; j += 1) {
      idx += j === 0 ? s[i][j].toUpperCase() : s[i][j].toLowerCase();
    }
    result += `${idx} `;
  }
  console.log(result);
}
capitalize2('helLo wOrld good');
