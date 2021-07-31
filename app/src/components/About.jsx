import React from 'react';
import '../styles/About.css';
import {Container, Row, Col, Image} from "react-bootstrap";

function About() {
  const PUBLIC_URL = process.env.PUBLIC_URL || null;
  return (
    <Container>
      <Row className="content align-items-center">
        <Col>
          <Image src={PUBLIC_URL ? PUBLIC_URL + "/images/Cupcakes.png" : "/images/Cupcakes.png"}/>
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
