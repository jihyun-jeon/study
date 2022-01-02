// 주사위 만들기 - 1,2,3초 중 랜덤으로 골라서 setTimeOut() 함 , 숫자는 1~6 중 랜덤 숫자 출력
let result = 0;
const arr = [1, 2, 3, 4, 5, 6];
const el = document.querySelector('.render');

function select() {
  result = arr[Math.floor(Math.random() * arr.length)];

  el.innerHTML = result;
}

// console.log(setTimeout(select, 3000)); // setTimeout은 아이디값이 나옴

function secondsFn() {
  const s = (Math.floor(Math.random() * 3) + 1) * 1000; // 1,2,3,
  el.innerHTML = `주사위를 돌립니다.(${s / 1000}초)`;
  return s;
}

const btnEl = document.querySelector('.btn');
btnEl.addEventListener('click', function () {
  setTimeout(select, secondsFn());
});
