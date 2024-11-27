function getCurrentWeather() {
  return getLocation()
    .then((position) => {
      const url = getCurrentWeatherApiUrl({
        lat: position.lat,
        lon: position.lon,
      });
      return fetch(url);
    })
    .then((response) => {
      return response.json();
    });
}

function createCurrentWeather(currentWeather) {
  const currentWeatherEl = document.createElement("section");
  currentWeatherEl.classList.add("current-weather");
  currentWeatherEl.innerHTML = `
    <div class="current-weather-box">
      <p class="city-name">${currentWeather.city}</p>
      <img
        src="${currentWeather.weather.icon}"
        class="weather-icon"
        alt="${currentWeather.weather.text}"
        width="64"
        height="64"
      />
      <p class="temperature">${currentWeather.temp_c}°C</p>
    </div>
    <p class="weather-description">${currentWeather.weather.text}</p>
  `;

  return currentWeatherEl;
}

function displayCurrentWeather() {
  getCurrentWeather()
    .then((currentWeather) => {
      const weatherElement = createCurrentWeather(currentWeather);
      document.body.appendChild(weatherElement); 
    })
    .catch((error) => {
      console.error("Failed to fetch weather:", error);
    });
}

displayCurrentWeather();
