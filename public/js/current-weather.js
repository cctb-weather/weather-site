function getCurrentWeather() {
  return {
    city: "Vancouver",
    temp_c: 10,
    weather: {
      code: 1000,
      text: "Sunny",
    },
    humidity: 77,
    wind_kph: 19,
  };
}

function displayCurrentWeather() {
  // TODO: implement this function
  const currentWeather = getCurrentWeather();

  // TODO: build html dynamic with currentWeather data
}

displayCurrentWeather();
