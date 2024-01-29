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
      <div className="w-100 m-auto d-flex justify-content-center align-items-center my-5">
        {currentCake && (
          <Card
            className="shadow-lg"
            style={{ width: "18rem", height: "100%" }}
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
                  <CardTitle>
                    <b>{currentCake?.cakeName}</b>
                  </CardTitle>
                  <CardSubtitle>
                    <i>Serves {currentCake?.cakeServings}</i>{" "}
                    {currentCake?.cakeDescription}
                  </CardSubtitle>
                  <CardText>
                    Ingredients: {currentCake?.cakeIngredients}
                  </CardText>
                  <CardText>
                    Directions: {currentCake?.cakeInstructions}
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
                <Button className="cake-button">Back to Cakes</Button>
              </NavLink>
            </CardBody>
          </Card>
        )}
      </div>
    </>
  );
};

export default CakeShow;
