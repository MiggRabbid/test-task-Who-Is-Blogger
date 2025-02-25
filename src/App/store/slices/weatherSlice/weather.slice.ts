import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialWeatherState } from './weather.data';
import {
  ISetCityPayload,
  ISetErrorPayload,
  ISetForecastDataPayload,
  ISetLoadingPayload,
} from './weather.types';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialWeatherState,
  reducers: {
    setCity: (state, action: PayloadAction<ISetCityPayload>) => {
      const { type, data } = action.payload;
      state[type].city = data;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setForecastData: (state, action: PayloadAction<ISetForecastDataPayload>) => {
      const { type, data } = action.payload;
      state[type].forecastData = data;
    },
    setLoading: (state, action: PayloadAction<ISetLoadingPayload>) => {
      const { type, data } = action.payload;
      state[type].loading = data;
    },
    setError: (state, action: PayloadAction<ISetErrorPayload>) => {
      const { type, data } = action.payload;
      state[type].error = data;
    },
  },
});

export const { actions } = weatherSlice;
export const weatherReducer = weatherSlice.reducer;
