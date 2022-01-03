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

  /* 이름 */
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

  /* 나이 */
  const ageValue = ageInput.value;
  const isInvalid = Number.isNaN(parseInt(ageInput.value, 10));

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

  /* 우편번호 */
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

  /* 전화번호 */
  const liList = [].slice.call(phoneNumberUlEl.childNodes);

  for (const li of liList) {
    if (li.nodeType !== 1) {
      continue;
    }

    // li 밑에 input가져옴
    const inp = li.querySelector('input');
    console.log(inp);
    // 낼 하기- 전화번호를 입력하지 않았거나, 전화번호 양식에 맞지 않을 경우 invalid 클래스 추가하기
    // <div><input><button></div> <div> 여기다 출력</div>
  }
});

//
/* 전화번호 */
const phoneNum = $('.phoneNum');
const btnAddEl = $('.btn-add');

btnAddEl.addEventListener('click', (e) => {
  const li = document.createElement('li');
  li.innerHTML = `<input type="tel" id="tel" />
  <button type="button" class="btn-del">삭제</button>`;
  phoneNumberUlEl.appendChild(li); // appendChild는 요소가 들어가야 함
});

phoneNum.addEventListener('click', (e) => {
  if (e.target.className !== 'btn-del') {
    return;
  }

  // remove() append() - 거의 안씀(인터넷 익스플로어에선 지원이 안되서!!) / removeChild,appendChild로 쓰는게 조음
  // e.target.parentElement.remove();
  e.target.parentElement.parentElement.removeChild(e.target.parentElement);
});
