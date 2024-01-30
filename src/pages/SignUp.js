import React from "react";
import { useRef } from "react";
import { FormGroup, Input, Label, Row, Col } from "reactstrap";

const SignUp = ({ signup }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: {
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation,
      },
    };
    signup(userInfo);
    e.target.reset();
  };

  return (
    <>
      <div className="signupPage">
        <div className="signup-form">
          <h1>Sign Up</h1>
            <form ref={formRef} onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Password"
                      type="password"
                    />
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPW"
                      name="password_confirmation"
                      placeholder="Confirm Password"
                      type="password"
                    />
                  </FormGroup>
                </Col>
              </Row>{" "}
              <Row>
                <Col>
                  <Input
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "var(--primary-bg)",
                      border: "none",
                      fontWeight:"bolder"
                    }}
                    type="submit"
                    value="Submit"
                  />
                </Col>
              </Row>
            </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
