import React from "react";
import { Row, Col } from "reactstrap";
import "./Component16.css";

function Component16() {
  return (
    <div className="div16-style">
      <div className="row16-style">
        <Row>
          <Col sm="6" md="6">
            <h6>
              We've prepared everything, it's time for you to tell the problem
            </h6>
          </Col>
          <Col sm="3" md="3">
            <button className="button-style">Send Quote</button>
          </Col>
          <Col sm="2" md="2">
            <button className="button-style">Ask</button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Component16;
