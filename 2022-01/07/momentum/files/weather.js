const weatherEl = document.querySelector('#weather div:first-child');
const cityEl = document.querySelector('#weather div:last-child');

function ok(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const APIkey = '91143b3c888751ffcd5ce4c95b4a11ba';
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;

  fetch(url)
    .then((response) => response.json()) // data내용만 자바스크립트 형식으로 뺴냄.
    .then((data) => {
      weatherEl.innerHTML = `${data.weather[0].main}`;
      cityEl.innerHTML = `${data.name}`;
    });
}

function err() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(ok, err);
