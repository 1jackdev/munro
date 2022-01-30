import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
function Home(drinks) {
  return (
    <section className="col-md-9">
      <Card>
        <CardBody className="text-center">
          <CardTitle className="font-weight-bold display-4">
            Welcome to Silicon Valley's premier dive cafe!
          </CardTitle>
        </CardBody>
      </Card>
      <div className="row col-12 justify-content-between">
        <Card className="col-md-5">
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              <Link to="/drinks">Drink Menu</Link>
            </CardTitle>
            <CardText>We have {drinks} Drinks on our Menu today.</CardText>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Home;
