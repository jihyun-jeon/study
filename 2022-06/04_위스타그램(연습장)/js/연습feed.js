class Feed {
  constructor() {
    const div = document.createElement('div');
    div.classList.add('feeds');
    div.innerHTML = markup;
    this.root = div;

    this.userNum = 1;

    this.bindEvents();
  }

  bindEvents() {
    const { root } = this;

    root.addEventListener('click', this.onClickHeartBtn);
    root.addEventListener('click', this.onClickDelBtn);
    root.addEventListener('submit', this.onReplySubmit);
  }

  // 2. <댓글 하트버튼 누르는 기능>
  onClickHeartBtn = (e) => {
    // console.log(e.target.tagName); // BUTTON svg path
    const heartBtnEl = e.target.closest('.heartBtn');

    if (!heartBtnEl) {
      return;
    }

    if (heartBtnEl.classList.contains('emptyBtn')) {
      heartBtnEl.classList.toggle('emptyBtn');
      heartBtnEl.classList.toggle('redBtn');
      heartBtnEl.innerHTML = `<svg class="redHeart" color="#ed4956" fill="#ed4956" height="12"   viewBox="0 0 48 48" width="12"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
    `;
      return;
    }

    if (heartBtnEl.classList.contains('redBtn')) {
      heartBtnEl.classList.toggle('emptyBtn');
      heartBtnEl.classList.toggle('redBtn');
      heartBtnEl.innerHTML = `<svg  class="emptyHeart" color="#8e8e8e" fill="#8e8e8e" height="12" viewBox="0 0 24 24" width="12">
      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
    </svg>`;

      return;
    }
  };

  // 3. < 삭제함수 >
  onClickDelBtn = (e) => {
    const delBtnEl = e.target.classList.contains('delBtn');

    if (!delBtnEl) {
      return;
    }

    const delLiEl = e.target.closest('li');
    delLiEl.remove();
  };

  // 4.< 댓글 submit 기능 >
  onReplySubmit = (e) => {
    // 질문1 : 왜 여기선 form태그 아니면 리턴되게끔 안하는지?
    e.preventDefault();

    const { root } = this;

    const commentInput = root.querySelector('.commentInput'); // 입력값
    const commentsEl = root.querySelector('.comments');

    if (commentInput.value) {
      // 댓글 li 추가
      const liEl = document.createElement('li');
      liEl.innerHTML = `<p>
      <span class="user">user${this.userNum}</span> ${commentInput.value}
    </p>
    <span>
    <button type="button" class="heartBtn emptyBtn">
      <svg  class="emptyHeart"  color="#8e8e8e" fill="#8e8e8e" height="12" viewBox="0 0 24 24" width="12">
        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
      </svg>
    </button>
      <button type="button" class="delBtn">삭제</button>
    </span>`;

      commentsEl.prepend(liEl);

      this.userNum += 1;

      // 댓글창 리셋
      commentInput.value = '';
      commentInput.focus();
    }
  };
}

const markup = `
<div class="feeds">
<!-- 2-1-1. 상단 게시자 이름 -->
<ul class="feedTop">
  <li><img src="./imgs/wecode.jpeg" alt="wecode" /></li>
  <li>canon_mj</li>
  <li><i class="fas fa-ellipsis-h"></i></li>
</ul>
<!-- 2-1-2. 사진 -->
<img src="./imgs/giraffe.jpg" alt="giraffe" class="giraffe" />
<!-- 2-1-3. 피드 하단 내용들 -->
<div class="feedBottomContents">
  <!-- 피드 하단 내용 - 아이콘들 -->
  <div class="imgIcons">
    <ul class="imgIconsLeft">
      <li>
        <svg
          aria-label="좋아요"
          class="_8-yf5"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
          ></path>
        </svg>
      </li>
      <li>
        <svg
          aria-label="댓글 달기"
          class="_8-yf5"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </li>
      <li>
        <svg
          aria-label="게시물 공유"
          class="_8-yf5"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <line
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            x1="22"
            x2="9.218"
            y1="3"
            y2="10.083"
          ></line>
          <polygon
            fill="none"
            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
          ></polygon>
        </svg>
      </li>
    </ul>
    <svg
      aria-label="저장"
      class="bookMark"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></polygon>
    </svg>
  </div>
  <!-- 피드 하단 내용 - 좋아요 누른 내용 -->
  <div class="likeMessage">
    <img src="./imgs/wecode.jpeg" alt="likes" />
    <p>
      <span class="thick">aineworld</span>님
      <span class="thick">외 10명</span>이 좋아합니다.
    </p>
  </div>
  <!-- 피드 하단 내용 - 피드 하단 작성글 내용 -->
  <p class="feedText">
    <span class="thick">cannon_mj</span> 위워크에서 진행한 베이킹
    클래스...
    <span class="gray">더 보기</span>
  </p>
</div>
<!-- 댓글기능 -->
<section>
  <ul class="comments">
    <li>
      <p><span class="user">user0</span> 댓글썻당0</p>
      <span>
        <button type="button" class="heartBtn emptyBtn">
          <svg
            class="emptyHeart"
            color="#8e8e8e"
            fill="#8e8e8e"
            height="12"
            viewBox="0 0 24 24"
            width="12"
          >
            <path
              d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
            ></path>
          </svg>
        </button>
        <button type="button" class="delBtn">삭제</button>
      </span>
    </li>
    <li>
      <p><span class="user">user0</span> 댓글썻당0</p>
      <span>
        <button type="button" class="heartBtn emptyBtn">
          <svg
            class="emptyHeart"
            color="#8e8e8e"
            fill="#8e8e8e"
            height="12"
            viewBox="0 0 24 24"
            width="12"
          >
            <path
              d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
            ></path>
          </svg>
        </button>
        <button type="button" class="delBtn">삭제</button>
      </span>
    </li>
  </ul>
  <form>
    <input placeholder="댓글 달기..." class=commentInput />
    <button type="submit" class="addBtn">게시</button>
  </form>
</section>
</div>`;
