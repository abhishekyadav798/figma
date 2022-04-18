import React from "react";
import "./NavbarTop.css";
import {
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Navbar,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarTop() {
  return (
    <div className="navbar-style">
      <Navbar expand="md" style={{ backgroundColor: "rgb(7, 48, 130)" }}>
        <NavbarBrand
          href="/"
          style={{
            marginLeft: "20vh",
            color: "white",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          Merka
        </NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav
            className="mr-auto"
            navbar
            style={{ marginLeft: "20vh", color: "white" }}
          >
            <NavItem>
              <NavLink href="#" style={{ marginLeft: "5vh", color: "white" }}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{ marginLeft: "5vh", color: "white" }}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{ marginLeft: "5vh", color: "white" }}>
                Service
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{ marginLeft: "5vh", color: "white" }}>
                Blog
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
