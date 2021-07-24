import "../styles/Menus.css";
import React from "react";
import Header from "/Header.jsx";
import {Container, Row, Col, Image, Carousel} from "react-bootstrap";

function Menus() {
  return (
    <div className="Menus">
      <Header/>
      <Container className="menu">
        <Row>
          <h1>Menu</h1>
        </Row>
        <Row>
          <h1>Cupcakes</h1>
        </Row>
        <Row className="carousel">
          <Carousel className="slide">
            //Insert carousel here for cupcakes
          </Carousel>
        </Row>
      </Container>
    </div>
  )
}
