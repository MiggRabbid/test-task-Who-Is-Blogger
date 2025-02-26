// src/features/weather/components/WeatherChart.tsx
import React from 'react';
import { useAppSelector } from '../../../../App/hooks';
import { getWeatherStateField } from '../../../../App/selectors/wether.selector';
import { TypeDataWeatherState } from '../../../../App/store/slices/weatherSlice/weather.types';
import { IForecastEntry } from '../../../../App/types/weather.types';
import CustomLine, {
  iLineProps,
} from '../../../../shared/components/CustomLine/CustomLine';

const WeatherChart: React.FC = () => {
  const { city, forecastData } = useAppSelector(
    getWeatherStateField(TypeDataWeatherState.ONE),
  );

  const xLabels: Array<number | string> = [];
  const lineOne: iLineProps = {
    dataLine: [],
    labelLine: city.name,
  };

  forecastData.forEach((item: IForecastEntry, index: number) => {
    xLabels[index] = new Date(item.dt * 1000).toLocaleString('ru-RU', {
      day: '2-digit',
      month: 'short',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
    lineOne.dataLine[index] = Math.round(item.main.temp - 273.15);
  });

  return (
    <div className="h-96">
      <h3>{city.name}</h3>
      <CustomLine xLabels={xLabels} lineOne={lineOne} />
    </div>
  );
};

export default WeatherChart;
