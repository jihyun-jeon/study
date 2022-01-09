/*
// <생성자 함수 이용>
function DragAndDrop(el) {
  this.el = document.querySelector(el);
  this.el.style.position = 'absolute';
  this.diffX = 0;
  this.diffY = 0;
  this.el.addEventListener('mousedown', this.mouseDown.bind(this));
}

DragAndDrop.prototype.mouseDown = function (e) {
  const divX = e.target.offsetLeft; // div요소의 x,y위치를 알아냄
  const divY = e.target.offsetTop;
  const mouseX = e.clientX; // 클릭한 마우스의 x,y위치를 알아냄
  const mouseY = e.clientY;
  this.diffX = mouseX - divX; // !!!!!!!!!!!
  this.diffY = mouseY - divY;

  // p1)bind를 안걸어주면 onMouseMove메서드의 this가 window로 됨. bind(this)를 걸어주면 this는 onMove메서드 안에 this로 지정됨.
  // p2)메서드.bind로 실행하여 리턴된 함수는, 생성자함수의 프로토타입 객체안에 있는 메서드와 다른 메모리값에 저장됨.
  // 따라서 두 함수는 다른 함수이므로 따로 인스턴스 객에안에 새로운 프로퍼티로 만들어줌.
  this._onMouseMove = this.onMouseMove.bind(this);
  this._onMouseUp = this.onMouseUp.bind(this);

  window.addEventListener('mousemove', this._onMouseMove);
  window.addEventListener('mouseup', this._onMouseUp);
};

DragAndDrop.prototype.onMouseMove = function (e) {
  window.requestAnimationFrame(() => {
    const x = e.clientX; // 움직일때마다 마우스의 x,y위치를 알아냄
    const y = e.clientY;
    // 마우스 좌표와 div까지의 거리(diff)를 구한 후, 마우스 좌표에서 그 거리를 뺴줘야 함. 그래야 div가 마우스버튼 모서리에 놔지지 않게 됨.
    const left = x - this.diffX;
    const top = y - this.diffY;

    // 마우스가 움직일때 마다 div의 top,left값을 계속 지정해 준다.
    this.el.style.top = `${top}px`;
    this.el.style.left = `${left}px`;
  });
};

DragAndDrop.prototype.onMouseUp = function () {
  window.removeEventListener('mousemove', this._onMouseMove);
  window.removeEventListener('mouseup', this._onMouseUp);
};

// 실행코드
const d1 = new DragAndDrop('.green');
const d2 = new DragAndDrop('.red');
*/

/*
// <클래스화>
class DragAndDrop {
  constructor(el) {
    this.el = document.querySelector(el);
    this.el.style.position = 'absolute';
    this.diffX = 0;
    this.diffY = 0;
    this.el.addEventListener('mousedown', this.mouseDown.bind(this));
  }

  mouseDown(e) {
    const divX = e.target.offsetLeft; // div요소의 x,y위치를 알아냄
    const divY = e.target.offsetTop;
    const mouseX = e.clientX; // 클릭한 마우스의 x,y위치를 알아냄
    const mouseY = e.clientY;
    this.diffX = mouseX - divX; // !!!!!!!!!!!
    this.diffY = mouseY - divY;

    // bind를 안걸어주면 onMouseMove메서드의 this가 window로 됨.
    // bind로 실행한 메서드는 생성자함수의 프로토타입 객체안에 있는 메서드와 다른 메모리값에 새로 생긴 함수여서, 따로 인스턴스 객에안에 프로퍼티로 만들어줌.
    this._onMouseMove = this.onMouseMove.bind(this);
    this._onMouseUp = this.onMouseUp.bind(this);

    window.addEventListener('mousemove', this._onMouseMove);
    window.addEventListener('mouseup', this._onMouseUp);
  }

  onMouseMove(e) {
    window.requestAnimationFrame(() => {
      const x = e.clientX; // 움직일때마다 마우스의 x,y위치를 알아냄
      const y = e.clientY;
      // 마우스 좌표와 div까지의 거리(diff)를 구한 후, 마우스 좌표에서 그 거리를 뺴줘야 함. 그래야 div가 마우스버튼 모서리에 놔지지 않게 됨.
      const left = x - this.diffX;
      const top = y - this.diffY;

      // 마우스가 움직일때 마다 div의 top,left값을 계속 지정해 준다.
      this.el.style.top = `${top}px`;
      this.el.style.left = `${left}px`;
    });
  }

  onMouseUp() {
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseup', this._onMouseUp);
  }
}

// 실행코드
const d1 = new DragAndDrop('.green');
const d2 = new DragAndDrop('.red');
*/
