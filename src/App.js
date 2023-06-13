import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Music from "./Music";

import "./App.css";

function App() {
  let [query, setQuery] = useState("");
  let [color, setColor] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  function updateColor(event) {
    setColor(event.target.value);
  }

  return (
    <div className="App">
      <h1>Mood Music</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="color">Set Color:</label>
          <input
            type="color"
            id="color"
            className="color"
            onChange={updateColor}
          />
        </div>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              className="col-9 form-control w-100"
              placeholder="Enter a mood..."
              autoFocus="on"
              onChange={updateQuery}
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="col-3 form-control w-100"
            />
          </div>
        </div>
      </form>
      <Music query={query} color={color} />
    </div>
  );
}

export default App;
