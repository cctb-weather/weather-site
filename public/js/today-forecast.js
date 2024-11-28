const todayForecastBox = document.querySelector(".today-forecast-box");
const time = new Date().getHours();

getDayForecast()
  .then((data) => {
    console.log(data);
    const forecast = data.forecast;
    todayForecastBox.innerHTML = `
    <div class="hour">
        <div class="time">${forecast[0].time}</div>
        <img src="${
          // change getWeatherIcon(forecast[0].weather.code)
          getWeatherIcon(forecast[0].weather.code)
        }" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[0].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[1].time}</div>
        <img src="${getWeatherIcon(
          forecast[1].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[1].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[2].time}</div>
        <img src="${getWeatherIcon(
          forecast[2].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[2].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[3].time}</div>
        <img src="${getWeatherIcon(
          forecast[3].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[3].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[4].time}</div>
        <img src="${getWeatherIcon(
          forecast[4].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[4].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[5].time}</div>
        <img src="${getWeatherIcon(
          forecast[5].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[5].temp_c}°</div>
    </div>

    <div class="hour">
        <div class="time">${forecast[6].time}</div>
        <img src="${getWeatherIcon(
          forecast[6].weather.code
        )}" alt="Sunny" width="400" height="300">
        <div class="temperature">${forecast[6].temp_c}°</div>
    </div>
`;
  })
  .catch((error) => {
    console.log(error);
  });

function getDayForecast() {
  return getLocation()
    .then((position) => {
      const url = getDayForecastApiUrl({
        lat: position.lat,
        lon: position.lon,
      });
      return fetch(url);
    })
    .then((response) => {
      return response.json();
    });
}

// modify following code with new forecast data structure
// todayForecastBox.innerHTML = `
//     <div class="hour">
//         <div class="time">${forecast[0].time}:00</div>
//         <img src="${
//           // change getWeatherIcon(forecast[0].weather.code)
//           getWeatherIcon(forecast[0].weather.code)
//         }" alt="Sunny" width="400" height="300">
//         <div class="temperature">${forecast[0].temp_c}°</div>
//     </div>

//     <div class="hour">
//         <div class="time">${forecast[1].time}:00</div>
//         <img src="${getWeatherIcon(
//           forecast[1].weather.code
//         )}" alt="Sunny" width="400" height="300">
//         <div class="temperature">${forecast[1].temp_c}°</div>
//     </div>

//     <div class="hour">
//         <div class="time">${forecast[2].time}:00</div>
//         <img src="${getWeatherIcon(
//           forecast[2].weather.code
//         )}" alt="Sunny" width="400" height="300">
//         <div class="temperature">${forecast[2].temp_c}°</div>
//     </div>

//     <div class="hour">
//         <div class="time">${forecast[3].time}:00</div>
//         <img src="${getWeatherIcon(
//           forecast[3].weather.code
//         )}" alt="Sunny" width="400" height="300">
//         <div class="temperature">${forecast[3].temp_c}°</div>
//     </div>

//     <div class="hour">
//         <div class="time">${forecast[4].time}:00</div>
//         <img src="${getWeatherIcon(
//           forecast[4].weather.code
//         )}" alt="Sunny" width="400" height="300">
//         <div class="temperature">${forecast[4].temp_c}°</div>
//     </div>

//     <div class="hour">
//         <div class="time">${forecast[5].time}:00</div>
//         <img src="${getWeatherIcon(
//           forecast[5].weather.code
//         )}" alt="Sunny" width="400" height="300">
//         <div class="temperature">${forecast[5].temp_c}°</div>
//     </div>

//     <div class="hour">
//         <div class="time">${forecast[6].time}:00</div>
//         <img src="${getWeatherIcon(
//           forecast[6].weather.code
//         )}" alt="Sunny" width="400" height="300">
//         <div class="temperature">${forecast[6].temp_c}°</div>
//     </div>
// `;
