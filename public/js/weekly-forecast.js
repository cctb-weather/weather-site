function displayWeeklyForecast() {
  const weeklyForecastBox = document.querySelector(".weekly-forecast-box");

  for (let i = 0; i < 7; i++) {
    const forecast = createDayForecast({
      day_of_week: "Today",
      weather: {
        icon: "https://cdn.weatherapi.com/weather/64x64/day/116.png",
        text: "Sunny",
      },
      max_temp_c: 15,
      min_temp_c: 9,
    });
    weeklyForecastBox.appendChild(forecast);
  }
}

function createDayForecast(forecast) {
  const forecastEl = document.createElement("article");
  forecastEl.classList.add("day-forecast");
  forecastEl.innerHTML = `
    <p>${forecast.day_of_week}</p>
    <img
      src="${forecast.weather.icon}"
      class="weather-icon"
      alt="${forecast.weather.text}"
      width="32"
      height="32"
    />
    <p>${forecast.weather.text}</p>
    <p><span class="max-temperature">${forecast.max_temp_c}</span> / <span class="min-temperature">${forecast.min_temp_c}</span></p>
  `;

  return forecastEl;
}

displayWeeklyForecast();
