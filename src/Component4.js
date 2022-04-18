import React from "react";
import { Row, Col } from "reactstrap";
import "./Component4.css";
import Magic from "./images/magic.jpg";

function Component4() {
  return (
    <div>
      <Row className="row-style">
        <Col sm="6" md="8">
          {" "}
          <img src={Magic} style={{ width: "600px", borderRadius: "4px" }} alt="...image"  />
        </Col>
        <Col sm="4" md="4">
          <h6 className="heading-red">DEFI</h6>
          <h4 className="heading-two">Scale the world of DeFi</h4>
          <p className="text-style">
            Being the veterans in the blockchain <br /> industry, we understand
            the hype of <br /> decentralized finance and the contemporary <br />
            optimizations in the financial sector and <br /> hence taking the
            grasp of the moment, we <br /> have developed exceptional projects
            in the <br /> world of DeFi.{" "}
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Component4;
