import { Box } from '@mui/material';
import { WeatherForm } from './components';
import WeatherChart from './components/WeatherChart/WeatherChart';

const Weather = () => {
  return (
    <Box className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">Прогноз погоды</h1>

      <WeatherForm />
      <WeatherChart />
    </Box>
  );
};

export default Weather;
