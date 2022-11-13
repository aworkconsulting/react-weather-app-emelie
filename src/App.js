import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />

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
            open-sourced on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://charming-dolphin-8350e0.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify!
          </a>
        </footer>
      </div>
    </div>
  );
}
