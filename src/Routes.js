import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home.js";
import RoastItem from "./components/RoastItem.js";
import Menu from "./components/Menu.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import OrderPage from "./components/OrderPage.js";
import { Button } from "react-bootstrap";

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
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/roasts/:name">
          <RoastItem roasts={roasts} cantFind="/roasts" />
        </Route>
        <Route exact path="/order">
          <OrderPage roasts={roasts} />
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
