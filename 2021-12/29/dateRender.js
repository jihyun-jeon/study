function strToDate(str) {
  return new Date(
    new Date().getFullYear(),
    Number(str.slice(0, 2) - 1),
    Number(str.slice(2)),
  );
}

function Duration(date1, date2) {
  this.date1 = strToDate(date1);
  this.date2 = strToDate(date2);
  this.date2.setHours(
    23,
    59,
    59,
    999,
  ); /* new Date하면 0시0분으로 되서 59분으로..으로 말일로 맞춰줌 */
}

Duration.prototype.render = function (el) {
  /**
   * 시작일: this.date1
   * 종료일: this.date2
   *
   * <div class="duration" style="left:???;width:????"></div>
   *
   * 2021/01/01 ~ 2021/12/31
   * this.date1 어느 위치에 있는가? => px
   *
   * Date(2021/12/31) - Date(2020/12/31); =? 1년치의 ms (A)
   * this.date1 - Date(2020/12/31) => date1의  ms (B)
   *
   * 1000px : A = x : B => x의 값이 css left값
   */

  const fullYear =
    new Date(2021, 11, 31, 23, 59, 59, 999) -
    new Date(2020, 11, 31, 23, 59, 59, 999);
  // month는 인덱스 번호임! 11로해야 12월로 계산됨
  // new Date(2021, 11, 31, 23, 59, 59, 999) : 이렇게 해야 2021년 12월 31일 11시 59분 99초 999ms가 됨
  // (1000ms가 1초여서 999로 지정한 것)
  const startD = this.date1 - new Date(2020, 11, 31, 23, 59, 59, 999);
  const lastD =
    new Date(this.date2.getTime()).setHours(23, 59, 59, 99) -
    new Date(2020, 11, 31, 23, 59, 59, 999);
  // date2를 그 날자의 마지막 시간으로 지정하기 위해 setHours로 시간까지 설정해 줘야 함
  // 근데 this.date2.setHours()로 쓰게되면 원본인 thid.date값도 수정됨
  // 따라서 new Date(getTime())으로 새로 데이트 복제해서 sethour 붙여준 것임

  const startPx = (1000 * startD) / fullYear;
  // 8.241758241758241 <-이렇게 소숫점이 커서 소숫점 2자리까지만 나오게 계산해야 함(소숫점이 너무 길면 화면에 반영안되서)
  const lastPx = (1000 * lastD) / fullYear; // 263.7362637362637

  const divEl = `<div class="duration" style="left:${startPx}px; width:${
    lastPx - startPx
  }px;"></div>`;

  el.innerHTML = divEl;
};

/* .setHours() 개념
var theBigDay = new Date(2021, 12, 31);
console.log(theBigDay.setHours(23, 59, 59, 999)); // (시,분,초,ms)한번에 지정 가능
// dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
*/

// 문제1 실행코드 - 하나의 div만 일단 렌더해보기
// const d1 = new Duration('0101', '0507'); // {date1: 2021,02,03, date2 : 2021.05.07}
// d1.render(document.querySelector('#timeline'));

function DurationList() {
  this.list = [];
}

DurationList.prototype.push = function () {
  for (let i = 0; i < arguments.length; i += 1) {
    this.list.push(arguments[i]);
  }
  return this.list;
};

DurationList.prototype.render = function (el) {
  console.log(this.list); // [{date1:2021,02,03, date2: 2021,03,04},{},{}]
  let result = '';
  let top = 0;
  const removeD = new Date(2021, 11, 31, 23, 59, 59, 999);
  for (const dur of this.list) {
    const fullYear = new Date(2022, 11, 31, 23, 59, 59, 999) - removeD;

    const startD = dur.date1 - removeD;
    const lastD = dur.date2.getTime() - removeD;

    const startPx = (1000 * startD) / fullYear;
    const lastPx = (1000 * lastD) / fullYear;

    result += `<div class="duration" style="left:${startPx}px; width:${
      lastPx - startPx
    }px; top:${top}px"></div>`;

    top += 14;
  }

  el.innerHTML = result;
};

// 문제2 실행코드 - 3개의 div 모두 렌더
const list = new DurationList(); // {[]}

list.push(
  new Duration('0203', '0304'),
  new Duration('0303', '0404'),
  new Duration('0403', '0504'),
);
// [{date1:2021,02,03, date2: 2021,03,04},{},{}]

list.render(document.querySelector('#timeline'));
