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
const numContainer = $('.numContainer');
const btnAddEl = $('.btn-add');
const phoneNumberUlEl = $('.phoneNumUl');

formEl.addEventListener('submit', (e) => {
  // form 요소에 submit 이벤트 걸어야 됨 - 폼 제출버튼 클릭시 오류뜨게 해야 함
  e.preventDefault();

  /* 이름 -1.입력하지 않았을 때 2. 두글자 미만 입력했을 때 */
  if (nameInput.value.length === 0) {
    nameError.innerHTML = '이름을 입력하세요.';
    nameInput.classList.add('invalid');
  } else if (nameInput.value.length < 2) {
    nameError.innerHTML = '이름은 두글자 이상 입력하세요';
    nameInput.classList.add('invalid');
  } else {
    nameError.innerHTML = '';
    nameInput.classList.remove('invalid');
  }

  /* 나이 - 1.입력을 하지 않은 경우 2.문자를 입력한 경우 */
  const ageValue = ageInput.value;
  const isInvalid = Number.isNaN(parseInt(ageInput.value, 10));
  /* 질문1 - 왜 숫자로 변환한 후 isNaN하는지?
    isNaN 함수의 인수가 Number 유형이 아닌 경우(빈 문자열 또는 공백인 문자열인 경우),
    값은 먼저 Number로 강제됩니다. 그런 다음 결과 값을 테스트하여 값이 NaN인지 확인합니다.
    따라서 확실히 숫자로 명확히 해준 후 isNaN 실행하기 위한 것임.
    console.log(Number.isNaN("")); // false <-빈 문자열
    console.log(Number.isNaN(" ")); // false <-공백인 문자열
   */

  /* 질문2 - 왜 Number로 하는 것과 parseInt한 것이 다른지?
  const v = '';
  console.log(Number(v)); // 0
  console.log(parseInt(v, 10)); // NaN // "10진수로 해석해서" 10진수로 반환함
  // Number와 parseInt가 차이나는 이유
    Number는 생성자 함수고 parseInt는 Number의 static 메서드임. 따라서 두개가 숫자를 파싱하는 방법이 다름
    Number 보다 parseInt가 더 엄격해서 더 안전함. parseInt를 따라서 를 사용하는게 더 좋음
  */
  const ageReg = /[a-zA-Z]+/;
  if (ageValue === '') {
    ageError.innerHTML = '나이를 입력하세요';
    ageInput.classList.add('invalid');
  } else if (isInvalid || ageReg.test(ageValue)) {
    // 1)문자만 입력된 경우 2) 숫자+문자가 입력된 경우
    ageError.innerHTML = '숫자만 입력가능합니다';
    ageInput.classList.add('invalid');
  } else {
    ageError.innerHTML = '';
    ageInput.classList.remove('invalid');
  }

  /* 우편번호 - 1.입력하지 않았을 떄 2.숫자가 5자리가 아닐 경우 */
  const reg = /^\d{5}$/g;

  if (addressCode.value === '') {
    addressCodeError.innerHTML = '우편번호를 입력하세요.';
    addressCode.classList.add('invalid');
  } else if (!reg.test(addressCode.value)) {
    // 숫자가 6자리일 경우 숫자 5개만 있으면 true가 되므로, ^$를 지정하여 숫자5개로 시작해서 숫자 5개로 끝나야 함
    addressCodeError.innerHTML = '숫자 5자리를 입력하세요.';
    addressCode.classList.add('invalid');
  } else {
    addressCodeError.innerHTML = '';
    addressCode.classList.remove('invalid');
  }

  /* 전화번호 - 1.입력하지 않았을 떄 2.전화번호 양식에 맞지 않을 경우 */
  const liList = [].slice.call(phoneNumberUlEl.childNodes);
  /*
  [a].slice(); =>[a]가 복제됨
  [].slice.call(유사배열) => 유사배열을 배열로 복제
  */
  /*
  childNodes :Nodelist라는 유사배열로 나옴 <-[text ,li ,text]
  요소 노드뿐만 아니라 텍스트노드(공백,textNode) 또는 주석 노드와 같은 비요소 노드도 포함함. (text:공백이 나온 것)
  따라서 요소노드만 찾기위해 nodeType를 써줌.
  node의 대분류가 있는데 nodeType이 1이면. TextNode이다. //  text의 nodeType은 3,요소(li)의 nodeType은 1.
  따라서 li엘리먼트만 찾기위해 배열을 순회하면서 nodeType이 1인 것만 찾음
  */

  for (const li of liList) {
    if (li.nodeType !== 1) {
      continue; // return으로 하면 for문이 아예 끝나서 뒤에 요소도 실행 안되게 됨.
    }

    // <li>가 맞다면
    // li 밑에 input가져옴
    const inp = li.querySelector('input');
    const numErr = li.querySelector('.phoneNum-error');
    const { value } =
      inp; /* 변수명과 객체의 프로퍼티명이 같을떄 축약으로 사용됨 */
    const phoneReg = /^\d{3}-\d{4}-\d{4}$/;

    // 1. value가 ''이면 "전화번호를 입력하세요" 출력
    if (value === '') {
      numErr.innerHTML = '전화번호를 입력하세요';
      inp.classList.add('invalid');
    } else if (!phoneReg.test(value)) {
      // 2. value를 입력했지만 xxx-xxxx-xxxx 형태가 아니라면 "올바른 전화번호 형식이 아닙니다" 출력
      numErr.innerHTML = '올바른 전화번호 형식이 아닙니다 (000-0000-0000)';
      inp.classList.add('invalid');
    } else {
      numErr.innerHTML = '';
      inp.classList.remove('invalid');
    }
  }
});

/* 전화번호 */

// 추가이벤트
btnAddEl.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = `<div><input type="tel" id="tel" />
  <button type="button" class="btn-del">삭제</button>
</div><div class="phoneNum-error err-massege"></div>`;
  phoneNumberUlEl.appendChild(li); // appendChild는 요소가 들어가야 함
});

// 삭제이벤트
numContainer.addEventListener('click', (e) => {
  if (e.target.className !== 'btn-del') {
    return;
  }

  // remove() append() - 거의 안씀(인터넷 익스플로어에선 지원이 안되서!!) / removeChild,appendChild로 쓰는게 조음
  // e.target.parentElement.remove();
  e.target.parentElement.parentElement.parentElement.removeChild(
    e.target.parentElement.parentElement,
  );
});
