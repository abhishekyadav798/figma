import React from "react";
import { Row, Col } from "reactstrap";
import "./Component7.css";
import Data from "./images/data.jpeg";

function Component7() {
  return (
    <div>
      <Row className="row7-style">
        <Col sm="6" md="4">
          <h5 className="heading-expert-style">Expert</h5>
          <h4 className="heading7-style">Expert Review</h4>
          <p className="text7-style">
            Experience the guidance of various trained <br />
            professionals and developers who are with <br />
            you at every phase of your projects.We not
            <br />
            only develop your project but also give out <br />
            the best recommendations for turning it into <br />a huge success
          </p>
        </Col>
        <Col sm="6" md="8">
          <img
            src={Data}
            style={{
              width: "700px",
              height: "200px",
              borderRadius: "4px",
            }}
            alt="...image" 
          />
        </Col>
      </Row>
    </div>
  );
}

export default Component7;
