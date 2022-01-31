import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./RoastItem.css";

function RoastItem({ items, cantFind }) {
  const { name } = useParams();

  let foodItem = items.find((item) => item.name === name);
  if (!foodItem) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <Card.Body>
          <Card.Title className="font-weight-bold text-center">
            {foodItem.name}
          </Card.Title>
          <Card.Text className="font-italic">{foodItem.description}</Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
}

export default RoastItem;
