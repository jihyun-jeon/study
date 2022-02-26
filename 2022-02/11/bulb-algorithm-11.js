// 문제1. 전구를 1개를 키고 끄기
// 문제2. 전구 2개를 동시에 키고,끄기
const containerEl = document.querySelector('.container');

function Bulb() {
  this.connectedBulbs = [];

  this.divEl = document.createElement('div');
  this.divEl.classList.add('bulb');
  this.divEl.innerHTML = ` <span>전구를 실행하시오</span>
    <div class="circle">Bulb2</div>`;

  this.spanEl = this.divEl.querySelector('span');

  containerEl.prepend(this.divEl);

  // 질문1) 어떻게 각 this에 있는 span요소를 찾을 수 있는지?
  //    ㄴ> 생성자함수 안에서 html요소를 만들어야, 생성자함수 안의 메서드에서 그 html요소를 쿼리셀렉터로 찾아 활용할 수 있음.
  //
  // 질문2) body의 높이를 최대로 해서 모든 요소를 가운데 정렬 하는 법?
}

Bulb.prototype.on = function () {
  if (this.isOn) {
    this.spanEl.innerHTML = '이미 켜졌습니다';
  } else {
    this.spanEl.innerHTML = '전구가 켜졌습니다';
    this.isOn = !this.isOn;
  }

  for (const bulb of this.connectedBulbs) {
    bulb.on();
  }
};

Bulb.prototype.off = function () {
  if (this.isOn) {
    this.spanEl.innerHTML = '전구가 꺼졌습니다';
    this.isOn = !this.isOn;
  } else {
    this.spanEl.innerHTML = '이미 꺼졌습니다';
  }

  for (const bulb of this.connectedBulbs) {
    bulb.off();
  }
};

Bulb.prototype.connect = function (newBulb) {
  this.connectedBulbs.push(newBulb);
};

// <전구 한개 실행하기>
const b1 = new Bulb();

// <전구 두개 연결>
const b2 = new Bulb();
b1.connect(b2);

const onBtn = document.querySelector('.on');
const offBtn = document.querySelector('.off');
onBtn.addEventListener('click', () => b1.on());
offBtn.addEventListener('click', () => {
  b1.off();
});
