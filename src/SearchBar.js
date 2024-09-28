import React, { useState } from "react";

import "./styles.css";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
