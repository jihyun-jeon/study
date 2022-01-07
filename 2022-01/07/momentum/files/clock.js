const clockEl = document.querySelector('.clock');

function clock() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockEl.innerHTML = `${hour}:${minute}:${seconds}`;
}

clock();
setInterval(clock, 1000);
