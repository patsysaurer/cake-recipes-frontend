import React from "react";
import { Nav, NavItem, Button } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Header = ({ currentUser }) => {
  const navigate = useNavigate();


  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <Nav
        role="navigation"
        aria-label="navigation"
        className="d-flex justify-content-around align-items-center gap-5 w-100 p-3"

      >
        <NavItem>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="link" to="/index">
            All Cakes
          </NavLink>
        </NavItem>
        {currentUser && (
          <>
            <NavItem>
              <NavLink className="link" to="/mycakes">
                My Cakes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link" to="/new">
                Add a Cake
              </NavLink>
            </NavItem>
            <NavItem>
              <Button color="warning">
              <NavLink onClick={handleClick} className="link" to="#">
                Log Out
              </NavLink>
              </Button>
            </NavItem>
          </>
        )}
        {!currentUser && (
          <>
            <NavItem>
              <NavLink className="link" to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem>
            <Button color="warning">
              <NavLink className="link" to="/login">
                Log In
              </NavLink>
            </Button>
            </NavItem>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Header;
