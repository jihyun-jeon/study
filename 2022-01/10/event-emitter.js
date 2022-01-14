export class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(name, fn) {
    // 이벤트 등록, 이후 emit으로 이벤트 발생을 알리면 on에 등록된 함수가 실행됨.
    this.events[name] = fn;
  }

  emit(name, data) {
    // 이벤트 발생을 알리는 역활
    const x = this.events[name];

    if (typeof x === 'function') {
      x(data);
    }
  }

  off(name) {
    delete this.events[name];
  }
}

class DragAndDrop {
  constructor() {
    this.events = new EventEmitter(); // m1 - 드래그앤드롭에서 마우스무브 이벤트 발생시, 노트에게 알리기 위해 이벤트이미터 갖게됨.
  }

  onMouseUp() {
    this.events.emit('move'); // m3 - 마우스무브 이벤트가 발생됨을 노트에게 알림.
  }
}

class Note {
  constructor() {
    this.events = new EventEmitter(); // 노트에서 delete 발생을 노트리스트에게 알리기 위해 노트에 이미터 갖게됨.
    // [0].각 노트에 이미터를 걸어 노트리스트가 알게끔 해줌.

    this.dnd = new DragAndDrop();
    // m2(1) - 드래그앤 드롭에서 마우스무브시 실행할 함수를 등록해줌.
    // m4 - 마우스무브 발생시 함수 본문이 실행되어, 노트에서 노트리스트에게 또 마우스무브 이벤트 발생을 알리고, 노트리스트에서 on으로 등록된 함수 실행됨.
    this.dnd.events.on('move', () => {
      this.events.emit('move');
    });
  }

  onClickDelete() {
    this.events.emit('delete', this.id); // d2 - 노트의 삭제버튼 눌렀다는 이벤트 발생을 알림. 그리고 on에서 설정해준 delete키값에 등록된 함수 찾아서 실행됨.
    this.events.off('delete'); // d3 - 그 해당 이벤트-함수 프로퍼티 삭제함
    this.dnd.deleteFn();
  }
}

class NoteList {
  constructor() {
    this.notes = [];
  }

  onClickAdd() {
    const note = new Note(); // d1 - Note 인스턴스가 생기는데, 생길때 이미터 프로퍼티가 추가됨.

    note.events.on('delete', (id) => {}); // d2 - delete 이벤트 발생시 실행될 함수를 등록해줌
    note.events.on('move', () => this.save()); // m2(2) - 노트에서 move 이벤트 발생시 실행될 함수를 노트리스트에서 등록해 줌.
  }
}
