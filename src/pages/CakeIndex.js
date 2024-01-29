import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Nav,
  NavItem,
  CardText,
  Col,
  Row
} from "reactstrap";
import { NavLink } from "react-router-dom";

const CakeIndex = ({ cakes }) => {
  return (
    <div className="cakes-body my-5" style={{ textAlign: "center" }}>
      <h3
        style={{
          color: "var(--primary-color)",
          margin: "40px",
          fontFamily: "Fancy",
        }}
      >
        ALL CAKE RECIPES
      </h3>
      <div className="cake-collection">
        {cakes?.map((cake, index) => {
          return (        
              <Card key={index} style={{ width: "18rem"}}>
                <img alt="Cake Image" src={cake.cakeImage} />
                <CardBody>
                  <CardTitle tag="h5" style={{ color: "var(--primary-color)" }}>
                    <b>{cake.cakeName}</b>
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2"
                    tag="h6"
                    style={{ color: "var(--secondary-dark)" }}
                  >
                    <i>Serves: {cake.cakeServings} </i>
                  </CardSubtitle>
                  <CardText>{cake.cakeDescription}</CardText>
                  <CardSubtitle>
                    <NavLink to={`/cakeshow/${cake.id}`} className="nav-link">
                      <Button
                        style={{
                          backgroundColor: "var(--secondary-color)",
                          borderColor: "var(--secondary-color)",
                          color: "var(--primary-dark)",
                          marginTop: "25px",
                        }}
                      >
                        View Recipe
                      </Button>
                    </NavLink>
                  </CardSubtitle>
                </CardBody>
              </Card>
          );
        })}
      </div>
      <Nav>
        <NavItem style={{ margin: "auto", paddingBottom: "35px" }}>
          <Button color="warning">
            <NavLink to="/cakenew" className="link">
              Add New Cake
            </NavLink>
          </Button>
        </NavItem>
      </Nav>
    </div>
  );
};
export default CakeIndex;
