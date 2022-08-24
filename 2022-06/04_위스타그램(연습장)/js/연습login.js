const formEl = document.querySelector('form');
const userIdEl = document.querySelector('#userId');
const userPwEl = document.querySelector('#userPw');
const loginBtn = document.querySelector('button');
const fieldEl = document.querySelector('.field');

// 1. input창에 값 하나라도 입력시 scale 조절하기
formEl.addEventListener('input', (e) => {
  if (e.target.tagName !== 'INPUT') {
    return;
  }

  const fieldEl = e.target.closest('.field');

  if (userIdEl.value || userPwEl.value) {
    fieldEl.classList.add('hasValue');
  } else {
    fieldEl.classList.remove('hasValue');
  }
});

// 2. 아이디,비번 유효성 검사 후 버튼 활성화하기
formEl.addEventListener('input', (e) => {
  if (e.target.tagName !== 'INPUT') {
    return;
  }

  if (userIdEl.value.length && userPwEl.value.length >= 6) {
    loginBtn.removeAttribute('disabled'); // 활성화
  } else {
    loginBtn.disabled = true; // 비활성화
  }
});

// 3. 아디,비번 유효성에 맞으면, 버튼 누를시 메인창으로 넘어가기
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!loginBtn.disabled) {
    // 버튼이 활성화 상태일 때만 실행
    location.href = '연습main.html';
  }
});

/*
 * disabled="true" <-비활성화 상태
 * disabled="false" <-활성화 상태
 */

// <메인 창에서 로그인 창으로 뒤로가기 해도 아이디값 기억하고 있기>
window.addEventListener('pageshow', () => {
  if (userIdEl.value) {
    fieldEl.classList.add('hasValue');
  }
});
