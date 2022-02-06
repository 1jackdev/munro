import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";

function About() {
  return (
    <div className="container">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title className="font-weight-bold text-center">
            Ian and Lindsay
          </Card.Title>
          <Card.Text>We are so cool!</Card.Text>
          <div className="my-1 d-md-inline h-100">
            <img
              className="photo"
              alt=""
              src="/steps-front.jpg"
              width="400"
              height="258"
            />
            <img
              className="photo"
              alt=""
              src="/onlogs.jpg"
              width="400"
              height="258"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
