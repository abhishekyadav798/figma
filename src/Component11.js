import React from "react";
import { Row, Col } from "reactstrap";
import "./Component11.css";
import Theteam from "./images/theteam.jpg";

function Component11() {
  return (
    <div className="div11-style">
      <Row>
        <Col>
          <h6 style={{ color: "rgb(102, 102, 241)", fontWeight: 400 }}>
            OUR TEAM
          </h6>
          <h5>MEET THE TEAM OF BEST DEVELOPERS:</h5>
          <p className="text11-style">
            We have a team of skilled veteran developers who <br />
            exhibit amazing efficiency in their performance.
            <br />
            With MerkLabs, you are in safe hands. We <br />
            understand your needs and give out a <br />
            performance that matches your expectations.
          </p>
          <button className="button11-style">Explore More</button>
        </Col>
        <Col sm="6" md="8">
          <img
            src={Theteam}
            style={{ width: "660px", height: "230px", borderRadius: "4px" }}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Component11;
