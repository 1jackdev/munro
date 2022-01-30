import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import FoodItem from "./components/FoodItem";
import Menu from './components/Menu';

function Routes({snacks, drinks}) {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home drinks={drinks} />
        </Route>
        <Route exact path="/drinks">
          <Menu food={drinks} title="Drinks" />
        </Route>
        <Route path="/drinks/:id">
          <FoodItem items={drinks} cantFind="/drinks" />
        </Route>
        <Route>
          <p>Hmmm. I can't seem to find what you want.</p>
          <Link to="/">
            <button className="btn-info">Go Home</button>
          </Link>
        </Route>
      </Switch>
    </main>
  );
}

export default Routes;
