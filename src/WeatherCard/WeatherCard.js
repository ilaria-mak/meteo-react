import React, { useState } from "react";
import TemperatureDisplay from "./TemperatureDisplay";
import WeatherDetails from "./WeatherDetails";

import "./styles.css";

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <TemperatureDisplay temperature={data.temperature} />
      <WeatherDetails
        humidity={data.humidity}
        wind={data.wind}
        description={data.description}
      />
    </div>
  );
}

export default WeatherCard;
