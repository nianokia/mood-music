import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Mood Music</h1>
      <form>
        <input type="color" />
        <input type="search" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default App;
