function Crousel() {
  this.posX = 0;
  this.prevBtn = document.querySelector('.prevBtn');
  this.nextBtn = document.querySelector('.nextBtn');

  this.wrapperEl = document.querySelector('.wrapper');

  this.bindEvent();
}

Crousel.prototype.bindEvent = function () {
  this.maxPosX = 1500 * document.querySelectorAll('.wrapper li').length;

  // 왼쪽버튼 (-10000/0 -2000 -4000 -6000 -8000)
  this.prevBtn.addEventListener('click', () => {
    this.posX -= 1500;
    if (this.posX === -this.maxPosX) {
      this.posX = 0;
    }
    this.wrapperEl.style.transform = `translateX(${this.posX}px)`;
  });

  // 오른쪽버튼 ( -8000 -6000 -4000 -2000 0 )
  this.nextBtn.addEventListener('click', () => {
    this.posX += 1500;
    if (this.posX > 0) {
      this.posX = -6000;
    }
    console.log(this.posX);
    this.wrapperEl.style.transform = `translateX(${this.posX}px)`;
  });
};

const c1 = new Crousel();
