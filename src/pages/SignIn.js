import React from 'react'
import { useRef } from 'react'
import { FormGroup, Input, Label, Row, Col, Container } from 'reactstrap'

const SignIn = ( {signin} ) => {

  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password }
    }
    signin(userInfo)
    e.target.reset()
  }

  return (
    <>
    <div className="signupPage">
    <Container style={{marginTop: '50px'}} fluid="xl">
    <div className="signup"><h1>Login</h1></div>
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
      {' '}
      <Row md="4" className="signupRow">
        <Col>
          <Input type="submit" value="Login" />
        </Col>
      </Row>
    </form>
    </Container>
    </div>
  </>
  )
}

export default SignIn