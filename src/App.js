import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bali" />
        <a
          className="github-link"
          href="https://github.com/IraITaran/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>

        <span>by Iryna Taran</span>
      </div>
    </div>
  );
}

export default App;
