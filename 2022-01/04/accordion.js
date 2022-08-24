/*
// <문제1> - 글자가 보이면 .hide추가, 글자가 안보이면 .show 추가 (조건,한개가 열리면 한개는 닫혀야 함)
const containEl = document.querySelector('.container');

function toggle(el) {
  if (el.classList.contains('show')) {
    el.classList.remove('show');
    el.classList.add('hide');
  } else {
    el.classList.remove('hide');
    el.classList.add('show');
  }
}

containEl.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const clickedBodyEl = e.target.parentElement.nextElementSibling;
  const openedBodyEl = containEl.querySelector('.show');

  // 1. 1)show인 것을 눌러서 닫을 경우(그냥 해당 요소 하나만 닫기만 하면 됨)
  //    2)또는 hidden인 것을 열 경우 (그냥 해당 요소 하나만 열기만 하면 됨)
  //     ㄴ> show인게 애당초 없기 때문에 openedBodyEl가 null이 나오는데, 이를 !null해서 true로 만들어줌
  if (clickedBodyEl === openedBodyEl || !openedBodyEl) {
    toggle(clickedBodyEl);
    return;
  }

  // 2. hidden인것을 눌러서 열고, show인걸 자동으로 닫게 하는 경우
  toggle(openedBodyEl);
  toggle(clickedBodyEl);
});
*/

/*
// <문제2> - 글자가 보이면 .hide추가, 글자가 안보이면 .show 추가 (조건,각 바디가 따로따로 닫히고 열려야 함)

const containEl = document.querySelector('.container');

function toggle(el) {
  if (el.classList.contains('show')) {
    el.classList.remove('show');
    el.classList.add('hide');
  } else {
    el.classList.remove('hide');
    el.classList.add('show');
  }
}

containEl.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const clickedBodyEl = e.target.parentElement.nextElementSibling;
  // openedBody를 신경쓸 필요가 없게 됨!
  // const openedBodyEl = containEl.querySelector('.show');

  // 1.1)클릭한 바디가 이미 show 일떄, 또는 2)show바디가 없을떄
  // if (clickedBodyEl === openedBodyEl || !openedBodyEl) {
  //   toggle(clickedBodyEl);

  //   return;
  // }

  // 2.클릭한 바디가 hide상태이고, show바디가 기존에 있을 경우
  // toggle(openedBodyEl);
  toggle(clickedBodyEl);
});
*/

// <문제3> - 글자가 보이면 .hide추가, 글자가 안보이면 .show 추가 (조건,클래스화 시켜서 여러개 만들기)
/*
// 오래된 방식
function AccordionOld(selector, indp) {
  this.containEl = document.querySelector(selector);
  this.indp = indp;

  this.bindEvents(); // 인스턴스가 생성될때 bindEvents메서드가 바로 실행되게 됨.
}

AccordionOld.prototype.toggle = function (el) {
  if (el.classList.contains('show')) {
    el.classList.remove('show');
    el.classList.add('hide');
  } else {
    el.classList.remove('hide');
    el.classList.add('show');
  }
};

AccordionOld.prototype.bindEvents = function () {
  const { containEl } = this; //   const containEl = this.containEl; 축약

  // 1. containEl.addEventListener('click', function (e) {})
  // 이벤트 핸들러에서의 this : "이벤트를 바인딩 한 돔 엘리먼트"가 this가 됨
  // 즉," "this.containEl" = "document.querySelector("#cont-one")" <- 이 HTML요소가 this임
  // HTML요소가 this가 되면, this.toggle() 실행할 수 없어 오류남!
  // 2. containEl.addEventListener('click', (e) => {
  // 화살표 함수: 자신을 감싸고 있는 컨텍스트의 this로 됨.(한단계 위의 this로 지정됨).
  // Accordion생성자 함수로 생겨난 인스턴스 객체 "ac1"가 this가 됨.

  containEl.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    const clickedBodyEl = e.target.parentElement.nextElementSibling;

    if (this.indp) {
      // 독립모드 일때
      const openedBodyEl = containEl.querySelector('.show');
      if (clickedBodyEl === openedBodyEl || !openedBodyEl) {
        this.toggle(clickedBodyEl);
        return;
      }
      this.toggle(openedBodyEl);
    }

    this.toggle(clickedBodyEl);
  });
};

const ac1 = new AccordionOld('#container-one', true); // 독립모드
const ac2 = new AccordionOld('#container-two', false); // 통합모드. 하나를 열면 다른게 닫혀야 함
*/

// < 완성본 > //////////////////////////////////////////////////////////////////////

// 신세대 방식 - class화
class Accordion {
  constructor(selector, indp) {
    this.containEl = document.querySelector(selector);
    this.indp = indp;

    this.bindEvents(); // 인스턴스가 생성될때 bindEvents메서드가 바로 실행되게 됨.
  }

  toggle(el) {
    if (el.classList.contains('show')) {
      el.classList.remove('show');
      el.classList.add('hide');
    } else {
      el.classList.remove('hide');
      el.classList.add('show');
    }
  }

  bindEvents() {
    const { containEl } = this; //   const containEl = this.containEl; 축약

    // 1. containEl.addEventListener('click', function (e) { // 이벤트를 바인딩 한 돔 엘리먼트 "containEl"
    // 2. containEl.addEventListener('click', (e) => {
    // 화살표 함수: 자신을 감싸고 있는 컨텍스트의 this로 됨.(한단계 위의 this로 지정됨).
    // Accordion생성자 함수로 생겨난 인스턴스 객체 "ac1"가 this가 됨.

    containEl.addEventListener('click', (e) => {
      if (e.target.nodeName !== 'BUTTON') {
        return;
      }

      // console.log(e.target); // button
      const clickedBodyEl = e.target.parentElement.nextElementSibling; // 아코디언 바디부분

      // <독립모드 일때>
      if (this.indp) {
        const openedBodyEl = containEl.querySelector('.show'); // show인 아코디언 바디부분
        // 1. show인 것을 눌러서 닫을 경우(그냥 해당 요소 하나만 닫기만 하면 됨)
        //    또는 hidden인 것을 열 경우 (그냥 해당 요소 하나만 열기만 하면 됨)
        if (clickedBodyEl === openedBodyEl || !openedBodyEl) {
          this.toggle(clickedBodyEl);
          return;
        }
        // 2. hidden인것을 눌러서 열고, show인걸 자동으로 닫게 하는 경우
        this.toggle(openedBodyEl);
      }

      // <독립모드 아닐때>
      this.toggle(clickedBodyEl);
    });
  }
}

const ac1 = new Accordion('#container-one', true); // 독립모드
const ac2 = new Accordion('#container-two', false); // 통합모드. 하나를 열면 다른게 닫혀야 함

// < 옛날 방식 - 함수형 >
/*
function Accordion(selector, indp) {
  this.containEl = document.querySelector(selector);
  this.indp = indp;
  this.bindEvent();
}

Accordion.prototype.toggle = function (x) {
  if (x.classList.contains('show')) {
    x.classList.remove('show');
    x.classList.add('hide');
    return;
  }
  x.classList.add('show');
  x.classList.remove('hide');
};

Accordion.prototype.bindEvent = function () {
  this.containEl.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    const clickedBodyEl = e.target.parentElement.nextElementSibling;

    // < 독립모드x : 하나만 열려있게끔 >
    if (!this.indp) {
      const showBodyEl = this.containEl.querySelector('.show');
      if (showBodyEl === clickedBodyEl || !showBodyEl) {
        this.toggle(clickedBodyEl);
        return;
      }
      this.toggle(clickedBodyEl);
      this.toggle(showBodyEl);
      return;
    }

    // < 독립모드 : 3개 다 펼칠 수 있는 모드 >
    this.toggle(clickedBodyEl);
  });
};

const a1 = new Accordion('#container-one', false); // 하나만 열려있게끔(독립모드x)
const a2 = new Accordion('#container-two', true); // 독립적으로 각각 열리고 닫히게끔(독립모드ㅇ)
*/
