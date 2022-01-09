// <클래스화>
class DragAndDrop {
  constructor(noteEl, handleEl) {
    this.noteEl = document.querySelector(noteEl);
    this.handleEl = this.noteEl.querySelector(handleEl.handle);

    this.noteEl.style.position = 'absolute';
    this.diffX = 0;
    this.diffY = 0;
    this._mouseDown = this.mouseDown.bind(this);
    this.handleEl.addEventListener('mousedown', this._mouseDown);
    // 삭제기능
    this.deleteEl = this.noteEl.querySelector('button');
    this.deleteEl.addEventListener('click', this.deleteFn.bind(this));
  }

  mouseDown(e) {
    const divX = this.noteEl.offsetLeft; // div요소의 x,y위치를 알아냄
    const divY = this.noteEl.offsetTop;
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
      this.noteEl.style.top = `${top}px`;
      this.noteEl.style.left = `${left}px`;
    });
  }

  onMouseUp() {
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseup', this._onMouseUp);
  }

  // 삭제기능
  deleteFn() {
    this.handleEl.removeEventListener('mousedown', this._mouseDown);
    // 걸어져 있는 이벤트는 걸어준다.
    this.noteEl.remove();
  }
}

// 실행코드
const d1 = new DragAndDrop('.one', { handle: '.handle' });
const d2 = new DragAndDrop('.two', { handle: '.handle' });
