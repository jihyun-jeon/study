const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('[type=text]');
const ulEL = document.querySelector('#todo-list');

let todoValue = '';
let todoArr = [];

// 0.새로고침시 이미 저장된 todo가 있으면 렌더한 후 시작
const storageArr = JSON.parse(localStorage.getItem('todos'));
if (storageArr !== null) {
  todoArr = storageArr;
  storageArr.forEach(todoRender);
  // ★forEach:배열의 각 요소를 순회하면서 렌더함수(콜백함수)를 각각 호출함 <-콜백함수 이름만 넣어줘도 됨!!
}
// 2.투두리스트 출력
function todoRender(el) {
  const liEl = document.createElement('li');
  liEl.id = el.id;

  const spanEl = document.createElement('span');
  spanEl.innerHTML = el.todo;

  const btnEl = document.createElement('button');
  btnEl.innerHTML = 'X';

  liEl.appendChild(spanEl);
  liEl.appendChild(btnEl);
  ulEL.appendChild(liEl);

  // 4.삭제버튼 // ★li 렌더하면서 이벤트도 같이 렌더로 추가해주는 것임
  btnEl.addEventListener('click', (e) => {
    const removeLi = e.target.parentElement;
    ulEL.removeChild(removeLi);

    todoArr = todoArr.filter((arrEl) => +arrEl.id !== +removeLi.id);
    // ★질문3) 왜 숫자로 바꿔야만 비교가 가능한가?
    saveToDos();
  });
}

// 4.추가 버튼 클릭시
todoForm.addEventListener('submit', (e) => {
  // ★질문2)submit버튼이 아니라 폼에 이벤트 거는이유?
  e.preventDefault();

  todoValue = todoInput.value;
  const addLi = { todo: todoValue, id: Date.now() };
  todoArr.push(addLi);

  todoInput.value = '';

  saveToDos();
  todoRender(addLi);
});

// 3.할일 세이브하는 함수
function saveToDos() {
  localStorage.setItem('todos', JSON.stringify(todoArr)); // ★질문1?? 00
  // ★★★★★localStorage는 텍스트만 추가할 수 있어서 stringify()를 이용해 배열 자체를 텍스트로 만듦
}
