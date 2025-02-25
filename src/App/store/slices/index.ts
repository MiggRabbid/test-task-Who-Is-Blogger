import { weatherReducer, actions as weatherActions } from './weatherSlice/weather.slice';

export const reducer = { weatherReducer };
export const actions = { ...weatherActions };
