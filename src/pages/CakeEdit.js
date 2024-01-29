import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Form,
  FormGroup,
  Input,
  Col,
  Button,
  Row,
  Container,
} from "reactstrap";

const CakeEdit = ({ cakes, updateCake }) => {
  const { id } = useParams();
  let currentCake = cakes?.find((cake) => cake.id === +id);

  const navigate = useNavigate();

  const [editCake, setEditCake] = useState({
    cakeName: currentCake?.cakeName,
    cakeDescription: currentCake?.cakeDescription,
    cakeIngredients: currentCake?.cakeIngredients,
    cakeInstructions: currentCake?.cakeInstructions,
    cakeServings: currentCake?.cakeServings,
    cakeImage: currentCake?.cakeImage,
    user_id: currentCake?.use_id,
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
      <div className="cake-edit-form">
        <h1>Edit Cake</h1>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  id="cakeName"
                  name="cakeName"
                  value={editCake?.cakeName}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Input
                  id="cakeDescription"
                  name="cakeDescription"
                  onChange={handleChange}
                  value={editCake?.cakeDescription}
                  type="textarea"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  id="cakeIngredients"
                  name="cakeIngredients"
                  onChange={handleChange}
                  value={editCake?.cakeIngredients}
                  type="textarea"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
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

            <Col md={6}>
              <FormGroup>
                <Input
                  id="cakeImage"
                  name="cakeImage"
                  type="textarea"
                  onChange={handleChange}
                  value={editCake?.cakeImage}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={handleSubmit}> Edit Cake </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default CakeEdit;
