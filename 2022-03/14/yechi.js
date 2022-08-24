function Yechi(money) {
  this.money = money;

  // < 1.render - createElement로 요소 하나를 만들어서 , appendChild >
  const divEL = document.createElement('div');
  divEL.innerHTML = `
  <h3>예치은행</h3>
  <p>예치금: <span>${this.money}</span>원</p>
  <p>
    이율: <input type="text" class="percent"  placeholder="2%" />
    <button type="button" class="btn" >이자발생</button>
  </p> <br />`;

  document.body.appendChild(divEL);

  this.inputEl = divEL.querySelector('.percent');
  this.spanEl = divEL.querySelector('span');
  divEL.addEventListener('click', this.onclickButton.bind(this));
}

Yechi.prototype.onclickButton = function (e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  this.update();
};

Yechi.prototype.update = function () {
  const rate = +this.inputEl.value;

  if (rate < 1 || isNaN(rate)) {
    rate = 2;
  }

  const result = Math.floor(this.money + this.money * (rate / 100));

  this.money = result;
  this.spanEl.innerHTML = result;
};

const y1 = new Yechi(50000);
const y2 = new Yechi(20000);
const y3 = new Yechi(60000);
