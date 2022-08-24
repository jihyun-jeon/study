/* < 달력 함수 만들기 >
console.log(cal(2021, 11));
-> 결과 :[Array(7), Array(7), Array(7), Array(7), Array(7), Array(7)]
 [ {date: 27, isWeekend: true, isOther: true},
   {date: 28, isWeekend: false, isOther: true},
   {date: 29, isWeekend: false, isOther: true},
   {date: 30, isWeekend: false, isOther: true},
   {date: 31, isWeekend: false, isOther: true},
   {date: 1, isWeekend: false, isOther: false},
   {date: 2, isWeekend: true, isOther: false}, ],
 [
   {date: 27, isWeekend: true, isOther: true}
   {date: 28, isWeekend: false, isOther: true}
   {date: 29, isWeekend: false, isOther: true}
   {date: 30, isWeekend: false, isOther: true}
   {date: 31, isWeekend: false, isOther: true}
   {date: 1, isWeekend: false, isOther: false}
   {date: 2, isWeekend: true, isOther: false} ],
  [
  {date: 3, isWeekend: true, isOther: false}
  {date: 4, isWeekend: false, isOther: false}
  {date: 5, isWeekend: false, isOther: false}
  {date: 6, isWeekend: false, isOther: false}
  {date: 7, isWeekend: false, isOther: false}
  {date: 8, isWeekend: false, isOther: false}
  {date: 9, isWeekend: true, isOther: false} ] , [Array(7)],[Array(7)],[Array(7)]]
*/

// 1.[{date,isWeekend,isother},{},...]만들기
export function cal(year, month) {
  const arr = [];
  const d = new Date(year, month); // 2021/11/01

  // 1.이전달
  let cur = new Date(d); // 2021/11/01
  let day = cur.getDay(); // 1

  while (day-- > 0) {
    cur.setDate(cur.getDate() - 1);
    const isWeekend = cur.getDay() === 0 || cur.getDay() === 6;
    arr.unshift({ date: cur.getDate(), isWeekend, isOther: true });
  }

  // 2.현재달
  cur = new Date(d); // 11.01

  cur.setMonth(cur.getMonth() + 1); // 11 (12월임)
  cur.setDate(cur.getDate() - 1); // 11.30일
  const nowDate = cur.getDate(); // 30

  new Array(nowDate).fill(null).forEach((_, idx) => {
    cur.setDate(idx + 1); // 1,2,3,4,5,...
    const isWeekend = cur.getDay() === 0 || cur.getDay() === 6;
    arr.push({ date: idx + 1, isWeekend, isOther: false });
  });

  // 3.다음달
  cur.setDate(cur.getDate() + 1); // 12.01

  while (arr.length < 42) {
    const nextDate = cur.getDate(); // 1,2,3,4,...
    const isWeekend = cur.getDay() === 0 || cur.getDay() === 6;
    arr.push({ date: nextDate, isWeekend, isOther: true });
    cur.setDate(cur.getDate() + 1);
  }

  // 4.7일씩 자르기
  const weeks = [];

  while (arr.length > 0) {
    weeks.push(arr.splice(0, 7));
  }

  return weeks; // [[{date,isWeekend,isother},{},{},{},{},{},{}],[],[],[],[],[]]
}
