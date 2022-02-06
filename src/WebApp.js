import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Routes from "./Routes.js";
function App() {
  const roasts = [
    {
      Name: "Honduras",
      Description:
        "The “Bayman’s Blend” is our darkest roast, a blend of Indonesian coffees birthed in the fiery and smoky soils of Sumatra and Papua-New Guinea. Semi sweet notes of dried fig and raisin with a spicy dark chocolate finish. This earthy and spiced roast pairs very well with milk and sugar and is preferred by those who drink it that way. Excellent on drip and especially in a French Press, the Bayman’s Blend is one of our founding profiles and will be your beacon in the storm.",
    },
    {
      Name: "Ecuador",
      Description:
        "One of our very first, flagship roasts, we are now branding as “Deep Water” This roast is a blend of lightly roasted Ethiopian Yirgacheffe and dark roasted Papua-New Guinea coffees, up front bursting notes of berry and dark cherry with a creamy, robust and silky-smooth finish. This cup is well rounded and shines in a variety of brewing methods such as pour over, cold brewing and even espresso.",
    },
  ];
  return (
    <div className="App">
      <NavBar />
      <Routes roasts={roasts} />
    </div>
  );
}

export default App;
