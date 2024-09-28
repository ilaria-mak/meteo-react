import React from "react";

import "./styles.css";

function ForecastDay({ day }) {
  return (
    <div className="forecast-day">
      <p>{day.day}</p>
      <p>{day.temperature}°C</p>
      <p>{day.description}</p>
    </div>
  );
}

export default ForecastDay;
