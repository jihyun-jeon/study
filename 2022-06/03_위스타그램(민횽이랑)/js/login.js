const formEl = document.querySelector('form');
const btnEl = document.querySelector('button');
const userId = document.querySelector('#userId');
const userPw = document.querySelector('#userPassword');
const fieldEl = document.querySelector('.field');

formEl.addEventListener('input', (e) => {
  const fieldEl = e.target.closest('.field');

  if (e.target.value) {
    fieldEl.classList.add('hasValue');
  } else {
    fieldEl.classList.remove('hasValue');
  }
});

formEl.addEventListener('input', (e) => {
  e.preventDefault();

  if (e.target.tagName !== 'INPUT') {
    return;
  }

  if (userId.value && userPw.value.length >= 6) {
    btnEl.removeAttribute('disabled');
  } else {
    btnEl.disabled = true;
  }
});

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  if (btnEl.disabled) {
    return;
  }

  location.href = 'main.html';
});

// 1. < input에 값이 입력되면 버튼 활성화 되기 >
// 0) [p1]- input 이벤트는 <input>, <select> 및 <textarea> 요소의 value 속성이 바뀔 때마다 발생한다.
// formEl.addEventListener("input", (e) => {
//   // 1) 로그인 버튼 활성화
//   if (userId.value && userPw.value) {
//     btnEl.style.backgroundColor = "";
//   } else {
//     btnEl.style.backgroundColor = "#c0dffd";
//   }

//   // 2) input에 값 하나라도 입력되면 회색으로
//   if (userId.value) {
//     userId.style.borderColor = "#ddd";
//   }

//   if (userPw.value) {
//     userPw.style.borderColor = "#ddd";
//   }
// });

// // 2. < id pw 유효성 검사 >
// formEl.addEventListener("submit", (e) => {
//   console.log("123");
//   e.preventDefault();

//   if (userId.value.length === 0 || userPw.value.length === 0) {
//     return;
//   }

//   // 아이디 유효성
//   if (userId.value.length < 4 || !userId.value.includes("@")) {
//     userId.value = "";
//     userId.placeholder = "@포함 4글자 이상 입력하세요";
//     userId.style.borderColor = "red";
//   }

//   // 비번 유효성
//   if (userPw.value.length < 4) {
//     userPw.value = "";
//     userPw.placeholder = "비밀번호 4글자 이상 입력하세요";
//     userPw.style.borderColor = "red";
//   }

//   // 버튼 누르면 main창 연동
//   if (userPw.value.length >= 4 && userId.value.length >= 4) {
//     location.href = "main.html";
//   }
// });

// <id 기억하기>
window.addEventListener('pageshow', () => {
  if (userId.value || userPw.value) {
    fieldEl.classList.add('hasValue');
  }
});
