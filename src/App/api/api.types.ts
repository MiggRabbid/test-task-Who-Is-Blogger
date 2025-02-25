export enum TypeAxiosMethod {
  get = 'get',
  post = 'post',
  delete = 'delete',
}

export interface IApiGetWeatherParams {
  lat: number;
  lon: number;
}

export interface IGetWeatherParams extends IApiGetWeatherParams {
  lang: 'ru';
  appid: string;
}

export interface IApiGetGeocodingParams {
  q: string;
  limit: 5;
}

export interface IGetGeocodingParams extends IApiGetGeocodingParams {
  appid: string;
}
