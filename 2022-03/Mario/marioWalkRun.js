/*
function Mario() {
  const divEl = document.createElement('div');
  const spanEl = document.createElement('span');
  const btnEl = document.createElement('button');
  btnEl.setAttribute('type', 'button');
  btnEl.innerHTML = "<img src='./mario_01.png' />";

  divEl.prepend(btnEl);
  divEl.appendChild(spanEl);

  document.body.prepend(divEl);
  btnEl.addEventListener('click', this.change.bind(this));

  this.spanEl = spanEl;
  this.btnEl = btnEl;
  this.isRun = false;
  this.state = 1;
}

Mario.prototype.change = function () {
  // state - 1. 걷기 2. 뛰기 0. 멈추기
  if (this.state === 1) {
    let num = 1;
    this.id1 = setInterval(() => {
      if (num === 1) {
        num = 2;
      } else {
        num = 1;
      }
      this.btnEl.innerHTML = `<img src='./mario_0${num}.png' />`;
    }, 500);
    this.btnEl.style.backgroundColor = 'yellow';
    this.spanEl.innerHTML = 'walking';
    this.state = 2;
  } else if (this.state === 2) {
    let num = 1;
    clearInterval(this.id1);
    this.id2 = setInterval(() => {
      if (num === 1) {
        num = 2;
      } else {
        num = 1;
      }
      this.btnEl.innerHTML = `<img src='./mario_0${num}.png' />`;
    }, 200);
    this.btnEl.style.backgroundColor = 'red';
    this.spanEl.innerHTML = 'running';
    this.state = 0;
  } else {
    clearInterval(this.id2);
    this.btnEl.style.backgroundColor = '';
    this.spanEl.innerHTML = '';
    this.state = 1;
  }
};

new Mario();
new Mario();
*/

// <<리팩토링>>
// if,elseif,else => switch로
// intervalId 하나로 쓰고, change메서드 시작시 clearId 실행.
// img 01,02반복은 render함수 하나로 활용

function Mario() {
  const btnEl = document.createElement('button');
  btnEl.setAttribute('type', 'button');
  btnEl.addEventListener('click', this.change.bind(this));

  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', './mario_01.png');

  btnEl.prepend(imgEl);
  document.body.prepend(btnEl);

  this.btnEl = btnEl;
  this.imgEl = imgEl;
  this.state = 1;
  this.intervalID = 0;
}

Mario.prototype.change = function () {
  clearInterval(this.intervalID); // 함수를 시작할때 기존 id를 지우고 시작함.
  let num = 1;

  function render() {
    if (num === 1) {
      num = 2;
    } else {
      num = 1;
    }
    this.imgEl.setAttribute('src', `./mario_0${num}.png`);
  }

  /*
  질문: bind,call을 붙여야만 되는 이유??
  : setInterval,setTimeout안의 콜백함수는 "일반함수로 호출"되서, this는 window가 됨.
    따라서 this를 Mario 인스턴스객체로 지정해주어 this.imgEl에 제대로 접근할 수 있도록 해아함.
  */
  switch (this.state) {
    case 1:
      this.intervalID = setInterval(render.bind(this), 500);
      this.btnEl.style.backgroundColor = 'yellow';
      this.state = 2;
      break;
    case 2:
      this.intervalID = setInterval(render.bind(this), 100);
      this.btnEl.style.backgroundColor = 'red';
      this.state = 0;
      break;
    default:
      this.btnEl.style.backgroundColor = '';
      num = 2; // num이 2면, img가 01번이 들어감.
      render.call(this); // bind는 함수 실행이 바로 되지 않음, 따라서  call로 함
      this.state = 1;
  }
};

new Mario();
new Mario();

/*
<body>
  <button>
    <img>
  </button>
</body>

Matio ===> {}
            ㄴthis.change()
{}
ㄴthis.btn
ㄴthis.img
ㄴthis.state = 0
ㄴthis.intervalID = 0

*/
