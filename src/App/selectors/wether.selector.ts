import { RootState } from '../store';
import { IWeatherState } from '../store/slices/weatherSlice/weather.types';

export const getWeatherStateField =
  <K extends keyof IWeatherState>(field: K) =>
  (state: RootState) =>
    state.weatherReducer[field];
