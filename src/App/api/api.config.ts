import axiosInstance from './api.client';
import { IGetGeocodingParams, IGetWeatherParams } from './api.types';

export async function sendRequest(
  baseURL: string,
  method: string,
  endpoint: string,
  params: IGetWeatherParams | IGetGeocodingParams,
) {
  const response = await axiosInstance.request({
    baseURL,
    method,
    url: endpoint,
    params: params,
  });
  return { data: response.data };
}
