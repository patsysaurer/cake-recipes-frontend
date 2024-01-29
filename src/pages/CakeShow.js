import React from "react";
import { useParams, NavLink } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
} from "reactstrap";

const CakeShow = ({ cakes, deleteCake }) => {
  let { id } = useParams();
  const currentCake = cakes?.find(
    (cake) => cake.id === +id
  );

  const handleClick = () => {
    deleteCake(currentCake.id)
  };

  return (
    <>
    <div className="cake-show-page">
        {currentCake && (
          <Card
            className="shadow-lg"
            style={{ width: "30rem", height: "100%" }}
          >
            <CardImg
              top
              width="100%"
              src={currentCake?.cakeImage}
              alt="cake image"
            />
            <CardBody className="cake-text cake-font-size">
              <div className="grid-row">
                <div className="show-cake-info">
                  <CardTitle style={{color:"var(--primary-color)", fontFamily:"fancy", fontSize:"2.3rem"}}>
                    <b>{currentCake?.cakeName}</b>
                  </CardTitle>
                  <CardSubtitle style={{color:"var(--primary-dark)"}}>
                    <i>Serves {currentCake?.cakeServings}</i>
                  </CardSubtitle>
                  <br/>
                  <CardText>
                  <span style={{color:"var(--primary-dark)", fontWeight:"bolder"}}>Description: </span>{currentCake?.cakeDescription}
                  </CardText>
                  <CardText>
                  <span style={{color:"var(--primary-dark)", fontWeight:"bolder"}}>Ingredients: </span> {currentCake?.cakeIngredients}
                  </CardText>
                  <CardText>
                  <span style={{color:"var(--primary-dark)", fontWeight:"bolder"}}>Instructions: </span> {currentCake?.cakeInstructions}
                  </CardText>
                </div>
              </div>
              <NavLink
                role="link"
                to={`/cakeedit/${currentCake?.id}`}
                className="nav-link p-2 rounded my-2"
                style={{
                  color: "var(--primary-color)",
                  backgroundColor: "var(--secondary-color)"
                }}
              >
                Edit Cake
              </NavLink>
              <NavLink
                role="link"
                to={`/cakeindex`}
                className="nav-link bg-danger p-2 rounded my-2"
                style={{
                  color:"var(--primary-bg)"
                }}
                onClick={handleClick}
              >
                Delete Cake
              </NavLink>
              <NavLink to={`/cakeindex`} className="nav-link">
                <Button style={{backgroundColor:"var(--primary-bg)", color:"var(--primary-color)", border:"solid 1px var(--primary-color)"}}>Back to Cakes</Button>
              </NavLink>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  );
};

export default CakeShow;
