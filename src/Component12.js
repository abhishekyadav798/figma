import React from "react";
import { Row, Col, FormGroup, Input } from "reactstrap";
import "./Component12.css";
import Blueprint from "./images/blueprint.png";

function Component12() {
  return (
    <div className="div-project-style">
      <Row>
        <Col>
          <h6 style={{ color: "rgb(59, 255, 232)", fontWeight: 300 }}>
            PROJECTS
          </h6>
          <h4>
            We have completed many <br /> amazing projects that you <br /> will
            not believe
          </h4>
        </Col>
        <Col>
          <FormGroup id="form_style">
            <Input
              type="select"
              name="select"
              id="optionSelect"
              style={{ width: "150px" }}
            >
              <option>Technology</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <hr style={{ width: "94%", height: "1px" }} />
      <Row className="row-card-style">
        <Col></Col>
        <Col>
          <div id="card-style">
            <img
              src={Blueprint}
              style={{ width: "300px", borderRadius: "8px" }}
            />
            <p id="card-text"> The Desktop App Landing Page </p>
            <p className="card-text2">A landing page for desktop app</p>
            <button className="button12-style">Explore More</button>
          </div>
        </Col>

        <Col>
          <div id="card-style">
            <img
              src={Blueprint}
              style={{ width: "300px", borderRadius: "8px" }}
              q
            />
            <p id="card-text"> The Desktop App Landing Page </p>
            <p className="card-text2"> A landing page for desktop app</p>
            <button className="button12-style">Explore More</button>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row className="row-card-style">
        <Col></Col>
        <Col>
          <div className="card-style">
            <img
              src={Blueprint}
              style={{ width: "300px", borderRadius: "8px" }}
              q
            />
            <p id="card-text"> The Desktop App Landing Page </p>
            <p className="card-text2"> A landing page for desktop app</p>
            <button className="button12-style">Explore More</button>
          </div>
        </Col>
        <Col>
          <div id="card-style">
            <img
              src={Blueprint}
              style={{ width: "300px", borderRadius: "8px" }}
              q
            />
            <p id="card-text"> The Desktop App Landing Page </p>
            <p className="card-text2"> A landing page for desktop app</p>
            <button className="button12-style">Explore More</button>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Component12;
