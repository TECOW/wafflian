import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../styles/Contacts.css'

function Contacts() {
  return (
    <Container>
      <Row>
        <Col>
          <Row className="list">
            <h1 className="header">
                Our Contact Details
            </h1>
          </Row>
          <Row className="list">
            <Row>
                <h4 className="headings">Mailing Address</h4>
                <p className="text">109 McCaul St, 28B</p>
            </Row>
            <Row>
              <h4 className="headings">Email Address</h4>
              <p className="text">Wafflian@gmail.com</p>
            </Row>
            <Row>
              <h4 className="headings">Phone Number</h4>
              <p className="text">(647)-748-5788</p>
              <p className="text">(416)-508-6337</p>
            </Row>
            <Row>
              <h4 className="headings">Mon - Sat</h4>
              <p className="text">9:30AM - 6:00PM</p>
            </Row>
          </Row>
        </Col>
          <Col className="picture">
            <Image className="shop" src="/images/shop.jpg" rounded />
          </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
