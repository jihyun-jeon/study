/*
1.prompt로 입력받은 값은 "문자열"임.
2.confirm : 사용자에게 확인받고 싶을때.
         : 확인->true, 취소 -> false로 나옴.  */

// 1.몇 명 참가하는지 물어보기
let person = prompt('몇 명이 참가하나요?');

while (person === null) {
  person = prompt('참가자를 입력해주세요! 몇 명이 참가하나요?');
}

// 2.참가자 번호
const numEl = document.querySelector('#num');
let numCnt = 1;
numEl.innerHTML = numCnt;

// 3.input창 입력시 값 가져오기
const inputEl = document.querySelector('input');
let inputValue = '';
inputEl.addEventListener('change', (e) => {
  inputValue = e.target.value;
});

// 4.버튼 누르면 참가자 번호 바뀌는 이벤트
// 4. 끝말잇기 단어 맞는지 검사
const btnEl = document.querySelector('button');
const wordEl = document.querySelector('#word');
let firstTxt = '';
btnEl.addEventListener('click', () => {
  // 끝말잇기 단어 정답인지 아닌지 판단

  if (inputValue[0] === firstTxt || firstTxt === '') {
    firstTxt = inputValue[inputValue.length - 1];
    wordEl.innerHTML = inputValue;

    // 다음 참가지 번호 바뀌게끔
    numCnt += 1;
    if (numCnt > person) {
      numCnt = 1;
    }
    numEl.innerHTML = numCnt;
  } else {
    alert('올바르지 않은 단어입니다!');
  }

  // input내용 제거
  inputEl.value = null;
  inputEl.focus();
});
