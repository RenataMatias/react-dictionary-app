import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dictionary defaultKeyword="sunset" />
      </header>
      <footer className="App-footer">Coded by Renata Matias</footer>
    </div>
  );
}

export default App;
