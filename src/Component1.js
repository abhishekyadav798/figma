import React from "react";
import { Row, Col } from "reactstrap";
import "./Component1.css";
import Bchain from "./images/bchain.jpg";
function Component1() {
  return (
    <div
      className="div1-style"
      style={{ backgroundImage: `url(${Bchain})`, height: "400px" }}
    >
      <Row>
        <Col sm="2" md="2"></Col>
        <Col sm="4" md="4">
          {" "}
          <h2 className="heading1-style">
            MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS
          </h2>
          <button className="button1-style">Explore More</button>
        </Col>
        <Col sm="4" md="4"></Col>
        <Col sm="2" md="2"></Col>
      </Row>

      <div id="trapezoid">
        <p>Trusted by Leading Dapp Teams and Enterprises</p>
        <h5>
          AAVE &nbsp; &nbsp; &nbsp; &nbsp; ARAGON &nbsp; &nbsp; &nbsp; &nbsp;
          OMISEGO
        </h5>
      </div>
    </div>
  );
}

export default Component1;
