import nubisoftLogo from "./assets/nubisoft.svg";
import './App.css'

function App() {
  return (
    <div className="header flex justify-center gap-4 items-center">
      <div>
        <a href="https://nubisoft.io/" target="_blank">
          <img src={nubisoftLogo} className="mt-5" alt="Nubisoft logo" />
        </a>
      </div>
      <h1>NubiWeather</h1>
    </div>
  );
}

export default App;
