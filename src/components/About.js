import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";

function About() {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title className="font-weight-bold text-center">
            Ian and Lindsay
          </Card.Title>
          <Card.Text>We are so cool!</Card.Text>
        </Card.Body>
      </Card>
      <div className="mt-3 mx-0 d-md-flex h-100">
        <img
          className="photo"
          alt=""
          src="/steps-side.jpg"
          width="400"
          height="258"
        />
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
    </div>
  );
}

export default About;
