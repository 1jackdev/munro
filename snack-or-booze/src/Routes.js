import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import FoodItem from "./FoodItem";
import Menu from "./Menu";
import NewItemPage from "./NewItemPage";

function Routes({snacks, drinks}) {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home snacks={snacks} drinks={drinks} />
        </Route>
        <Route exact path="/drinks">
          <Menu food={drinks} title="Drinks" />
        </Route>
        <Route path="/drinks/:id">
          <FoodItem items={drinks} cantFind="/drinks" />
        </Route>
        <Route exact path="/snacks">
          <Menu food={snacks} title="Snacks" />
        </Route>
        <Route path="/snacks/:id">
          <FoodItem items={snacks} cantFind="/snacks" />
        </Route>
        <Route exact path="/new">
          <NewItemPage />
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
