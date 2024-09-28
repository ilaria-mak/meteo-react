import React from "react";

import "./styles.css";

function TemperatureDisplay({ temperature }) {
  return (
    <div className="temperature-display">
      <h1>{temperature}°C</h1>
    </div>
  );
}

export default TemperatureDisplay;
