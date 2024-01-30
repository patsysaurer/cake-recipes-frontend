import React from "react";
import { useRef } from "react";
import {
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";

const SignIn = ({ signin }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    signin(userInfo);
    e.target.reset();
  };

  return (
    <>
      <div className="signup-page">
        <div className="signup-form">
          <h1>Login</h1>
          <form ref={formRef} onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input id="exampleEmail" name="email" placeholder="email" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password"
                    type="password"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Input
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--secondary-color)",
                fontWeight: "bolder",
              }}
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
