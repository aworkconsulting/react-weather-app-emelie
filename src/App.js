import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="coontainer">
        <h1>Weather App</h1>
        <footer>
          This project is coded by{" "}
          <a
            href="https://aworkconsulting.se/"
            target="_blank"
            rel="noreferrer"
          >
            Emelie Jansson{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/aworkconsulting/react-weather-app-emelie"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
