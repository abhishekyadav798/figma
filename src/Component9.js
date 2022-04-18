import React from "react";
import { Row, Col } from "reactstrap";
import "./Component9.css";
import Zenkit_img from "./images/Zenkit_img.jpg";

function Component9() {
  return (
    <div>
      <Row className="row9-style">
        <Col sm="4" md="4">
          <h5 className="heading-launchpad-style">LAUNCHPAD</h5>
          <h3 className="heading9-style">Stablize and Promote</h3>
          <p className="text9-style">
            Amidst the competition in the Defi space <br />
            good marketing strategy and <br />
            implementation plays the key role to stablize <br />
            and promote your growth in the blockchain <br />
            industry. Retaining this awareness, we can <br /> develop launchpad
            and IDO for your persale <br />
            and ICO.
          </p>
        </Col>
        <Col sm="8" md="8">
          <img
            src={Zenkit_img}
            style={{
              width: "650px",
              height: "190px",
              borderRadius: "4px",
            }}
            alt="..." 
          />
        </Col>
      </Row>
    </div>
  );
}

export default Component9;
