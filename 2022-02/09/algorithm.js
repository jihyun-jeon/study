/* <문제0 전구를 만들어 보자> */

function Bulb() {
  this.OnOff = false;
}

Bulb.prototype.on = function () {
  if (this.OnOff) {
    console.log('전구가 이미 켜졌습니다.');
    return;
  }
  console.log('전구가 켜졌습니다.');
  this.OnOff = true;
};

Bulb.prototype.off = function () {
  if (this.OnOff) {
    console.log('전구가 꺼졌습니다.');
    this.OnOff = false;
    return;
  }
  console.log('전구가 이미 꺼졌습니다.');
};

// 실행
const bulb = new Bulb();

bulb.on(); // 전구가 켜졌습니다
bulb.on(); // 전구가 이미 켜져있습니다

bulb.off(); // 전구가 꺼졌습니다
bulb.off(); // 전구가 이미 꺼져있습니다
