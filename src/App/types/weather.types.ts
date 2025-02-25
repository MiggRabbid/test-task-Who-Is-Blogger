export interface ILocalNames {
  [langCode: string]: string;
}

export interface IGeocodingItem {
  name: string;
  local_names: ILocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export type TypeGeocodingResponse = IGeocodingItem[];

export interface IForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: IForecastEntry[];
  city: ICityInfo;
}

export interface IForecastEntry {
  dt: number;
  main: IMainInfo;
  weather: IWeatherInfo[];
  Iclouds: IClouds;
  Iwind: IWind;
  visibility: number;
  pop: number;
  Isys: ISys;
  dt_txt: string;
  Isnow?: ISnow;
}

export interface IMainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface IWeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IClouds {
  all: number;
}

export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface ISys {
  pod: string;
}

export interface ISnow {
  '3h': number;
}

export interface ICityInfo {
  id: number;
  name: string;
  coord: ICoord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface ICoord {
  lat: number;
  lon: number;
}
