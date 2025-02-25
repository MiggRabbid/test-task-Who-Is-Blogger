import { ICityInfo, IForecastEntry } from '../../../types/weather.types';

export enum TypeDataWeatherState {
  ONE = 'dataOne',
  TWO = 'dataTwo',
}

export type TypeDataError = string | null;

export interface IWeatherState {
  [TypeDataWeatherState.ONE]: {
    city: ICityInfo;
    forecastData: IForecastEntry[];
    loading: boolean;
    error: TypeDataError;
  };
  [TypeDataWeatherState.TWO]: {
    city: ICityInfo;
    forecastData: IForecastEntry[];
    loading: boolean;
    error: TypeDataError;
  };
}

export interface IBasePayload {
  type: TypeDataWeatherState;
}

export interface ISetCityPayload extends IBasePayload {
  data: ICityInfo;
}

export interface ISetForecastDataPayload extends IBasePayload {
  data: IForecastEntry[];
}

export interface ISetLoadingPayload extends IBasePayload {
  data: boolean;
}

export interface ISetErrorPayload extends IBasePayload {
  data: TypeDataError;
}
