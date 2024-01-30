import React from "react";
import { Nav, NavItem, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Intro = ({ currentUser }) => {
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

          {!currentUser && (
            <>
              <div className="home-btns">
                <Nav>
                  <NavItem style={{ margin: "auto" }}>
                    <Button
                      style={{ backgroundColor: "#F5D34E", border: "none" }}
                    >
                      <NavLink className="link" to="/signup">
                        Sign Up
                      </NavLink>
                    </Button>
                  </NavItem>
                  <NavItem style={{ margin: "auto" }}>
                    <Button
                      style={{
                        backgroundColor: "var(--secondary-color)",
                        border: "none",
                      }}
                    >
                      <NavLink className="link" to="/login">
                        Log In
                      </NavLink>
                    </Button>
                  </NavItem>
                </Nav>
              </div>
            </>
          )}
          {currentUser && (
            <>
              <Button style={{ backgroundColor: "#F5D34E", border: "none" }}>
                <NavLink to="/cakenew" className="link">
                  Add New Cake
                </NavLink>
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Intro;
