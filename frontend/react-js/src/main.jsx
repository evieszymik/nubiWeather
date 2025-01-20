import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import WeatherElement from "./components/WeatherElement/WeatherElement";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <WeatherDisplay/>
  </React.StrictMode>
);
