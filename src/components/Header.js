import React, { useState } from "react";
import { Nav, NavItem, Button, Navbar, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Header = ({ currentUser, signout }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)
  const handleClick = () => {
    signout()
    navigate("/");
  };

  return (
    <div className="header">
      <Navbar
        role="navigation"
        aria-label="navigation"
      >
        <NavbarBrand href="/"><img src="https://res.cloudinary.com/dl11m63ow/image/upload/c_thumb,w_200,g_face/v1706488642/cake-logo_imncce.png" alt="cake logo" style={{width:"6rem"}}/></NavbarBrand>
        <NavbarToggler style={{color:"var(--secondary-color)"}} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </NavItem>
        {currentUser && (
          <>
            <NavItem>
              <NavLink className="link" to="/cakeindex">
                Cakes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link" to="/cakenew">
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
              <NavLink className="link" to="/login">
                Log In
              </NavLink>
            </NavItem>
            <NavItem>
            <Button color="warning">
              <NavLink className="link" to="/signup">
                Sign Up
              </NavLink>
            </Button>
            </NavItem>
          </>
        )}
              </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
