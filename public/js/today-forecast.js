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
        temp_c: 6.6,
      },
      {
        time: 10,
        weather: {
          text: "sunny",
          code: 1000,
        },
        temp_c: 6.6,
      },
      {
        time: 11,
        weather: {
          text: "sunny",
          code: 1000,
        },
        temp_c: 6.6,
      },
      {
        time: 12,
        weather: {
          text: "sunny",
          code: 1000,
        },
        temp_c: 6.6,
      },
      {
        time: 13,
        weather: {
          text: "sunny",
          code: 1000,
        },
        temp_c: 6.6,
      },
      {
        time: 14,
        weather: {
          text: "sunny",
          code: 1000,
        },
        temp_c: 6.6,
      },
      {
        time: 15,
        weather: {
          text: "sunny",
          code: 1000,
        },
        temp_c: 6.6,
      },
    ],
  };
}

// replace forecast data with getTodayForecast().forecast
const forecast = [
  {
    hour: 9,
    weather: "rainy",
    temperature: 9,
  },
  {
    hour: 10,
    weather: "cloudy",
    temperature: 4,
  },
  {
    hour: 11,
    weather: "sunny",
    temperature: 3,
  },
  {
    hour: 12,
    weather: "windy",
    temperature: 4,
  },
  {
    hour: 13,
    weather: "cold",
    temperature: 7,
  },
  {
    hour: 14,
    weather: "storm",
    temperature: 1,
  },
  {
    hour: 15,
    weather: "storm",
    temperature: 2,
  },
];

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
        <div class="time">${forecast[0].hour}:00</div>
        <img src="${
          // change getWeatherIcon(forecast[0].weather.code)
          icons[forecast[0].weather]
        }" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[0].temperature}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[1].hour}:00</div>
        <img src="${
          icons[forecast[1].weather]
        }" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[1].temperature}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[2].hour}:00</div>
        <img src="${
          icons[forecast[2].weather]
        }" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[2].temperature}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[3].hour}:00</div>
        <img src="${
          icons[forecast[3].weather]
        }" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[3].temperature}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[4].hour}:00</div>
        <img src="${
          icons[forecast[4].weather]
        }" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[4].temperature}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[5].hour}:00</div>
        <img src="${
          icons[forecast[5].weather]
        }" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[5].temperature}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[6].hour}:00</div>
        <img src="${
          icons[forecast[6].weather]
        }" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[6].temperature}°</div>
    </div>
`;
