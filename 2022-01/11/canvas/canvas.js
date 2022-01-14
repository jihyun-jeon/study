// <1. 기본값 지정>
const canvas = document.querySelector('#jsCanvas');
// canvas는: 컨텍스트를 갖고 있는 html 요소임.
// 컨텍스트란:'canvas 안에서 픽셀을 다루는 것'임
const ctx = canvas.getContext('2d'); // 컨텍스트를 만듦(2d 그래픽으로 설정) - 컨텍스트는 픽셀을 다루는 연필을 주는 것 같은거

// canvas의 너비,높이를 지정해줘야 함 - 1)css사이즈 랑 2)html에도 사이즈를 적용해줘야 함.
// 1.css사이즈  : 뷰포트(스케치북)의 크기는,캔버스 엘리먼트 자체의 크기는 css에서 지정,
// 2.html사이즈 : 캔버스는 픽셀을 다룰 수 있는 요소로써 만들어져서, 픽셀 요소에 크기를 따로 지정해 줘야 함.
//             : 픽셀을 다루는 윈도우가 얼마나 큰지 캔버스에게 알려주기 위한 것
canvas.width = 700; // pixel-manipulating-size // 픽셀에 대한 사이즈임.
canvas.height = 700;

// 캔버스의 배경색을 기본값으로 흰색으로 줌
ctx.fillStyle = 'white'; // 질문1)css 배경색과 뭐가 다른지? 질문2)canvas가 아니라 ctx에 하는 이유?
ctx.fillRect(0, 0, 700, 700);
// painting 기본값 - 아래 fillRect 사용시 기본값으로 굅.
ctx.fillStyle = '#2c2c2c';
// (선 기본색-검정) 도형의 윤곽선의 색이나 스타일을 설정합니다.
ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5; // 선의 두께 기본 설정함

// 2.<렌더 할 수 있는 경우 설정.>
let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(e) {
  /* <마우스 위치를 나타내는 것들>
  clientX ,clientY : 브라우저 창 기준으로 좌표를 표시함 // 전체 윈도우 내에서의 마우스의 위치
  offsetX, offsetY : 이벤트가 걸려 있는 DOM객체를 기준으로 좌표를 표시함 // 캔버스 내에서의 마우스 위치
  screenX, screenY : 전체 모니터 스크린 기준으로 좌표를 표시함
   */
  //  offsetX,Y는 마우스관련 이벤트, offsetLeft는 요소의 위치를 나타내는 좌표

  // 캔버스 안에서의 마우스의 위치를 알아야 함
  const x = e.offsetX;
  const y = e.offsetY;

  if (!painting) {
    // <false일때: 경로를 만드는 기능>
    // <true일때: 경로를 그리는 기능>
    /*
    질문2) !painting일때 어떻게 실행되는지 모르겠음 ?????
    ctx.beginPath(); //경로 생성
    ctx.moveTo(x, y); //선 시작 좌표(시작점은 처음에 마우스다운한 한 곳임.)
    ctx.lineTo(x, y); //선 끝 좌표(계속 그릴수록 옮겨짐.)
    ctx.stroke(); //선 그리기
    */
    ctx.beginPath(); // 새로운 path(경로)를 생성함. 선의 시작점을 만드는 것
    ctx.moveTo(x, y); // path를 지정된 x,y로 옮깁니다. <-펜의 위치를 x,y로 지정해줘야 그릴떄 시작될 위치를 지정할 수 있음.
  } else {
    ctx.lineTo(x, y); // 현재의 path의 마지막 점(moveto에서 끝난 x,y)을 지정된 lineto의 x,y 까지 직선으로 연결함.
    ctx.stroke(); // 윤곽선을 이용하여 도형을 그립니다. 현재의 strokestyle 검정색으로 끝점에 획을 그음
  }
}

function handleCM(e) {
  e.preventDefault(); // 우클릭 방지
}

canvas.addEventListener('mousemove', onMouseMove); /* 마우스가 움직일 떄 */
canvas.addEventListener('mousedown', startPainting); /* 마우스 버튼을 누를떄 */
// click은 마우스를 눌렀다 뗄때 발생함(mousedown ->  mouseup -> click 순임)
canvas.addEventListener('mouseup', stopPainting); /* 마우스 버튼을 떌 때 */
/* 마우스가 요소의 경계에서 외부로 이동할 떄 */
canvas.addEventListener('mouseleave', stopPainting);
/* <이미지 저장> */
canvas.addEventListener('contextmenu', handleCM); // contextmenu <-우클릭시

// 3.<각 컬러에 이벤트를 줌>
const colors = document.querySelectorAll('.jsColor');
const colorArr = Array.prototype.slice.call(colors);

function changeColor(e) {
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color; // 도형의 윤곽선 색을 설정합니다.
  ctx.fillStyle = color; // 도형을 채우는 색을 설정합니다. <-fill 버튼 누를 시 fillRect에 적용됨.
}

colorArr.forEach((el) => {
  el.addEventListener('click', changeColor);
});

// 4.<브러시 사이즈>
const jsRangeEl = document.querySelector('#jsRange');

function rangeChange(e) {
  ctx.lineWidth = e.target.value;
}

jsRangeEl.addEventListener('input', rangeChange);

// 5.<fill,paint 버튼>
const jsModeEl = document.querySelector('#jsMode');

let filling = false;

function modeClick() {
  if (filling) {
    jsModeEl.innerHTML = 'Fill';
    filling = false;
  } else {
    jsModeEl.innerHTML = 'Paint';
    filling = true;
  }
}

jsModeEl.addEventListener('click', modeClick);

// 6.<fill버튼 누른 후에, 캔버스에 색 채워지도록>
// fillstyle로 채울 색 지정 후, fillrect로 채울 위치 지정하면 그 위치에 지정한 색이 채워짐.
// ctx.fillStyle = 'green';
// ctx.fillRect(100, 100, canvas.width, canvas.height);
function canvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // 색이 채워진 사각형을 그림 // fillRect(x,y,width,height) <-캔버스 내에서의 x,y좌표. 사각형의 너비,높이;
  }
}

canvas.addEventListener('click', canvasClick);

// 7.<save button>
const jsSaveEl = document.querySelector('#jsSave');

function saveClick() {
  const a = document.createElement('a');
  const link = canvas.toDataURL('image/png'); // canvas의 그림을 url로 리턴하는 메소드. png가 기본값임.
  a.href = link;
  a.download = 'paintImg✌️'; // download는 a 태그의 속성임
  // console.log(a); // <a href="url주소" download="이미지 저장시 이름" ></a>
  a.click(); // 질문2) click메서드 뭔지???? - 엘리먼트에 클릭이벤트를 발생시키는 것임(a태그가 클릭되는 것)
}

jsSaveEl.addEventListener('click', saveClick);
