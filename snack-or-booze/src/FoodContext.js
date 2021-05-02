import { createContext } from "react";
// this context will allow us to trigger
// the useEffect in App.js
const FoodContext = createContext(false);
export default FoodContext;
