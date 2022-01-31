import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import RoastItem from "./components/RoastItem";
import Menu from "./components/Menu";
import Button from "react-bootstrap/Button";

function Routes({ roasts }) {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home roasts={roasts} />
        </Route>
        <Route exact path="/roasts">
          <Menu roasts={roasts} />
        </Route>
        <Route path="/roasts/:name">
          <RoastItem items={roasts} cantFind="/roasts" />
        </Route>
        <Route>
          <p>Hmmm. I can't seem to find what you want.</p>
          <Link to="/">
            <Button className="btn-info">Go Home</Button>
          </Link>
        </Route>
      </Switch>
    </main>
  );
}

export default Routes;
