const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/images/day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/images/day/atmosphere.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/images/day/cloudy.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/images/day/rain.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/images/day/snow.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/images/day/thunderstorm.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/images/night/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/images/night/cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/images/night/atmosphere.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/images/night/rain.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/images/night/snow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../assets/images/night/thunderstorm.png", import.meta.url)
      .href,
  },
];

const coordinates = {
  latitude: 30.11705,
  longitude: -97.308861,
  // latitude: 22.3193,
  // longitude: 114.1694,
};

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.gorgo.blinklab.com"
    : "http://localhost:3001";

const APIkey = "94aa0dfadeae880707f0d95a9c3ca08a";

export { weatherOptions, coordinates, APIkey, baseUrl };
