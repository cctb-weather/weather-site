const todayForecastBox = document.querySelector(".today-forecast-box");
const time = new Date().getHours();

function getTodayForecast() {
  // You can use getIcon like following:
  return {
    forecast: [
      {
        time: 9,
        weather: {
          text: "sunny",
          code: 1000,
        },
        temp_c: -1.0,
      },
      {
        time: 10,
        weather: {
          text: "rain",
          code: 1195,
        },
        temp_c: 1.0,
      },
      {
        time: 11,
        weather: {
          text: "thunderstorms-snow",
          code: 1282,
        },
        temp_c: 2.0,
      },
      {
        time: 12,
        weather: {
          text: "partly-cloudy-day-snow",
          code: 1222,
        },
        temp_c: 3.0,
      },
      {
        time: 13,
        weather: {
          text: "partly-cloudy-day-rain",
          code: 1063,
        },
        temp_c: 4.0,
      },
      {
        time: 14,
        weather: {
          text: "partly-cloudy-day-sleet",
          code: 1249,
        },
        temp_c: 4.0,
      },
      {
        time: 15,
        weather: {
          text: "snow",
          code: 1114,
        },
        temp_c: 1.0,
      },
    ],
  };
}

// replace forecast data with getTodayForecast().forecast
const forecast = getTodayForecast().forecast;

const icons = {
  sunny: "/icons/weather/clear-day.svg",
  cloudy: "/icons/weather/cloudy.svg",
  rainy: "/icons/weather/rainy-3.svg",
  windy: "/icons/weather/wind.svg",
  cold: "/icons/weather/frost-day.svg",
  storm: "/icons/weather/rainy-3.svg",
};

// modify following code with new forecast data structure
todayForecastBox.innerHTML = `
    <div class="hour">
        <div class="time">${forecast[0].time}:00</div>
        <img src="${
          // change getWeatherIcon(forecast[0].weather.code)
          getWeatherIcon(forecast[0].weather.code)
        }" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[0].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[1].time}:00</div>
        <img src="${getWeatherIcon(
          forecast[1].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[1].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[2].time}:00</div>
        <img src="${getWeatherIcon(
          forecast[2].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[2].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[3].time}:00</div>
        <img src="${getWeatherIcon(
          forecast[3].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[3].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[4].time}:00</div>
        <img src="${getWeatherIcon(
          forecast[4].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[4].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[5].time}:00</div>
        <img src="${getWeatherIcon(
          forecast[5].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[5].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[6].time}:00</div>
        <img src="${getWeatherIcon(
          forecast[6].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[6].temp_c}°</div>
    </div>
`;
