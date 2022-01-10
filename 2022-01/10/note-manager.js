import { DragAndDrop } from './drag-and-drop-class-absolute2'; // 그래그앤드롭 파일 가져옴

class Note {
  constructor() {
    this.el = document.createElement('div');
    this.el.classList.add('note');
    this.el.innerHTML = ` <div class="wrapper">
      <button type="button" class="handle"></button>
      <button type="button" class="delete">x</button>
      <textarea class="text"></textarea>
    </div>
  `;

    this.deleteBtn = this.el.querySelector('.delete');
    this.deleteBtn.addEventListener('click', this.onClickDelete.bind(this));

    // note 삭제시 deletefn 호출위해 새로운 프로퍼티로 저장해 둠.
    this.dnd = new DragAndDrop(this.el, {
      handle: this.el.querySelector('.handle'),
    });
  }

  onClickDelete() {
    this.dnd.deleteFn(); // 이벤트를 삭제한 후 note를 삭제함
    this.el.remove();
  }
}

class Notelist {
  constructor() {
    this.btnDiv = document.createElement('div');
    this.addBtnEL = document.createElement('button');
    this.addBtnEL.innerHTML = '추가';
    document.body.prepend(this.btnDiv);
    this.btnDiv.prepend(this.addBtnEL);

    this.list = document.createElement('div');
    this.list.classList.add('list');
    document.body.append(this.list);

    this.addBtnEL.addEventListener('click', this.onClickAdd.bind(this));
  }

  // 추가버튼 클릭시
  onClickAdd() {
    var note = new Note();
    this.list.appendChild(note.el);
  }
}

const n1 = new Notelist();
