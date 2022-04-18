import React from "react";
import "./Component3.css";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Component3() {
  return (
    <div className="div3-style">
      <Row className="background-style">
        <Col sm="4" md="4">
          <h5 className="heading-style">
            WE provide The Best To Protect Your <br />
            Users And Their Investments
          </h5>
          <p className="paragraph-style">
            Merklabs is a reputed name in the field of <br /> blockchain
            technology encompassing all the <br /> segments of this
            revolutionary field. Pioneering <br /> the essence of blockchain
            security and audits, we <br /> secure your present and future
            through the <br /> parameters of technology.
          </p>
        </Col>
        <Col sm="6" md="8">
          <div className="stats-style">
            <h4> 100+ </h4><h6> blockchain comapnies protected</h6>
            <h4>200+ </h4><h6> issues discovered</h6>
            <h4>10,000+  </h4><h6>analyses available per month</h6>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Component3;
