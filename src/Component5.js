import React from "react";
import { Row, Col } from "reactstrap";
import "./Component5.css";
import Story from "./images/story.jpg";

function Component5() {
  return (
    <div>
      <Row className="row5-style">
        <Col sm="4" md="4" className="col5-style">
          <h6 className="heading">DAPPS</h6>
          <h4 className="heading5-style">Technology made easier</h4>
          <p className="text5-style">
            Decentralized applications have found a <br />
            huge user base right in the initial stage, and <br />
            therefore we as a team have gained ,<br /> extensive expertise into
            the creation of <br />
            dapps.
          </p>
        </Col>
        <Col sm="4" md="4">
          <img
            src={Story}
            style={{
              width: "700px",
              height: "200px",
              borderRadius: "4px",
            }}
            alt="..." 
          />
        </Col>
      </Row>
    </div>
  );
}

export default Component5;
