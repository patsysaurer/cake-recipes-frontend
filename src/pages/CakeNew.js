import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Col,
  Button,
  Row,
  Container,
} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";

const CakeNew = ({ createCake, currentUser }) => {
  const navigate = useNavigate();
  const [newCake, setNewCake] = useState({
    cakeName: "",
    cakeDescription: "",
    cakeIngredients: "",
    cakeInstructions: "",
    cakeServings: "",
    cakeImage: "",
    user_id: currentUser?.id,
  });

  const handleChange = (e) => {
    setNewCake({ ...newCake, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createCake(newCake);
    navigate("/cakeindex");
  };
  return (
    <>
      <div className="cake-new-form">
        <h1>New Cake</h1>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Input
                  id="cakeName"
                  name="cakeName"
                  placeholder="Cake Name"
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
                  placeholder="Description"
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
                  placeholder="Ingredients"
                  type="textarea"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  id="cakeInstructions"
                  name="cakeInstructions"
                  placeholder="Instructions"
                  onChange={handleChange}
                  type="textarea"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Input
                  id="cakeServings"
                  name="cakeServings"
                  placeholder="Servings"
                  onChange={handleChange}
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  id="cakeImage"
                  name="cakeImage"
                  type="text"
                  onChange={handleChange}
                  placeholder="Image URL"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col className="add-btn">
              <Button size="lg" style={{backgroundColor:"var(--primary-color)", color:"var(--primary-bg)", border:"solid 1px var(--primary-bg)"}} onClick={handleSubmit}> Add Cake </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default CakeNew;
