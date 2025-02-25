import { IWeatherState } from './weather.types';

export const initialWeatherState: IWeatherState = {
  dataOne: {
    city: {
      id: 0,
      name: '',
      coord: {
        lat: 0,
        lon: 0,
      },
      country: '',
      population: 0,
      timezone: 0,
      sunrise: 0,
      sunset: 0,
    },
    forecastData: [],
    error: null,
    loading: false,
  },
  dataTwo: {
    city: {
      id: 0,
      name: '',
      coord: {
        lat: 0,
        lon: 0,
      },
      country: '',
      population: 0,
      timezone: 0,
      sunrise: 0,
      sunset: 0,
    },
    forecastData: [],
    error: null,
    loading: false,
  },
};
