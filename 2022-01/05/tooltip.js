/* eslint-disable no-loop-func */
// 특정 규칙에 대해서만 eslint 비활성화 하는 법

// 1.data-tooltip 속성이 있는 요소들을 배열로 받아옴.
const btnsEL = document.querySelectorAll('[data-tooltip]');
const btnsArr = Array.prototype.slice.call(btnsEL);

for (const btn of btnsArr) {
  // title 속성은 기본값으로 툴팁이 나오게 되있음, 그래서 내가 구현한 툴팁이랑 중복해서 나오므로, 기본 툴팁속성을 제거해 줌
  // 2. title속성이 있으면 그 title속성을 data-title로 바꿔줌
  const titleValue = btn.getAttribute('title');
  if (titleValue) {
    btn.setAttribute('data-title', titleValue); // 속성이름과 값을 한번에 설정하능 함.
    btn.removeAttribute('title');
  }

  let divEL = '';

  // 3. 마우스 버튼에 올렸을때 새로운 div요소가 젤 밑에 만들어지고, 그 div는 버튼 위에 트랜스폼으로 나타나게 됨.
  btn.addEventListener('mouseenter', (e) => {
    const { title } = e.target.dataset; // title = e.target.dataset.title;
    divEL = document.createElement('div');
    // 1)div 안에 툴팁 클래스명 넣음
    divEL.classList.add('tooltip');
    // 2)div 안에 텍스트 넣음.
    divEL.innerHTML = title;

    // 3)div 안에 툴팁위치 조절 스랜트폼 css 넣음
    const left = btn.offsetLeft; // offset00 는 전체 브라우져창 기준으로 x,y위치를 찾음
    const right = btn.offsetTop - (22 + divEL.offsetHeight);
    divEL.style.transform = `translate(${left}px, ${right}px)`;

    // 4)바디 젤 밑으로 렌더
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
    // 5)div 렌더된 후, 클래스명 추가하여 트랜스폼 작동시킴
    setTimeout(() => divEL.classList.add('show'), 20);
  });

  // 4. 마우스를 버튼에서 내리면, data-title의 값이 사라짐
  btn.addEventListener('mouseleave', (e) => {
    document.body.removeChild(divEL);
  });
}
