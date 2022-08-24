const menuBtn = document.querySelector('.menu');
const xBtn = document.querySelector('.xBtn');
const wrapEl = document.querySelector('#wrap');
const sideBarEl = document.querySelector('#sideBar');
const menuLine = document.querySelectorAll('.list p');

menuBtn.addEventListener('click', () => {
  wrapEl.classList.toggle('none');
  sideBarEl.classList.toggle('none');
});

xBtn.addEventListener('click', () => {
  wrapEl.classList.toggle('none');
  sideBarEl.classList.toggle('none');
});

// 메뉴바 토글
menuLine.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.target.parentElement.classList.toggle('hidden');
    e.target.parentElement.classList.toggle('show');
  });
});
