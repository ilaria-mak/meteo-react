import React from "react";

import "./styles.css";

function WeatherDetails({ humidity, wind, description }) {
  return (
    <div className="weather-details">
      <p>Humidity: {humidity}%</p>
      <p>Wind: {wind} km/h</p>
      <p>{description}</p>
    </div>
  );
}

export default WeatherDetails;
