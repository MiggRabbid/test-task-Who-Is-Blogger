// src/features/weather/components/WeatherForm.tsx
import { useState } from 'react';
import { TextField, Button } from '@mui/material';

import { useAppActions } from '../../../../App/hooks';
import { api } from '../../../../App/api/api';
import { TypeDataWeatherState } from '../../../../App/store/slices/weatherSlice/weather.types';

const WeatherForm = () => {
  const { setLoading, setCity, setForecastData } = useAppActions();
  const [city, setCityInput] = useState('');

  const handleSearch = async () => {
    if (!city) return;
    setLoading({
      type: TypeDataWeatherState.ONE,
      data: true,
    });

    try {
      const { getGeocoding, getWeather } = api;
      const geocodingResponse = await getGeocoding({
        q: city,
        limit: 5,
      });

      const { lat, lon } = geocodingResponse[0];

      const weatherResponse = await getWeather({
        lat,
        lon,
      });

      setCity({
        type: TypeDataWeatherState.ONE,
        data: weatherResponse.city,
      });

      setForecastData({
        type: TypeDataWeatherState.ONE,
        data: weatherResponse.list,
      });

      console.log(weatherResponse);
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading({
        type: TypeDataWeatherState.ONE,
        data: false,
      });
    }
  };

  return (
    <div className="p-4">
      <TextField
        label="Введите город"
        variant="outlined"
        fullWidth
        value={city}
        onChange={(e) => setCityInput(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className="mt-4"
        onClick={handleSearch}
        disabled={city.length === 0}
      >
        Получить погоду
      </Button>
    </div>
  );
};

export default WeatherForm;
