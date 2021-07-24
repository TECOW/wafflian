import React from 'react';
import '../styles/About.css';
import {Container, Row, Col, Image} from "react-bootstrap";

function About() {
  return (
    <Container>
      <Row className="content align-items-center">
        <Col>
          <Image src="/images/Cupcakes.png"/>
        </Col>
        <Col className="beginningInfo">
          <Row>
            <h1 className="webTitle">Wafflian</h1>
          </Row>
          <Row>
            <h2>Belgian Waffle & Cupcake Bar</h2>
          </Row>
          <Row>
            <p>Monday - Saturday: 9:30 A.M. - 6:00 P.M.</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
