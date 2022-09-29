import React from 'react';
import "./LandingPage.css";
import { Container, Row, Button } from 'react-bootstrap';

const LandingPage = () => {
  return (
      <div className="main">
          <Container>
              <Row>
                  <div>
                      <h1 className="title">Welcome To Mern Stack </h1>
                      <p className="subtitle"> One safe place for all your code</p>
                  </div>
                  <div className="buttonContainer">
                      <a href="/login">
                          <Button size="lg" className="Landingbutton">Login</Button>
                      </a>
                       <a href="/register">
                          <Button size="lg" className="Landingbutton" variant="outline-primary">Signup</Button>
                      </a>
                  </div>

              </Row>
          </Container>
      
    </div>
  )
}

export default LandingPage;
