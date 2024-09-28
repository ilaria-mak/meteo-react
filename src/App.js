import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard/WeatherCard';
import Forecast from './Forecast/Forecast';
import Footer from './Footer';

import "./styles.css";

function App() {
  const [weatherData, setWeatherData] = useState(null); // Funzione per recuperare i dati meteo da un'API
  const fetchWeatherData = async (city) => {}; // Chiamata API per recuperare i dati meteo (es. OpenWeather API)

  return (
    <div className='App'>
      <SearchBar onSearch={fetchWeatherData} />
      {weatherData && (
        <WeatherCard data={weatherData.current} />
        <Forecast forecast={weatherData.forecast} />
      )}
      <Footer />
    </div>
  );
}

export default App;
