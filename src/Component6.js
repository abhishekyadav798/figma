import React from "react";
import { Row, Col } from "reactstrap";
import "./Component6.css";
import AdSecure from "./images/AdSecure.jpg";

function Component6() {
  return (
    <div>
      <Row className="row6-style">
        <Col sm="6" md="8">
          {" "}
          <img
            src={AdSecure}
            style={{
              width: "700px",
              height: "200px",
              borderRadius: "4px",
            }}
            alt="...image" 
          />
        </Col>
        <Col sm="6" md="4">
          <h5 className="heading-audit">AUDIT</h5>
          <h4 className="heading6-style">Stay secure and safe</h4>
          <p className="text6-style">
            Above all that matters is a secure and safe <br />
            smart contract that is free from any <br />
            vulnerability and does not hamper the <br />
            investment of the various people who have <br />
            trusted you. We also provide auditing <br />
            services, so that you can stay assured of the <br />
            security as we are quick in auditing and <br />
            exposing the bugs of your smart contract.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Component6;
