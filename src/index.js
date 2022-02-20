import React from "react";
import ReactDOM from "react-dom";
import Weather from "./weather";

import "./styles.css";

function App() {
  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <div class="card-body">
            <div class="row">
              <Weather city="Paris" />
              <br></br>
              <footer>
                <a
                  href="https://github.com/elic4vet/weather-react"
                  target="blank"
                >
                  Open-source code
                </a>{" "}
                by{" "}
                <a href="https://www.linkedin.com/in/elisavet-erkekoglou-80514b107/">
                  {" "}
                  Elisavet Erkekoglou 👩‍💻{" "}
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
