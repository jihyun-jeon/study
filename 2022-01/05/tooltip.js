/* eslint-disable no-loop-func */

// 특정 규칙에 대해서만 eslint 비활성화 하는 법
const btnsEL = document.querySelectorAll('[data-tooltip]');
const btnsArr = Array.prototype.slice.call(btnsEL);

let divEL = '';

for (const btn of btnsArr) {
  //
  const titleValue = btn.getAttribute('title');
  if (titleValue) {
    btn.setAttribute('data-title', titleValue); // 속성이름과 값을 한번에 설정하능 함.
    btn.removeAttribute('title');
  }

  btn.addEventListener('mouseenter', (e) => {
    const { title } = e.target.dataset; // title = e.target.dataset.title;
    divEL = document.createElement('div');
    divEL.classList.add('tooltip');

    const left = btn.offsetLeft; // offset00 는 전체 브라우져창 기준으로 위치를 찾음
    const right = btn.offsetTop - (22 + divEL.offsetHeight);
    divEL.style.transform = `translate(${left}px, ${right}px)`;
    divEL.innerHTML = title;

    document.body.appendChild(divEL);

    // divEL.classList.add('show')
    /*
    여기서 show를 넣으면 트랜지션 작동하지 않는 이유?opacity
    :함수가 실행되는 동안은 브라우저에 아직 div가 렌더되지 않았음. <이유1: 함수가 다 끝나야 div요소가 innerHTML됨.>
     (show를 넣은 코드 순서가 innerHTML 밑에 있다고 해서 이미 생성된 div에 show를 넣는 과정이 아님!)
     따라서 div를 렌더하는 과정에서서 이미 show를 넣어주면 div가 바뀐게 없어서 트랜지션 작동x
    */

    // transition 이벤트 추가
    // 처음엔 show라는 클래스가 없는 상태로 div생성 후, 그 div에 클래스가 추가되면 css transition이 동작됨 <이유2: 시간차를 두고 바뀐게 있음!>
    setTimeout(() => divEL.classList.add('show'), 20);
  });

  btn.addEventListener('mouseleave', (e) => {
    document.body.removeChild(divEL);
  });
}
