import React from "react";
import "./SearchInfo.css";
import TemperatureUnits from "./TemperatureUnits";
import WeatherDay from "./WeatherDay";

export default function SearchInfo(props) {
  return (
    <div className="SearchInfo">
      <p className="current-city mt-4">{props.data.city}</p>
      <img
        src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
        alt={props.data.description}
      />
      <WeatherDay date={props.data.day} />

      <TemperatureUnits celcius={props.data.temperature} />

      <div className="extra-features">
        <p className="humidity mb-0">Humidity: {props.data.humidity} %</p>
        <p className="wind mb-0">Wind: {props.data.wind} km/h</p>
        <p className="description">Description: {props.data.description}</p>
      </div>
    </div>
  );
}
