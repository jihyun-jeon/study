export class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(name, fn) {
    // 이벤트 등록, 이후 emit으로 이벤트 발생을 알리면 on에 등록된 함수가 실행됨.
    this.events[name] = fn;
  }

  off(name) {
    // ㅅ
    delete this.events[name];
  }

  emit(name, data) {
    // 이벤트 발생을 알리는 역활
    const x = this.events[name];

    if (typeof x === 'function') {
      x(data);
    }
  }
}

class DragAndDrop {
  constructor() {
    this.events = new EventEmitter(); // <0> 마우스업이 된 이벤트를 노트에게 알리기 위해 이벤트이미터 갖게됨.
  }

  onMouseUp() {
    this.events.emit('move'); // <1>
  }
}

class Note {
  constructor() {
    this.events = new EventEmitter(); // 노트에서 delete 발생을 노트리스트에게 알리기 위해 노트에 이미터 갖게됨.
    // 0.각 노트에 이미터를 걸어 노트리스트가 알게끔 해줌.

    this.dnd = new DragAndDrop();
    this.dnd.events.on('move', () => {
      // <2>
      this.events.emit('move');
      // <3>
    });
  }

  onClickDelete() {
    this.events.emit('delete', this.id); // [2].노트의 삭제버튼 누르면 delete키값에 등록된 함수 찾아서 노트리스트에서 등록해준 함수 실행됨.
    this.events.off('delete');
    this.dnd.deleteFn();
  }
}

class NoteList {
  constructor() {
    this.notes = [];
  }

  onClickAdd() {
    const note = new Note();

    note.events.on('delete', (id) => {}); // [1].delete 이벤트 발생시 실행될 함수를 등록해줌
    note.events.on('move', () => this.save()); // <0><4>
  }
}
