function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error!');
      }
      return res.json();
    })
    .then(data => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}`;
    })
    .catch(() => {
      console.log('Error!');
    });
}

function onGeoError() {
  alert('위치를 찾을 수 없어 날씨 정보를 제공할 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
