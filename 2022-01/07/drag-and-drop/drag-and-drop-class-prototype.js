function DragAndDrop(el) {
  this.el = document.querySelector(el);
  this.diffX = 0;
  this.diffY = 0;
  this.upLeft = 0;
  this.upTop = 0;
  this.el.addEventListener('mousedown', this.mouseDown.bind(this));
  // 이벤트 핸들러 안의 콜백함수가 실행될 때의 this는 : 그 이벤트를 바인딩 한 html 돔 엘리먼트가 this가 된다.
  // 콜백함수가 실행될 떄, 그 콜백함수 내의 this는 이벤트가 걸린 요소인 this.el 됨.
  // 근데 mouseDown함수내의 this는 인스턴스객체 여야 하므로로, bind로 this를 지정해줌, 함수가 실행까진 안되도록 bind 씀
  // bind("this")에서의 this는 mousedown 메서드 내에서의 this인 "인스턴스 객체"가 됨
  //
  // 근데, mouseDown가 화살표 함수라면: 자신을 감싸고 있는 컨텍스트의 this로 됨. 즉, 한단계 위의 this로 지정됨
  // 그래서 mouseDown의 this는 window가 되버려서 이렇게하면 오류남!
  // 따라서 프로토타입 기반으로 이벤트랜들러를 걸떄는 에로우 함수로 하면 안됨!
}

DragAndDrop.prototype.mouseDown = function (e) {
  let [, x, y] = e.target.style.transform.match(/(\d+)px,\s?(\d+)/) || [];

  // 처음에 x,y가 []이면, 그 빈배열의 값은 undefined임. 그러면 e.target의 위치로 값나오게끔.
  x = typeof x === 'undefined' ? e.target.offsetLeft : +x;
  y = typeof y === 'undefined' ? e.target.offsetTop : +y;

  const mouseX = e.clientX; // 클릭한 마우스의 x,y위치를 알아냄
  const mouseY = e.clientY;
  this.diffX = mouseX - x;
  this.diffY = mouseY - y;
  console.log(this.diffX, this.diffY);

  // bind로 실행한 메서드는 프로토타입 메서드와 다른 메모리로 저장됨. 따라서 이 두 함수는 각각 다른 것임.
  // 따라서 bind로 실행한 메서드를 인스턴스 객체의 새로운 프로퍼티로 지정하여 사용해야 함.
  this._onMouseMove = this.onMouseMove.bind(this);
  this._onMouseUp = this.onMouseUp.bind(this);
  window.addEventListener('mousemove', this._onMouseMove);
  window.addEventListener('mouseup', this._onMouseUp);
};

DragAndDrop.prototype.onMouseMove = function (e) {
  window.requestAnimationFrame(() => {
    const left = e.clientX;
    const top = e.clientY;
    this.upLeft = left - this.diffX;
    this.upTop = top - this.diffY;
    // 마우스로 요소를 이동시킨 위치로 요소의 위치를 지정해 줌.
    this.el.style.transform = `translate(${this.upLeft}px,${this.upTop}px)`;
  });
};

DragAndDrop.prototype.onMouseUp = function () {
  window.removeEventListener('mouseup', this._onMouseUp);
  window.removeEventListener('mousemove', this._onMouseMove);
};

// 실행코드
const d1 = new DragAndDrop('.green');

const d2 = new DragAndDrop('.red');
