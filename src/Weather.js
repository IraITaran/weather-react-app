import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import SearchInfo from "./SearchInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({});
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    SearchApi();
  }

  function setCityValue(e) {
    setCity(e.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      day: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      loaded: true,
    });
  }

  function SearchApi() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <h1 className="mb-4">Weather forecast</h1>
        <div className="d-flex justify-content-center">
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type the city"
              autoFocus
              onChange={setCityValue}
            />
            <input
              className="submit-btn btn btn-primary"
              type="submit"
              placeholder="Search"
            />
          </form>
        </div>

        <SearchInfo data={weatherData} />
      </div>
    );
  } else {
    SearchApi();
    return "Loading...";
  }
}
