import React from "react";
import { Row, Col } from "reactstrap";
import "./Component10.css";
import Galaxy from "./images/galaxy.jpg";

function Component10() {
  return (
    <div className="div10-style">
      <Row className="row10-style">
        <Col className="img-style">
          <img src={Galaxy} style={{ width: "250px", borderRadius: "4px" }} />
        </Col>
        <Col>
          <a href="#" className="link-style">
            Read Article
          </a>
          <br />
          <br />
          <h6>
            The Best Way to Avoid Data Leaks and <br />
            Privacy Scandals: Don't Own Consumer Data
          </h6>
          <p className="text10-style">
            These are componies ,like intellicam, that are <br />
            actually working to get our data onto personal <br />
            servers so we own it, not the companies
          </p>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Component10;
