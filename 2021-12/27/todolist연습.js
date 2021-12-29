import { $ } from './util';

// <model>
function TodoItem(desc) {
  this.desc = desc;
  this.isDone = false;
}

TodoItem.prototype.renderItem = function (index) {
  if (this.isDone === true) {
    return `<li><input type="checkbox" data-index="${index}" checked /><s>${this.desc}</s></li>`;
  }
  if (this.isDone === false) {
    return `<li><input type="checkbox" data-index="${index}" /> ${this.desc}</li>`;
  }
  if (this.isDone === 0) {
    return ''; // ""을 안붙이고 그냥 리턴하면 unefined가 나오는 이유????????
  }
};

let todoList = [new TodoItem('장보기')];

// <view>
const appEl = $('#app');
appEl.innerHTML = `
  <div>
    <h2>할 일 추가하기</h2>
    <input type="text" id="desc" placeholder="할일을 적어주세요" style="width:120px;"/>
    <button type="button" id="add">추가</button>
    <button type="button" id="clear">완료된 항목 삭제</button>
  </div>
  <ul id="list"></ul>
  <br>
  <span id="count"></span>
  <hr>
  <b>휴지통</b>
  <ul id="delete"></ul>
  `;

function render() {
  let html = '';
  let all = 0;
  let success = 0;

  for (let i = 0; i < todoList.length; i += 1) {
    html += todoList[i].renderItem(i); // 여기서는 그냥 문자+문자임.
    // ""문자열 + {}객체 => 객체의 프로토타입에 있는 tostring메소드 함수가 실행되어서 연산된다.
    // ★★만약 complete함수 이름이 toString 이였다면 """html +=todolist[i]""" 으로 toString 함수를 자동으로 실행할 수 있음.
    // tostring함수의 내용은 구현해야 쓸 수 있음.
  }

  $('#list').innerHTML = html;

  // 문제2) html 맨 밑에. 전체 n개 중 m개 완료. 라는 텍스트 출력

  for (let i = 0; i < todoList.length; i += 1) {
    const isDoneCheck = todoList[i].isDone;
    if (isDoneCheck === true || isDoneCheck === false) {
      all += 1;
    }
    if (isDoneCheck === true) {
      success += 1;
    }
  }

  $('#count').innerHTML = `${all}개 중 ${success}개 완료`;
}

render();

// <controller>
appEl.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON' || e.target.id === 'clear') {
    return;
  }

  const value = $('#desc').value;
  if (value === '') {
    alert('입력하세요.');
    return;
  }

  todoList.push(new TodoItem(value));

  render(); // model만 수정해서 render을 호출하면 html 화면은 자동으로 그려지게끔 구성해야 함!!!
  $('#desc').value = '';
  $('#desc').focus();
});

$('#list').addEventListener('change', (e) => {
  const item = todoList[e.target.dataset.index]; // 체크박스에만 이벤트 걸리는 방법???

  if (!item) {
    return;
  }

  item.isDone = !item.isDone;

  render();
});

// 문제1) todoList에서 isDone이 true인 모든 요소를 찾아 삭제. render호출
// 문제3) html 맨 밑에. 삭제된 목록 출력
// let deleteList = "";
appEl.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON' || e.target.id === 'add') {
    return;
  }

  // 방법1. 베열 원문을 수정해야 할 땐, 필요한 값만 따로 추려서 렌더해주기.
  const arr = [];
  for (let i = 0; i < todoList.length; i += 1) {
    if (todoList[i].isDone === false) {
      arr.push(todoList[i]);
    }
  }
  todoList = arr;

  // 방법2. 이런식으로
  // for문으로 배열을 돌면서 배열 원본을 수정하는 식은, 오류가 나서 이렇게하면 안됨.
  // 배열의 각 인덱스를 순회할 수가 없음. 인덱스 1이 계속 0으로 되서

  for (let i = 0; i < todoList.length; i += 1) {
    if (todoList[i].isDone === true) {
      todoList.splice(i, 1);
      i -= 1; // 그 배열을 돌면서 그 배열원문을 수정할 땐 항상 i의 length가 바뀌는걸 생각! 따라서 -1 해주기;
    }
  }

  // 방법3.져니가 한거
  // for (let i = 0; i < todoList.length; i++) {
  //   // let isDoneCheck = todoList[i].isDone;  왜 안됨????
  //   if (todoList[i].isDone === true) {
  //     todoList[i].isDone = 0;
  //     deleteList += `<li>${todoList[i].desc}</li>`;
  //     $("#delete").innerHTML = deleteList;
  //   }
  // }

  render();
});
