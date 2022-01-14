import axios from 'axios';

function ProgressBar(id, show) {
  this.containerDiv = document.querySelector(id);
  this.containerDiv.classList.add('container');

  this.barEl = document.createElement('div');
  this.barEl.classList.add('progress-bar');

  this.containerDiv.appendChild(this.barEl);

  if (show.showPercentage) {
    this.showEl = document.createElement('div');
    this.showEl.innerHTML = '0%';
    this.barEl.appendChild(this.showEl);
  }
}

ProgressBar.prototype.set = function (percent) {
  if (percent <= 0) {
    return;
  }

  const width = this.containerDiv.offsetWidth * (percent * 0.01);
  this.barEl.style.width = `${width}px`;

  if (this.showEl) {
    this.showEl.innerHTML = `${percent}%`;
  }
};

// <살행코드 - progress 진행상황 출력>
// const p1 = new ProgressBar('#one', { showPercentage: true });
// p1.set(30);

// setTimeout(() => {
//   p1.set(70);
// }, 2000);

// const p2 = new ProgressBar('#two', { showPercentage: false });
// p2.set(10);

/* <파일 업로드> -api연동 */
const inp = document.querySelector('input[type=file]'); // 1.파일을 갖고옴

inp.addEventListener('change', () => {
  // 2.파일을 업로드 하면 change 이벤트가 발생함
  const files = [].slice.call(inp.files); // 3.files는 유사배열임. 배열로 만듬

  const form = new FormData(); // 4.서버에 데이터를 보내기위해 구현되있는 생성자함수를 실행함.

  files.forEach((file) => form.append('file', file)); // 5.form data은 인턴스임, 이 인스턴스에 append라는 메서드를 쓰면 사진의 데이터가 인스턴스에 들어감.

  inp.value = '';
  // 방법1. progress(진행률)을 알 수 없음(그래서 axios로 구현함)
  // fetch('/api/upload', { method: 'post', body: form }) // 6.크롬 브라우져에서 form 데이터를 서버로 보냄. 그럼 서버로 사진이 전송이 됨.
  // .then((res) => res.json()) // 응답을 받음
  // .then((res) => console.log(res));

  const p3 = new ProgressBar('#two', { showPercentage: true });

  axios
    .post('/api/upload', form, {
      onUploadProgress(e) {
        // x : 100 = e.loaded : e.total

        // 1. e.loaded와 e.total을 백분율로 계산 => 30;
        // 2. p3.set(계산된 백분율 값);
        const percent = Math.round((100 * e.loaded) / e.total);
        p3.set(percent);
        // console.log(e);
        // console.log(x); <- ProgressEvent {isTrusted: true, loaded: 16384, total: 64014,  …}
        // e.loaded; 얼만큼 업로드했는가
        // e.total; 파일의 전체 용량 (전체 업로드할 양)
      },
    })
    .then((res) => res.json())
    .then(console.log);
});
