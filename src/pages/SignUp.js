import React from 'react'
import { useRef } from 'react'
import { FormGroup, Input, Label, Row, Col, Container } from 'reactstrap'

const SignUp = ( {signup} ) => {

  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password, password_confirmation: data.password_confirmation}
    }
    signup(userInfo)
    e.target.reset()
  }

  return (
    <>
    <div className="signupPage">
      <Container style={{marginTop: '50px'}} fluid="xl">
      <div className="signup"><h1>Sign Up</h1></div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <Row md="4" className="signupRow">
            <Col>
              <FormGroup floating>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <Label for="exampleEmail">
                  Email
                </Label>
              </FormGroup>
            </Col>
          </Row>
        {' '}
          <Row md="4" className="signupRow">
            <Col>
              <FormGroup floating>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <Label for="examplePassword">
                  Password
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <Row md="4" className="signupRow">
            <Col>
              <FormGroup floating>
                <Input
                  id="confirmPW"
                  name="password_confirmation"
                  placeholder="Confirm PW"
                  type="password"
                />
                <Label for="confirmPassword">
                  Confirm Password
                </Label>
              </FormGroup>
            </Col>
          </Row>
        {' '}
        <Row md="4" className="signupRow">
          <Col>
          <Input type="submit" value="Submit" />
          </Col>
        </Row>
        </form>
        </Container>
    </div>
      </>
  )
}

export default SignUp