import { DragAndDrop } from './drag-and-drop-class-absolute2'; // 그래그앤드롭 파일 가져옴
import { EventEmitter } from './event-emitter';

class Notelist {
  constructor() {
    // [0.note인스턴스 모음]
    this.notes = [];

    // [[1.추가버튼,notelist 생성]]
    this.addBtnEL = document.createElement('button');
    this.addBtnEL.innerHTML = '추가';

    this.list = document.createElement('div');
    this.list.classList.add('list');

    document.body.prepend(this.addBtnEL);
    document.body.append(this.list);

    // [[2.note 추가이벤트 구현]]
    this.addBtnEL.addEventListener('click', this.onClickAdd.bind(this));

    // [3.새로고침시 저장된 내용 받아와서 렌더해줌]
    const storagedNote = localStorage.getItem('noteObj');
    const noteArr = JSON.parse(storagedNote); // [{x,y,text},{}]

    if (noteArr) {
      noteArr.forEach((el) => {
        // 여기는 setData를 해야함
        this.createNote(el);
      });
    }
  }

  save() {
    const noteDataArr = this.notes.map((el) => el.getData());
    localStorage.setItem('noteObj', JSON.stringify(noteDataArr)); // String(this.notes) <-이렇게 하면 인스턴스객체안에 내장된 toString()이 실행되서 배열자체가 문자로 되는게 아니라, 배열 안에있는 요소들이 각각 문자로 나옴.
  }

  onClickAdd() {
    // 여기는 save를 해야함
    this.createNote();
  }

  createNote(el) {
    const note = new Note(this.list);
    this.notes.push(note);

    if (el) {
      note.setData(el.x, el.y, el.text);
    } else {
      this.save(); // 인스턴스 객체들을 strage 해줌
    }

    // 삭제버튼 추가
    note.events.on('delete', (id) => {
      this.ListIndelete(id);
    });
    note.events.on('move', () => this.save()); // m2(2) - 노트에서 move 이벤트 발생시 실행될 함수를 노트리스트에서 등록해 줌.
    note.events.on('input', () => this.save());
  }

  ListIndelete(id) {
    // < 1.삭제버튼 누른 id값을 찾기>
    // 1)방법1
    // let elNum = 0;
    // for (let i = 0; i < this.notes.length; i += 1) {
    //   if (this.notes[i].id === id) {
    //     elNum = i;
    //     break;
    //   }
    // }

    // 2)방법2
    const elNum = this.notes.findIndex((obj) => {
      return obj.id === id;
    });

    // <2. 그 노트를 삭제함>
    this.list.removeChild(this.notes[elNum].el);
    // this.notes는 인스턴스 객체가 담긴 배열임. 근데 removeChild는 돔요소를 삭제해야함. 따라서 el 붙여줌.
    this.notes.splice(elNum, 1);

    // <3.업데이트 된 notes배열을 다시 저장해줌>
    this.save(); // 업데이트 된 인스턴스 객체들을 다시 strage 해줌
  }
}

// [[3.note 생성하는 클래스]]
class Note {
  constructor(list) {
    this.id = Date.now(); // 각note에 아이디값을 만들어줌
    this.el = document.createElement('div');
    this.el.classList.add('note');
    // t

    this.el.innerHTML = ` <div class="wrapper">
      <button type="button" class="handle"></button>
      <button type="button" class="delete">x</button>
      <textarea class="text"></textarea>
    </div>
  `;

    list.appendChild(this.el);

    this.dnd = new DragAndDrop(this.el, {
      handle: this.el.querySelector('.handle'),
    });

    this.text = this.el.querySelector('.text');

    this.deleteBtn = this.el.querySelector('.delete');
    this.deleteBtn.addEventListener('click', this.noteInDelete.bind(this));

    // handle에 드래그앤 드롭을 걸어줌.
    // note 삭제시 deletefn 호출위해 새로운 프로퍼티로 저장해 둠.

    //
    this.events = new EventEmitter();
    this.dnd.events.on('move', () => {
      this.events.emit('move');
    });

    this.text.addEventListener('input', this.textChange.bind(this)); // input은 입력하는 즉시 이벤트 발생, change는 입력창 외의 다른 곳을 눌러야 이벤트 발생됨.
  }

  textChange() {
    this.events.emit('input', this.id);
  }

  noteInDelete() {
    this.dnd.deleteFn(); // 이벤트를 삭제한 후 note를 삭제함
    // this.el.remove(); // Note자체에서 자신을 삭제하는 기능을 넣는게 아니라, Notelist에서 각 노트를 관리하기 위해, 리스트에서 삭제하도록 함.

    // <콜백방식!> 비동기 실행에서의 콜백함수란 - 당장 실행되는 것이 아니라, 나중에 어떤 조건이 만족된 때 실행되는 함수
    // 부모요소가 준 함수를 자식요소에서 삭제버튼을 누렀을 떄 부모요소에 있는 함수를 호출하게 됨.

    this.events.emit('delete', this.id); // d2 - 노트의 삭제버튼 눌렀다는 이벤트 발생을 알림. 그리고 on에서 설정해준 delete키값에 등록된 함수 찾아서 실행됨.
    this.events.off('delete'); // d3 - 그 해당 이벤트-함수 프로퍼티 삭제함
  }

  // [note의 x,y,text내용 정보 받아오는 메서드]
  getData() {
    this.xy = this.dnd.getPos();
    return { x: this.xy[0], y: this.xy[1], text: this.text.value };
  }

  // [note의 x,y,text내용 설정해주는 메서드]
  setData(x, y, text) {
    this.dnd.setPos(x, y);
    this.text.value = text;
  }
}

const n1 = new Notelist();
