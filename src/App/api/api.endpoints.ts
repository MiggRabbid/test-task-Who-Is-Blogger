export const API_URL = 'https://api.openweathermap.org';
export const GEO_API_URL = 'http://api.openweathermap.org';

export const openWetherMapEndpoints = {
  getWeather: (): string => `/data/2.5/forecast`,
  getGeocoding: (): string => `/geo/1.0/direct`,
};
