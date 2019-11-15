import React from "react";
import "./App.css";
import Routes from "./routes";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="container">
      <img src={logo} width="100" height="100" alt="logo aircnc" />
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
