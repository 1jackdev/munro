import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./RoastItem.css";

function RoastItem({ roasts, cantFind }) {
  const { name } = useParams();

  let foodItem = roasts.find((item) => item.Name === name);
  if (!foodItem) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <Card.Body>
          <Card.Title className="font-weight-bold text-center">
            {foodItem.Name}
          </Card.Title>
          <Card.Text className="font-italic">{foodItem.Description}</Card.Text>
          <a href="/order">Order Now</a>
        </Card.Body>
      </Card>
    </section>
  );
}

export default RoastItem;
