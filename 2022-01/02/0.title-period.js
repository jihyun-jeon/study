function strToDate(str) {
  return new Date(
    new Date().getFullYear(),
    Number(str.slice(0, 2) - 1),
    Number(str.slice(2)),
  );
}

function Duration(title, date1, date2) {
  this.title = title;
  this.date1 = strToDate(date1);
  this.date2 = strToDate(date2);
  this.date2.setHours(
    23,
    59,
    59,
    999,
  ); /* new Date하면 0시0분으로 되서 59분으로..으로 말일로 맞춰줌 */
}

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
  const removeD = new Date(2021, 11, 31, 23, 59, 59, 999);
  const fullYear = new Date(2022, 11, 31, 23, 59, 59, 999) - removeD;

  // 현재 날짜 파란색 줄 표시
  const now = new Date().getTime() - removeD;
  const nowD = (1000 * now) / fullYear;
  const nowLine = `<div class='nowline' style='left:${nowD}px';></div>`;

  // 타이틀,기간바 구하기
  let result = '';
  let top = 0;

  for (const dur of this.list) {
    const startD = dur.date1 - removeD;
    const lastD = dur.date2.getTime() - removeD;

    const startPx = (1000 * startD) / fullYear;
    const lastPx = (1000 * lastD) / fullYear;

    result += `<div class="title" style=top:${top}px>${
      dur.title
    }</div><div class="duration" style="left:${startPx}px; width:${
      lastPx - startPx
    }px; top:${top}px"></div>`;

    top += 25;
  }

  el.innerHTML = nowLine + result;
};

// 실행코드 - 3개의 div 모두 렌더
const list = new DurationList(); // {[]}

list.push(
  new Duration('중간고사', '0203', '0304'),
  new Duration('기말고사', '0303', '0404'),
  new Duration('소풍', '0403', '0504'),
);
// [{title:"중간고사",date1:2021,02,03, date2: 2021,03,04},{},{}]

list.render(document.querySelector('#timeline'));
