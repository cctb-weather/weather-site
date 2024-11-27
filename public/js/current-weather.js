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
  
  const icon = getWeatherIcon(currentWeather.weather.code);
  return `
<div class="left-weather-box">
  <div class="current-city">
    <h1>${currentWeather.city}</h1>
  </div>
  <div class="weather-box">
    <div class="info-weather">
      <div class="weather">
        <p class="temperature">${currentWeather.temp_c}<span>°C</span></p>
        <p class="description">${currentWeather.text}</p>
      </div>
    </div>
    <div class="weather-details">
      <div class="humidity">
        <i class="bx bx-water"></i>
        <div class="text">
          <div class="info-humidity">
            <p>Humidity</p>
          </div>
          <span>${currentWeather.humidity}%</span>
        </div>
      </div>
      <div class="wind">
        <i class="bx bx-wind"></i>
        <div class="text">
          <div class="info-wind">
            <p>Wind Speed</p>
          </div>
          <span>${currentWeather.wind_kph} Km/h</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="right-weather-box">
  <img class="weather-icon"
    src="${currentWeather.weather.icon}"
    width="128"
    height="128"
    alt="Weather Icon"
  />
</div>
`; 
}

function displayCurrentWeather() {
  getCurrentWeather()
    .then((currentWeather) => {
      const weatherElement = createCurrentWeather(currentWeather);
      const weatherBox = document.querySelector(".current-weather-box");
      if (weatherBox) {
        weatherBox.innerHTML = weatherElement;
      } else {
        console.error("Weather box element not found");
      }
    })
    .catch((error) => {
      console.error("Failed to fetch weather:", error);
    });
}

displayCurrentWeather();