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

function getWeatherIcon(code) {
  return `/icons/weather/${weatherIcons[code]}`;
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
