import { DragAndDrop } from './drag-and-drop-class-absolute2'; // 그래그앤드롭 파일 가져옴

class Notelist {
  constructor() {
    // [[1.추가버튼,notelist 생성]]
    this.notes = [];
    this.btnDiv = document.createElement('div');
    this.addBtnEL = document.createElement('button');
    this.list = document.createElement('div');

    this.addBtnEL.innerHTML = '추가';
    document.body.prepend(this.btnDiv);
    this.btnDiv.prepend(this.addBtnEL);

    this.list.classList.add('list');
    document.body.append(this.list);
    // [[2.note 추가이벤트 구현]]
    this.addBtnEL.addEventListener('click', this.onClickAdd.bind(this));
  }

  onClickAdd() {
    const note = new Note();
    this.notes.push(note);
    this.list.appendChild(note.el);

    // <Notelist에서 Note 생성자 함수에 onBeforeDelete를 실행하는 beforeDelete메서드를 추가해줌.>
    /* (방법1).에로우함수 - 원래 에로우함수가 아니라면, 메소드를 호출한 객체인 note가 this가 됨.
     근데 에로우 함수여서 한단계 위에있는 컨텍스트인 notelist가 this가 됨. */
    // note.beforeDelete = (id) => {
    //   this.onBeforeDelete(id); // 에로우 함수에서의 this는 notelist임. 목록을 관리하는 노트리스트에서 삭제기능 구현하도록 하기위해.
    // };

    // (방법2).bind사용
    /* bind를 사용하면 this가 지정된 onBeforeDelete"함수를 반환"할 수 있다. onbefore(id) 함수 자체가 온비포의 this로 하여 반환됨.
      bind(this)에서의 this는, onBeforeDelete의 this이고, 이는 notelist임.
    */
    note.beforeDelete = this.onBeforeDelete.bind(this); // 여기에 인자를 받는 함수가 없어도 onbefore(id)에 인자를 받는게 있어서 작동됨.
  }

  onBeforeDelete(id) {
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
  }
}

// [[3.note 생성하는 클래스]]
class Note {
  constructor() {
    this.id = Date.now(); // 각note에 아이디값을 만들어줌
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

    // handle에 드래그앤 드롭을 걸어줌.
    // note 삭제시 deletefn 호출위해 새로운 프로퍼티로 저장해 둠.
    this.dnd = new DragAndDrop(this.el, {
      handle: this.el.querySelector('.handle'),
    });
  }

  onClickDelete() {
    this.dnd.deleteFn(); // 이벤트를 삭제한 후 note를 삭제함
    // this.el.remove(); // Note자체에서 자신을 삭제하는 기능을 넣는게 아니라, Notelist에서 각 노트를 관리하기 위해, 리스트에서 삭제하도록 함.
    this.beforeDelete(this.id);
    // 부모요소가 준 함수를 자식요소에서 어떤 상황이 발생했을 떄 그 함수를 호출하게 됨. <콜백방식!> : 자식요소에서 삭제버튼을 누르면 부모요소에 있는 함수가 실행됨.
  }
}

const n1 = new Notelist();
