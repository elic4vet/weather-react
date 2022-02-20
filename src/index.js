import React from "react";
import ReactDOM from "react-dom";
import Weather from "./weather";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Weather city="Paris" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
