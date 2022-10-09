import React, { useState } from "react";

export default function TemperatureUnits(props) {
  const [unit, setUnit] = useState("celcius");

  function showCelcius(e) {
    e.preventDefault();
    setUnit("celcius");
  }

  function showFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celcius") {
    let celcius = Math.round(props.celcius);
    return (
      <p className="current-temperature">
        {celcius}
        <span className="units ms-2">
          <span href="/" className="celcius" onClick={showCelcius}>
            °C
          </span>{" "}
          | {""}
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </p>
    );
  } else {
    let fahrenheit = Math.round((props.celcius * 9) / 5 + 32);

    return (
      <p className="current-temperature">
        {fahrenheit}
        <span className="units ms-2">
          <a href="/" className="celcius" onClick={showCelcius}>
            °C
          </a>{" "}
          | {""}
          <span href="/" className="fahrenheit" onClick={showFahrenheit}>
            °F
          </span>
        </span>
      </p>
    );
  }
}
