export const WEATHER_ICON_MAP: Record<number, { 0: string; 1: string }> = {
  // Clear / Cloud
  1000: { 0: 'assets/weather/night/clear.webp', 1: 'assets/weather/day/clear.webp' },
  1003: {
    0: 'assets/weather/night/partly-cloudy.webp',
    1: 'assets/weather/day/partly-cloudy.webp',
  },
  1006: { 0: 'assets/weather/night/cloudy.webp', 1: 'assets/weather/day/partly-cloudy.webp' },
  1009: { 0: 'assets/weather/night/cloudy.webp', 1: 'assets/weather/day/partly-cloudy.webp' },

  // Mist / Fog
  1030: { 0: 'assets/weather/night/mist.webp', 1: 'assets/weather/day/mist.webp' },
  1135: { 0: 'assets/weather/night/mist.webp', 1: 'assets/weather/day/mist.webp' },
  1147: { 0: 'assets/weather/night/freezing.webp', 1: 'assets/weather/day/freezing-fog.webp' },

  // Rain Possible
  1063: { 0: 'assets/weather/night/rain.webp', 1: 'assets/weather/day/rain.webp' },

  // Snow Possible
  1066: { 0: 'assets/weather/night/snow.webp', 1: 'assets/weather/day/snow.webp' },

  // Sleet Possible
  1069: {
    0: 'assets/weather/night/snow.webp',
    1: 'assets/weather/day/snow.webp',
  },

  // Freezing Drizzle Possible
  1072: {
    0: 'assets/weather/night/freezing.webp',
    1: 'assets/weather/day/freezing.webp',
  },

  // Thunder Possible
  1087: {
    0: 'assets/weather/night/thunder.webp',
    1: 'assets/weather/day/thunder.webp',
  },

  // Blizzard / Blowing Snow
  1114: { 0: 'assets/weather/night/snow.webp', 1: 'assets/weather/day/snow.webp' },
  1117: { 0: 'assets/weather/night/blizzard.webp', 1: 'assets/weather/day/blizzard.webp' },

  // Drizzle
  1150: { 0: 'assets/weather/night/rain.webp', 1: 'assets/weather/day/rain.webp' },
  1153: { 0: 'assets/weather/night/rain.webp', 1: 'assets/weather/day/rain.webp' },

  // Freezing Drizzle
  1168: {
    0: 'assets/weather/night/freezing.webp',
    1: 'assets/weather/day/freezing.webp',
  },
  1171: {
    0: 'assets/weather/night/freezing-drizzle-heavy.webp',
    1: 'assets/weather/day/freezing-drizzle-heavy.webp',
  },

  // Light Rain
  1180: { 0: 'assets/weather/night/rain.webp', 1: 'assets/weather/day/rain.webp' },
  1183: { 0: 'assets/weather/night/rain.webp', 1: 'assets/weather/day/rain.webp' },

  // Moderate Rain
  1186: { 0: 'assets/weather/night/rain.webp', 1: 'assets/weather/day/rain.webp' },
  1189: { 0: 'assets/weather/night/rain.webp', 1: 'assets/weather/day/rain.webp' },

  // Heavy Rain
  1192: { 0: 'assets/weather/night/rain.webp', 1: 'assets/weather/day/rain.webp' },
  1195: { 0: 'assets/weather/night/rain.webp', 1: 'assets/weather/day/rain.webp' },

  // Freezing Rain
  1198: { 0: 'assets/weather/night/freezing.webp', 1: 'assets/weather/day/freezing.webp' },
  1201: {
    0: 'assets/weather/night/freezing.webp',
    1: 'assets/weather/day/freezing.webp',
  },

  // Sleet
  1204: { 0: 'assets/weather/night/freezing.webp', 1: 'assets/weather/day/freezing.webp' },
  1207: { 0: 'assets/weather/night/freezing.webp', 1: 'assets/weather/day/freezing.webp' },

  // Light Snow
  1210: { 0: 'assets/weather/night/snow.webp', 1: 'assets/weather/day/snow.webp' },
  1213: { 0: 'assets/weather/night/snow.webp', 1: 'assets/weather/day/snow.webp' },

  // Moderate Snow
  1216: { 0: 'assets/weather/night/snow.webp', 1: 'assets/weather/day/snow.webp' },
  1219: { 0: 'assets/weather/night/snow.webp', 1: 'assets/weather/day/snow.webp' },

  // Heavy Snow
  1222: { 0: 'assets/weather/night/snow.webp', 1: 'assets/weather/day/snow.webp' },
  1225: { 0: 'assets/weather/night/snow.webp', 1: 'assets/weather/day/snow.webp' },

  // Ice Pellets
  1237: {
    0: 'assets/weather/night/freezing-drizzle-heavy.webp',
    1: 'assets/weather/day/freezing-drizzle-heavy.webp',
  },

  // Rain Showers
  1240: { 0: 'assets/weather/night/rain.webp', 1: 'assets/weather/day/rain.webp' },
  1243: { 0: 'assets/weather/night/rain.webp', 1: 'assets/weather/day/rain.webp' },
  1246: { 0: 'assets/weather/night/heavy-rain.webp', 1: 'assets/weather/day/heavy-rain.webp' },

  // Sleet Showers
  1249: { 0: 'assets/weather/night/freezing.webp', 1: 'assets/weather/day/freezing.webp' },
  1252: { 0: 'assets/weather/night/freezing.webp', 1: 'assets/weather/day/freezing.webp' },

  // Snow Showers
  1255: { 0: 'assets/weather/night/snow.webp', 1: 'assets/weather/day/snow.webp' },
  1258: { 0: 'assets/weather/night/snow.webp', 1: 'assets/weather/day/snow.webp' },

  // Ice Pellet Showers
  1261: {
    0: 'assets/weather/night/freezing-drizzle-heavy.webp',
    1: 'assets/weather/day/freezing-drizzle-heavy.webp',
  },
  1264: {
    0: 'assets/weather/night/freezing-drizzle-heavy.webp',
    1: 'assets/weather/day/freezing-drizzle-heavy.webp',
  },

  // Thunder with Rain
  1273: { 0: 'assets/weather/night/thunder-rain.webp', 1: 'assets/weather/day/thunder-rain.webp' },
  1276: { 0: 'assets/weather/night/thunder-rain.webp', 1: 'assets/weather/day/thunder-rain.webp' },

  // Thunder with Snow
  1279: { 0: 'assets/weather/night/thunder-snow.webp', 1: 'assets/weather/day/thunder-snow.webp' },
  1282: { 0: 'assets/weather/night/thunder-snow.webp', 1: 'assets/weather/day/thunder-snow.webp' },
};
