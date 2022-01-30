import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Routes from "./Routes";
function App() {
  const drinks = ['apple', 'pear']
  return (
    <div className="App">
        <NavBar />
        <Routes drinks={drinks} />
    </div>
  );
}

export default App;
