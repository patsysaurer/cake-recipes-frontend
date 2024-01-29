import React from "react";
import { Nav, NavItem, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Intro = () => {
  return (
    <>
      <div id="intro-section">
        <div className="text-content">
          <h1 style={{ fontFamily: "fancy", fontSize: "3rem" }}>
            Cake Recipes
          </h1>
          <h4 style={{ color: "var(--primary-dark)" }}>
            View recipes or add your own!
          </h4>
          <div className="signup-btn">
          <Nav>
            <NavItem>
              <Button color="warning">
                <NavLink className="link" to="/signup">
                  Sign Up
                </NavLink>
              </Button>
            </NavItem>
          </Nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
