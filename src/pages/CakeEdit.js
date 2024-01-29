import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Input, Col, Button, Row, Container } from "reactstrap";


const CakeEdit = ({ cakes, updateCake }) => {
  const { id } = useParams();
  let currentCake = cakes?.find((cake) => cake.id === +id)

  const navigate = useNavigate();

  const [editCake, setEditCake] = useState({
    cakeName: currentCake?.cakeName,
    cakeDescription: currentCake?.cakeDescription,
    cakeIngredients: currentCake?.cakeIngredients,
    cakeInstructions: currentCake?.cakeInstructions,
    cakeServings: currentCake?.cakeServings,
    cakeImage: currentCake?.cakeImage,
    user_id: currentCake?.use_id
  });

  const handleChange = (e) => {
    setEditCake({ ...editCake, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateCake(editCake, currentCake.id);
    navigate(`/cakeshow/${currentCake.id}`);
  };
  return (
    <>
    <div className="CakeEdit">
        <h1>Edit Cake</h1>
        <Container  fluid="xl">  
      <Form style={{marginTop: '-150px'}}>
        <Row className="newCakeRow">
          <Col>
            <FormGroup>
              <Input
                id="cakeName"
                name="cakeName"
                value={editCake?.cakeName}
                onChange={handleChange}
              />
            </FormGroup>
            <Row>
              <Col>
              <FormGroup>
                  <Input
                    id="cakeDescription"
                    name="cakeDescription"
                    onChange={handleChange}
                    value={editCake?.cakeDescription}
                    type="textarea"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    id="cakeIngredients"
                    name="cakeIngredients"
                    onChange={handleChange}
                    value={editCake?.cakeIngredients}
                    type="textarea"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    id="cakeInstructions"
                    name="cakeInstructions"
                    value={editCake?.cakeInstructions}
                    onChange={handleChange}
                    type="textarea"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <FormGroup>
                <Input
                  id="imageUrl"
                  name="image"
                  type="text"
                  onChange={handleChange}
                  value={editCake?.cakeImage}
                />
              </FormGroup>
            </Row>
          </Col>
        </Row>
        <Button onClick={handleSubmit}> Edit Cake </Button>
      </Form>
      </Container>
      </div>
    </>
  );
};

export default CakeEdit;
