function getWeeklyForecast() {
  return getLocation()
    .then((position) => {
      const url = getWeeklyForecastApiUrl({
        lat: position.lat,
        lon: position.lon,
      });
      return fetch(url);
    })
    .then((response) => {
      return response.json();
    });
}

function displayWeeklyForecast() {
  const weeklyForecastBox = document.querySelector(".weekly-forecast-box");

  getWeeklyForecast().then((weeklyForecast) => {
    stopSkeletonLoading("weekly-forecast-box");

    for (let i = 0; i < 7; i++) {
      const dayForecast = weeklyForecast.forecast[i];
      const icon = getWeatherIcon(dayForecast.weather.code);
      const forecast = createDayForecast({
        day_of_week: dayForecast.day_of_week,
        weather: {
          icon: icon,
          text: dayForecast.weather.text,
        },
        max_temp_c: dayForecast.max_temp_c.toFixed(1),
        min_temp_c: dayForecast.min_temp_c.toFixed(1),
      });
      weeklyForecastBox.appendChild(forecast);
    }
  });
}

function createDayForecast(forecast) {
  const forecastEl = document.createElement("article");
  forecastEl.classList.add("day-forecast");
  forecastEl.innerHTML = `
    <div class="day-of-week-box">
      <p class="day-of-week">${forecast.day_of_week}</p>
      <img
        src="${forecast.weather.icon}"
        class="weather-icon"
        alt="${forecast.weather.text}"
        width="32"
        height="32"
      />
      <p><span class="max-temperature">${forecast.max_temp_c}</span> / <span class="min-temperature">${forecast.min_temp_c}</span></p>
    </div>
    <p class="weather-text">${forecast.weather.text}</p>
  `;

  return forecastEl;
}

displayWeeklyForecast();
