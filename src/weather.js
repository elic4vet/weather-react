import React, { useState } from "react";
import axios from "axios";

export default function SearchingForm() {
  let [city, setCity] = useState(null);
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  function updateCityName(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c71a6a7a6861fb5c16cd1f49a0f5bc4f";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayWeather);
  }

  let form = (
    <div className="weatherApp">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCityName}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul className="currentWeather">
          <li>Temperature: {Math.round(weather.temperature)}ºC</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind:{Math.round(weather.wind)} m/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div className="App">{form}</div>;
  }
}
