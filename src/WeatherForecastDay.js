import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  let max = Math.round(props.data.temp.max);
  let min = Math.round(props.data.temp.min);

  let date = new Date(props.data.dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let day = days[date.getDay()];

  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day">{day}</div>
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        width={42}
        alt="weather-icon"
      />
      <div className="forecast-temperatures">
        <span className="forecast-temperature-max">{max}° </span>
        <span className="forecast-temperature-min">{min}°</span>
      </div>
    </div>
  );
}
