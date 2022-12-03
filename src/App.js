import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";
// import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} alt="logo" className="img-fluid App-logo" /> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-spell-check" /> */}
        <i className="fa-solid fa-spell-check App-logo img-fluid"></i>
        <Dictionary defaultKeyword="sunset" />
      </header>
      <footer className="App-footer">
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/rematias/"
          target="_blank"
          rel="noreferrer"
        >
          Renata Matias
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/RenataMatias/react-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://main--magnificent-hamster-5bbbba.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
