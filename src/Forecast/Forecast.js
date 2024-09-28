import React from "react";
import ForecastDay from "./ForecastDay";

import "./styles.css";

function Forecast({ forecast }) {
  return (
    <div className="forecast">
      {forecast.map((day, index) => (
        <ForecastDay key={index} day={day} />
      ))}
    </div>
  );
}
