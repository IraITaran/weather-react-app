import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Bali" />
        <a class="github-link" href="/" target="_blank">
          Open-source code
        </a>
        <span>by Iryna Taran</span>
      </div>
    </div>
  );
}

export default App;
