import { sendRequest } from './api.config';
import { API_URL, GEO_API_URL, openWetherMapEndpoints } from './api.endpoints';

import {
  IApiGetGeocodingParams,
  IApiGetWeatherParams,
  TypeAxiosMethod,
} from './api.types';
import { IForecastResponse, TypeGeocodingResponse } from '../types/weather.types';

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

export const api = {
  getWeather: async (params: IApiGetWeatherParams): Promise<IForecastResponse> => {
    const response = await sendRequest(
      API_URL,
      TypeAxiosMethod.get,
      openWetherMapEndpoints.getWeather(),
      {
        ...params,
        lang: 'ru',
        appid: API_KEY,
      },
    );

    return response.data;
  },

  getGeocoding: async (
    params: IApiGetGeocodingParams,
  ): Promise<TypeGeocodingResponse> => {
    const response = await sendRequest(
      GEO_API_URL,
      TypeAxiosMethod.get,
      openWetherMapEndpoints.getGeocoding(),
      {
        ...params,
        appid: API_KEY,
      },
    );

    return response.data;
  },
};
