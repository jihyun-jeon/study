// <클래스화>
// 실행코드
// new DragAndDrop(this.el, { handle: this.el.querySelector('.handle') });
import { EventEmitter } from './event-emitter';

export class DragAndDrop {
  /**
   * noteEl이 string 일 때가 있고. HTMLElement 의 인스턴스일 때가 있다
   * handleEl.handle 이 string일 때가 있고. HTMLElement일 때도 있다
   */
  constructor(noteEl, handleEl) {
    this.noteEl = noteEl;
    this.left = this.noteEl.offsetLeft;
    this.top = this.noteEl.offsetTop;

    this.handleEl = handleEl.handle;
    this.noteEl.style.position = 'absolute';
    this.diffX = 0;
    this.diffY = 0;
    this._mouseDown = this.mouseDown.bind(this);
    this.handleEl.addEventListener('mousedown', this._mouseDown);

    //
    this.events = new EventEmitter();
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
      this.left = x - this.diffX;
      this.top = y - this.diffY;

      // 마우스가 움직일때 마다 div의 top,left값을 계속 지정해 준다.
      this.noteEl.style.top = `${this.top}px`;
      this.noteEl.style.left = `${this.left}px`;
    });
  }

  onMouseUp() {
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('mouseup', this._onMouseUp);
    this.events.emit('move'); // m3 - 마우스무브 이벤트가 발생됨을 노트에게 알림.
  }

  getPos() {
    return [this.left, this.top];
  }

  setPos(x, y) {
    this.left = x;
    this.top = y;
    this.noteEl.style.top = `${y}px`;
    this.noteEl.style.left = `${x}px`;
  }

  deleteFn() {
    this.handleEl.removeEventListener('mousedown', this._mouseDown);
  }
}
