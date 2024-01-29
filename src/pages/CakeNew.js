import React, { useState } from "react";
import { Form, FormGroup, Input, Col, Button, Row, Container } from "reactstrap";
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
    user_id: currentUser?.id
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
    <div className="CakeNew">
        <h1>New Cake</h1>
        <Container  fluid="xl">  
      <Form style={{marginTop: '-150px'}}>
        <Row className="newCakeRow">
          <Col>
            <FormGroup>
              <Input
                id="cakeName"
                name="cakeName"
                placeholder="Cake Name"
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
                    placeholder="Description"
                    type="textarea"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    id="cakeIngredients"
                    name="cakeIngredients"
                    onChange={handleChange}
                    placeholder="Ingredients"
                    type="textarea"
                  />
                </FormGroup>
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
            </Row>
            <Row>
              <FormGroup>
                <Input
                  id="imageUrl"
                  name="image"
                  type="text"
                  onChange={handleChange}
                  placeholder="Image URL"
                />
              </FormGroup>
            </Row>
          </Col>
        </Row>
        <Button onClick={handleSubmit}> Add Cake </Button>
      </Form>
      </Container>
      </div>
    </>
  );
};

export default CakeNew;
