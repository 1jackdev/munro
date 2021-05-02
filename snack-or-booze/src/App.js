import React, { useState, useEffect } from "react";
import "./App.css";

import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Routes from "./Routes";
import FoodContext from "./FoodContext";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // we will pass these as part of our FoodContext
  // so that when we submit a new food, we can
  // trigger our useEffect
  const [updatedFoods, setUpdatedFoods] = useState(false);
  useEffect(() => {
    async function getFoods() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getFoods();
  }, [updatedFoods]);

  if (isLoading) {
    return <p data-testid="loading">Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <FoodContext.Provider value={{ updatedFoods, setUpdatedFoods }}>
        <NavBar />
        <Routes snacks={snacks} drinks={drinks} />
      </FoodContext.Provider>
    </div>
  );
}

export default App;
