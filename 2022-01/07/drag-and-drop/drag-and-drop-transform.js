const reg = document.querySelector('.green');

// 마우스 위치 - div요소의 위치
let diffX = 0;
let diffY = 0;
let upLeft = 0;
let upTop = 0;

// 1.마우스를 눌렀을때 마우스무브,마우스업 이벤트를 걸어줌.
function onMouseDown(e) {
  // console.log(e.target.style.transform); // translate(122px, 135px)
  // 처음 mouseDown시 지정된 트랜스폼이 없어서 null이 나옴. 따라서 null이면 []나오게끔 변수 지정.
  // let [x] = [1]; <- 배열 x의 값인 1이 나오게 됨.
  let [, x, y] = e.target.style.transform.match(/(\d+)px,\s?(\d+)/) || [];

  // 처음에 x,y가 []이면, 그 빈배열의 값은 undefined임. 그러면 e.target의 위치로 값나오게끔.
  x = typeof x === 'undefined' ? e.target.offsetLeft : +x;
  y = typeof y === 'undefined' ? e.target.offsetTop : +y;

  const mouseX = e.clientX; // 클릭한 마우스의 x,y위치를 알아냄
  const mouseY = e.clientY;
  diffX = mouseX - x;
  diffY = mouseY - y;

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
}

reg.addEventListener('mousedown', onMouseDown);

// 2. 마우스 드래그 발생시 요소 움직임
function onMouseMove(e) {
  window.requestAnimationFrame(() => {
    const left = e.clientX;
    const top = e.clientY;
    upLeft = left - diffX;
    upTop = top - diffY;
    // 마우스로 요소를 이동시킨 위치로 요소의 위치를 지정해 줌.
    reg.style.transform = `translate(${upLeft}px,${upTop}px)`;
  });
}

// 3.마우스 업하면 div안에 있는 마우스무브,업 이벤트 제거
function onMouseUp() {
  window.removeEventListener('mouseup', onMouseUp);
  window.removeEventListener('mousemove', onMouseMove);
}
