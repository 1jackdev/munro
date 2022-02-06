import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { Card, ListGroup } from "react-bootstrap";

function Menu({ roasts }) {
  // takes in a list of items and returns a card menu
  return (
    <section className="col-md-4">
      <Card>
        <Card.Body>
          <Card.Title className="font-weight-bold text-center">
            Hometown Collection
          </Card.Title>
          <Card.Text>
            Our roasts can vary from month to month, so let us know if there is
            something you would like to see more often!
          </Card.Text>
          <ListGroup>
            {roasts.map((item) => (
              <Link to={`/roasts/${item.Name}`} key={item.Name}>
                <ListGroup.Item>{item.Name}</ListGroup.Item>
              </Link>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Menu;
