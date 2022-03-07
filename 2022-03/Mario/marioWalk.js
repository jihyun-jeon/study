// <마리오가 걷고 뛰는 생성자 함수 만들기>
function Mario() {
  const btn = document.createElement('button');
  btn.setAttribute('type', 'button');
  btn.innerHTML = '<img src="./mario_01.png" />';
  btn.addEventListener('click', this.change.bind(this));
  document.body.appendChild(btn);

  this.btn = btn;
  this.isRun = false;
  this.intervalID = 0;
}

Mario.prototype.change = function () {
  let num = 1;

  if (this.isRun) {
    this.btn.style.backgroundColor = '';
    clearInterval(this.intervalID);
    this.isRun = !this.isRun;
  } else {
    this.btn.style.backgroundColor = 'red';
    this.intervalID = setInterval(() => {
      if (num === 1) {
        this.btn.innerHTML = `<img src="./mario_0${2}.png" />`;
        num = 2;
      } else {
        this.btn.innerHTML = `<img src="./mario_0${1}.png" />`;
        num = 1;
      }
    }, 200);
    this.isRun = !this.isRun;
  }
};

const m1 = new Mario();
const m2 = new Mario();

/* [p1]
 btn.addEventListener('click', this.change.bind(this));
 : bind로 this를 지정하지 않으면, 이벤트가 발생한 돔 엘리먼트인 btn이 this가 됨.
 : bind(this)에서의 this는, 생성자 함수의 "인스턴스 객체"를 가르키는 것임. <-?? thid 더 공부!
*/
/* [p2]
setTimeout : id를 반환함. / clearTimeout(id값) : setTimeout을 취소시킴.
setInterval : id를 반환함. / clearInterval(id값) : setInterval을 취소시킴.
*/
