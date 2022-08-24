let numOne = 0;
let numTwo = 0;
let operator = '';

const btns = document.querySelectorAll('button');
const choiceOprEl = document.querySelector('#choiceOpr');
const renderEl = document.querySelector('#renderEl');

for (let btnEl of btns) {
  // <숫자 누를시>
  if (btnEl.value >= 0) {
    btnEl.addEventListener('click', (e) => {
      if (!operator || !numOne) {
        numOne += e.target.value;
        renderEl.value = parseInt(numOne, 10);
      } else {
        numTwo += e.target.value;
        renderEl.value = parseInt(numTwo, 10);
      }
    });
  }
}

// <연산자 누를때>
const optBtn = document.querySelectorAll('.opt');

for (const btnEl of optBtn) {
  btnEl.addEventListener('click', (e) => {
    if (numOne !== 0 && !numTwo) {
      operator = e.target.value;
      choiceOprEl.value = operator;
    }
  });
}
// < = 누를 떄>
const resultEl = document.querySelector('.result'); // = 버튼
function calc(opt, one, two) {
  switch (opt) {
    case '+':
      return one + two;
    case '-':
      return one - two;
    case '*':
      return one * two;
    default:
      return one / two;
  }
}
// console.log(calc('+', 3, 2));

resultEl.addEventListener('click', (e) => {
  if (!numTwo) {
    alert('숫자를 입력하세요.');
    return;
  }
  if (numTwo) {
    // numTwo에 값이 있으면 계산해서 출력하기
    let result = calc(operator, parseInt(numOne, 10), parseInt(numTwo, 10));
    renderEl.value = result;
    numOne = result;
    numTwo = 0;
  }
});

// C누를시
const cEl = document.querySelector('.cEl');
cEl.addEventListener('click', (e) => {
  numOne = 0;
  numTwo = 0;
  operator = '';
  renderEl.value = 0;
  choiceOprEl.value = e.target.innerHTML;
});
