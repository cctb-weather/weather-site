const weatherIcons = {
  1000: "clear-day.svg",
  1003: "partly-cloudy-day.svg",
  1006: "cloudy.svg",
  1009: "overcast-day.svg",
  1030: "mist.svg",
  1063: "partly-cloudy-day-rain.svg",
  1066: "clear-day.svg",
  1069: "partly-cloudy-day-sleet.svg",
  1072: "drizzle.svg",
  1087: "thunderstorms-day.svg",
  1114: "snow.svg",
  1117: "snow.svg",
  1135: "fog.svg",
  1147: "fog.svg",
  1150: "drizzle.svg",
  1153: "drizzle.svg",
  1168: "drizzle.svg",
  1171: "drizzle.svg",
  1180: "partly-cloudy-day-drizzle.svg",
  1183: "rain.svg",
  1186: "partly-cloudy-day-rain.svg",
  1189: "rain.svg",
  1192: "partly-cloudy-day-rain.svg",
  1195: "rain.svg",
  1198: "rain.svg",
  1201: "rain.svg",
  1204: "sleet.svg",
  1207: "sleet.svg",
  1210: "partly-cloudy-day-rain.svg",
  1213: "snow.svg",
  1216: "partly-cloudy-day-snow.svg",
  1219: "snow.svg",
  1222: "partly-cloudy-day-snow.svg",
  1225: "snow.svg",
  1237: "hail.svg",
  1240: "partly-cloudy-day-drizzle.svg",
  1243: "partly-cloudy-day-rain.svg",
  1246: "partly-cloudy-day-drizzle.svg",
  1249: "partly-cloudy-day-sleet.svg",
  1252: "partly-cloudy-day-sleet.svg",
  1255: "partly-cloudy-day-snow.svg",
  1258: "partly-cloudy-day-snow.svg",
  1261: "partly-cloudy-day-hail.svg",
  1264: "partly-cloudy-day-hail.svg",
  1273: "thunderstorms-day-rain.svg",
  1276: "thunderstorms.svg",
  1279: "thunderstorms-day-snow.svg",
  1282: "thunderstorms-snow.svg",
};

const weatherBackground = {
  1000: "clear_day.jpg",
  1003: "cloudy_and_clear.jpg",
  1006: "cloudy_and_clear.jpg",
  1009: "cloudy.jpg",
  1030: "mist.jpg",
  1063: "partly_rain.jpg",
  1066: "clear_day.jpg",
  1069: "sleet.jpg",
  1072: "drizzle.jpg",
  1087: "thunderstorm_2.jpg",
  1114: "snow.jpg",
  1117: "snow.jpg",
  1135: "fog.jpg",
  1147: "fog.jpg",
  1150: "drizzle.jpg",
  1153: "drizzle.jpg",
  1168: "drizzle.jpg",
  1171: "drizzle.jpg",
  1180: "drizzle.jpg",
  1183: "rain.jpg",
  1186: "partly_rain.jpg",
  1189: "rain.jpg",
  1192: "partly_rain.jpg",
  1195: "rain.jpg",
  1198: "rain.jpg",
  1201: "rain.jpg",
  1204: "sleet.jpg",
  1207: "sleet.jpg",
  1210: "partly_rain.jpg",
  1213: "snow.jpg",
  1216: "partly_snow.jpg",
  1219: "snow.jpg",
  1222: "partly_snow.jpg",
  1225: "snow.jpg",
  1237: "hail.jpg",
  1240: "drizzle.jpg",
  1243: "partly_rain.jpg",
  1246: "drizzle.jpg",
  1249: "sleet.jpg",
  1252: "sleet.jpg",
  1255: "partly_snow.jpg",
  1258: "partly_snow.jpg",
  1261: "partly_hail.jpg",
  1264: "partly_hail.jpg",
  1273: "thunderstorm_rain.jpg",
  1276: "thunderstorm.jpg",
  1279: "thunderstorm_snow.jpg",
  1282: "thunderstorm_snow.jpg",
};

function getWeatherIcon(code) {
  return `/icons/weather/${weatherIcons[code]}`;
}

function getWeatherBackground(code) {
  return `/background/${weatherBackground[code]}`;
}

/**
 * get the current location of the user
 *
 * getLocation().then((position) => {
 *  console.log(position.lat, position.lon);
 * });
 *
 * @returns Promise<{lat: number, lon: number}>
 */
function getLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    }, reject);
  });
}

const API_URL = "https://weather-api-server-fy1z.onrender.com";

function getCurrentWeatherApiUrl({ lat, lon }) {
  return `${API_URL}/weather?lat=${lat}&lon=${lon}`;
}

function getDayForecastApiUrl({ lat, lon }) {
  return `${API_URL}/day_forecast?lat=${lat}&lon=${lon}`;
}

function getWeeklyForecastApiUrl({ lat, lon }) {
  return `${API_URL}/week_forecast?lat=${lat}&lon=${lon}`;
}

function stopSkeletonLoading(id) {
  const el = document.getElementById(id);
  el.classList.remove("skeleton-loading");
}

async function setWeatherBackground(weatherCode) {
  const background = getWeatherBackground(weatherCode);
  document.body.style.backgroundImage = `url(${background})`;
}

setWeatherBackground();
