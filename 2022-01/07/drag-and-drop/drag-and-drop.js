const reg = document.querySelector('.green');

// 마우스 위치 - div요소의 위치
let diffX = 0;
let diffY = 0;

// 2. 마우스 드래그 발생시 요소 움직임
function onMouseMove(e) {
  // 마우스의 x,y e.clientX,Y 좌표와 div의 좌표를 구함.
  // transform: translate를 이용해 움직임
  window.requestAnimationFrame(() => {
    /* 모니터 갱신주기에 맞춰서 돔 요소를 변형함.
     js로 html요소의 형태를 "계속적으로" 바꿔야 할때,(예를들면, 위치가 지속적으로 바뀌거나, 몇초마다 계속 너비가 바뀌거나)
     모니터가 화면에 1초당 그릴 수 있는 횟수가 정해져 있기떄문에,
     그 1초안에 30번하는 주기에 맞춰 js를 실행하는게 아니면 횟수가 넘어가도 실행되고 있으면 낭비임,
     따라서 주기에 초과된 횟수가 실행안하게끔 효율적으로 만들게 됨.
     */

    const x = e.clientX; // 움직일때마다 마우스의 x,y위치를 알아냄
    const y = e.clientY;
    // 마우스 좌표와 div까지의 거리(diff)를 구한 후, 마우스 좌표에서 그 거리를 뺴줘야 함. 그래야 div가 마우스버튼 모서리에 놔지지 않게 됨.
    const left = x - diffX;
    const top = y - diffY;

    // 마우스가 움직일때 마다 div의 top,left값을 계속 지정해 준다.
    reg.style.top = `${top}px`;
    reg.style.left = `${left}px`;
  });
}

// 3.마우스 업하면 div안에 있는 마우스무브,업 이벤트 제거
function onMouseUp() {
  // 트랜스폼은 가상의 위치로 이동된 것임. 실제 요소의 offsetLeft,top값이 바뀐게 아님
  // 따라서 마우스 위치를 이용해 요소의 위치를 지정해줌.

  window.removeEventListener('mouseup', onMouseUp);
  window.removeEventListener('mousemove', onMouseMove);
}

// 1.마우스를 눌렀을때 마우스무브,마우스업 이벤트를 걸어줌.
function onMouseDown(e) {
  // 윈도우의 마우스 무브,업 이벤트를 건다

  // offsetX,Y와  offsetLeft 차이? - offsetX,Y는 마우스관련 이벤트고 잘 안씀
  const divX = e.target.offsetLeft; // div요소의 x,y위치를 알아냄
  const divY = e.target.offsetTop;
  const mouseX = e.clientX; // 클릭한 마우스의 x,y위치를 알아냄
  const mouseY = e.clientY;
  diffX = mouseX - divX; // !!!!!!!!!!!
  diffY = mouseY - divY;

  // 마우스 무브,업 이벤트는 윈도우창 전체에 걸어 줌(마우스가 움직이는 좌표를 구해야해서)
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
}

reg.addEventListener('mousedown', onMouseDown);
