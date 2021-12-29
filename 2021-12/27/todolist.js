import { $ } from './util';

/** model */
function TodoItem(desc) {
  this.desc = desc;
  this.isDone = false;
}
TodoItem.prototype.renderItem = function (i) {
  if (this.isDone === false) {
    return `<li><input type="checkbox" data-num=${i}><span>${this.desc}</span></li>`;
  }
  if (this.isDone === true) {
    return `<li><input type="checkbox" data-num=${i} checked><span><s>${this.desc}</s></span></li>`;
  }
  // if (this.isDone === 0) {
  //   return `<li><input type="checkbox"/><span>${this.desc}</span>/li>`;
  // }
};

let todoList = [new TodoItem('장보기')];

/** view */
const appEl = $('#app');
appEl.innerHTML = `
<h2>할 일 추가하기</h2>
<input type="text" id="desc" required placeholder="할 일을 적어주세요." />
<button type="button" id="add">추가</button>
<button type="button" id="clear">완료된 항목 삭제</button>
<ul id="list"></ul>
<span id="count"></span>
<br>
<hr />
<b>휴지통</b>
<ul id="delete"></ul>
`;

function render() {
  let result = '';
  for (let i = 0; i < todoList.length; i += 1) {
    result += todoList[i].renderItem(i);
  }
  $('#list').innerHTML = result;

  // 총갯수,완료갯수 카운트
  const all = todoList.length;
  const complete = todoList.filter((el) => el.isDone === true).length;
  $('#count').innerHTML = `총 ${all}개 중 ${complete}개 완료`;
}
render();

/** control */
const inputEl = $('#desc');
const addEl = $('#add');
const listEl = $('#list');
const clearEl = $('#clear');

// 리스트 추가버튼
addEl.addEventListener('click', () => {
  if (inputEl.value === '') {
    return;
  }
  todoList.push(new TodoItem(inputEl.value));
  inputEl.value = '';
  inputEl.focus();
  render();
});

// 체크박스 버튼
listEl.addEventListener('change', (e) => {
  if (e.target.nodeName !== 'INPUT') {
    return;
  }
  const num = e.target.dataset.num;
  todoList[num].isDone = !todoList[num].isDone;
  render();
});

// 완료항목 삭제
const arrDelete = [];

clearEl.addEventListener('click', () => {
  const arrDoing = [];
  for (let i = 0; i < todoList.length; i += 1) {
    if (todoList[i].isDone === false) {
      arrDoing.push(todoList[i]);
    } else {
      arrDelete.push(todoList[i]);
    }
  }
  todoList = arrDoing;
  render(todoList);

  deleteRender(arrDelete);
});

function deleteRender(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    result += arr[i].renderItem(i);
  }
  $('#delete').innerHTML = result;
}
