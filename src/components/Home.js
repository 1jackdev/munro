import React from "react";
import "./Home.css"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home({ roasts }) {
  return (
    <section className="col-sm-4 col-md-9">
      <div className="row col-sm-4 col-md-12 justify-content-center">
        <Card>
          <Card.Body>
            <Card.Title className="font-weight-bold text-center">
              <Link to="/roasts">Roast Menu</Link>
            </Card.Title>
            <Card.Text>
              We have {roasts.length} Roasts currently available for order.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

export default Home;
