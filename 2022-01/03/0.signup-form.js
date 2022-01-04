function $(el) {
  return document.querySelector(el);
}

const formEl = $('form');
const nameInput = $('.name');
const nameError = $('.name-error');
const ageInput = $('#age');
const ageError = $('.age-error');
const addressCode = $('#addressCode');
const addressCodeError = $('.addressCode-error');

const phoneNumberUlEl = $('.phoneNumUl');

formEl.addEventListener('submit', (e) => {
  // form 요소에 submit 이벤트 걸어야 됨
  e.preventDefault();

  /* 이름 -1.입력하지 않았을 때 2. 두글자 미만 입력했을 때 */
  if (nameInput.value.length === 0) {
    nameError.innerHTML = '이름을 입력하세요.';
    nameInput.classList.add('invalid');
    // return;
  } else if (nameInput.value.length < 2) {
    nameError.innerHTML = '이름은 두글자 이상 입력하세요';
    nameInput.classList.add('invalid');
    // return;
  } else {
    nameError.innerHTML = '';
    nameInput.classList.remove('invalid');
  }

  /* 나이 - 1.입력을 하지 않은 경우 2.문자를 입력한 경우 */
  const ageValue = ageInput.value;
  const isInvalid = Number.isNaN(parseInt(ageInput.value, 10)); // 질문1 - 왜 parseInt하는지?

  if (ageValue === '') {
    ageError.innerHTML = '나이를 입력하세요';
    ageInput.classList.add('invalid');
  } else if (isInvalid) {
    ageError.innerHTML = '숫자만 입력가능합니다';
    ageInput.classList.add('invalid');
  } else {
    ageError.innerHTML = '';
    ageInput.classList.remove('invalid');
  }

  /* 우편번호 - 1.입력하지 않았을 떄 2.숫자가 5자리가 아닐 경우 */
  if (addressCode.value === '') {
    addressCodeError.innerHTML = '우편번호를 입력하세요.';
    addressCode.classList.add('invalid');
  } else if (!/^\d{5}$/.test(addressCode.value)) {
    // 숫자가 6자리일 경우 숫자 5개만 있으면 true가 되므로, ^$를 지정하여 숫자5개로 시작해서 숫자 5개로 끝나야 함
    addressCodeError.innerHTML = '숫자 5자리를 입력하세요.';
    addressCode.classList.add('invalid');
  } else {
    addressCodeError.innerHTML = '';
    addressCode.classList.remove('invalid');
  }

  /* 전화번호 - 1.입력하지 않았을 떄 2.전화번호 양식에 맞지 않을 경우 */
  const liList = [].slice.call(
    phoneNumberUlEl.childNodes,
  ); /* childNodes :Nodelist라는 유사배열임 */
  /* [a].slice(); =>[a]가 복제됨 */

  for (const li of liList) {
    /**
     * phoneNumberUlEl.childNodes: childNodes는 텍스트노드(공백,textNode) 까지 나옴. // [text,li,text]
     * node의 대분류가 있는데 nodeType이 1이면. TextNode이다. //  li.nodeType 하면 해당하는 숫자가 나옴
     * 따라서 li엘리먼트 (nodeType은 3)만 순회하기 위해 nodeType을 검사한다
     */
    if (li.nodeType !== 1) {
      /* childNodes */
      continue;
    }

    // li 밑에 input가져옴
    const inp = li.querySelector('input');
    const phoneNum = li.querySelector('.phoneNum-error');
    const { value } =
      inp; /* 변수명과 객체의 프로퍼티명이 같을떄 축약으로 사용됨 */
    const phoneReg = /^\d{3}-\d{4}-\d{4}$/;

    // 1. value가 ''이면 "전화번호를 입력하세요" 출력
    if (value === '') {
      phoneNum.innerHTML = '전화번호를 입력하세요';
      inp.classList.add('invalid');
    } else if (!phoneReg.test(value)) {
      // 2. value를 입력했지만 xxx-xxxx-xxxx 형태가 아니라면 "올바른 전화번호 형식이 아닙니다" 출력
      phoneNum.innerHTML = '올바른 전화번호 형식이 아닙니다 (000-0000-0000)';
      inp.classList.add('invalid');
    } else {
      phoneNum.innerHTML = '';
      inp.classList.remove('invalid');
    }
  }
});

/* 전화번호 */
const phoneNum = $('.phoneNum');
const btnAddEl = $('.btn-add');

// 추가이벤트
btnAddEl.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = `<div><input type="tel" id="tel" />
  <button type="button" class="btn-del">삭제</button>
</div><div class="phoneNum-error"></div>`;
  phoneNumberUlEl.appendChild(li); // appendChild는 요소가 들어가야 함
});

// 삭제이벤트
phoneNum.addEventListener('click', (e) => {
  if (e.target.className !== 'btn-del') {
    return;
  }

  // remove() append() - 거의 안씀(인터넷 익스플로어에선 지원이 안되서!!) / removeChild,appendChild로 쓰는게 조음
  // e.target.parentElement.remove();
  e.target.parentElement.parentElement.parentElement.removeChild(
    e.target.parentElement.parentElement,
  );
});
