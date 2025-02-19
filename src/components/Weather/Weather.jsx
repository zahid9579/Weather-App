import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import React, { useState } from 'react';
import { fetchWeatherData, setError } from '../../App/features/weather/weatherSlice';
import './Weather.css';

const Weather = () => {
  // State to store user input for city
  const [city, setCity] = useState('');

  // Read the data from the store
  const weatherData = useSelector((state) => state.weather.weatherData);
  const error = useSelector((state) => state.weather.error);

  // Dispatch actions to the store
  const dispatch = useDispatch();

  // Fetching the Weather Data
  const handleFetchWeather = async () => {
    if (!city) {
      alert('Please enter a city name.');
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&units=metric&appid=4204f3ee2d04a8d4f38a858a713b0fe7`
      );
      dispatch(fetchWeatherData(response.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  return (
    <div className="weather-container">
      <h1 className="weather-title">Get the Weather of Your City</h1>
      <input
        type="text"
        className="weather-input"
        placeholder="Enter your city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="weather-button" onClick={handleFetchWeather}>
        Get Weather
      </button>

      {weatherData ? (
        <div className="weather-info">
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main?.temp} °C</p>
          <p>Humidity: {weatherData.main?.humidity} %</p>
        </div>
      ) : (
        <p className="weather-error">No weather data available</p>
      )}

      {error && <p className="weather-error">Error: {error}</p>}
    </div>
  );
};

export default Weather;
