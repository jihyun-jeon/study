// 3. 피드창 feedWrapper에 넣기
const feedWrapper = document.querySelector('#feedWrapper');

[0, 1].forEach(() => feedWrapper.appendChild(new Feed().root));

// 4. <프로필 메뉴 박스>
const profileBtn = document.querySelector('.profileBtn');
const menuBoxEl = document.querySelector('#menuBox');

profileBtn.addEventListener('click', () => {
  menuBoxEl.classList.toggle('hidden');
  menuBoxEl.classList.toggle('show');
});
