import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";

function Contact() {
  return (
    <div className="container">
      <Card>
        <Card.Body>
          <Card.Title className="font-weight-bold text-center">
            Contact Us
          </Card.Title>
          <Card.Text>867-5309</Card.Text>
          <Card.Text>coffee@coffee.com</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
