// 1. 오픈 하는 기호일 떈 대응되는 닫는 기호를 stack에 저장해둔다.
// 2. 닫는 기호일 땐, pop메서드를 이용하여 stack의 젤 마지막 기호와 같은지 비교하여
// 3. 같다면 pop사용시 닫는 기호 삭제된 채로 다음 순회로 넘어가고, 다르다면 false반환

const isValid = s => {
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      stack.push(')');
    } else if (s[i] === '{') {
      stack.push('}');
    } else if (s[i] === '[') {
      stack.push(']');
    } else if (stack.pop() !== s[i]) {
      return false; // 함수가 종료되서 다음 for문 돌지도 않게됨
    }
  }

  return !stack.length;
};

// < 실행코드 >
// console.log(isValid('()')); //  true
// console.log(isValid('()[]{}')); //  true
// console.log(isValid('(]')); //  false
// console.log(isValid('(]{}')); //  false
// console.log(isValid('([])')); //  true
