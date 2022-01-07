const formEl = document.querySelector('#login-form');
const nameInput = formEl.querySelector('input[type=text]');
const greetingEl = document.querySelector('#greeting');
const todoForm = document.querySelector('#todo-form');
const todoLi = document.querySelector('#todo-list');
const weatherEl = document.querySelector('#weather');
const quoteEl = document.querySelector('#quote');

// 2.기억된 이름이 없으면 이름 입력하게 하는 창
function inputFn() {
  formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = String(nameInput.value);
    localStorage.setItem('username', nameValue);
    formEl.classList.add('hidden');

    renderName(nameValue);
  });
}

// 1. 기억된 이름이 있는지 확인하는 함수
function isStotage() {
  const username = localStorage.getItem('username');
  if (username) {
    renderName(username);
  } else {
    formEl.classList.remove('hidden');
    inputFn();
  }
}

isStotage();

// 3.이름 렌더하는 함수
function renderName(name) {
  greetingEl.innerHTML = `<h3>Hello, ${name}!</h3>`;
  greetingEl.classList.remove('hidden');
  todoForm.classList.remove('hidden');
  todoLi.classList.remove('hidden');
  weatherEl.classList.remove('hidden');
  quoteEl.classList.remove('hidden');
}
