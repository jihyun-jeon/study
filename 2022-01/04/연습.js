function Accordion(selector, indp) {
  this.containEl = document.querySelector(selector);
  this.indp = indp;
  this.eventBind();
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

Accordion.prototype.eventBind = function () {
  // !!!화살표 함수에서의 this는 한단계 위에 있는 스코프이기 떄문에, 이벤트 걸린 돔요소가 this가 되지않아, bind로 this를 지정할 필요 없음
  this.containEl.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }
    const clickedBodyEl = e.target.parentElement.nextElementSibling;

    // 하나만 열리도록 (non독립모드)
    if (!this.indp) {
      const showBodyEl = this.containEl.querySelector('.show');
      // 2. 이미 열려있는걸 닫을떄, 열려있는게 없는 상태에서 하나열 열때
      if (clickedBodyEl === showBodyEl || !showBodyEl) {
        this.toggle(clickedBodyEl);
        return;
      }
      // 1. 열려있는건 닫고, 닫힌건 열리게끔 힘
      this.toggle(clickedBodyEl);
      this.toggle(showBodyEl);
      return;
    }

    this.toggle(clickedBodyEl);
  });
};

const a1 = new Accordion('#container-one', false); // 하나만 열려있음
const a2 = new Accordion('#container-two', true); // 따로 열리도 닫힘
