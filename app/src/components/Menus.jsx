import "../styles/Menus.css";
import React from "react";
import {Container, Row, Col, Image, Carousel} from "react-bootstrap";

function Menus() {
  return (
    <div className="menus">
      <Container className="menu">
        <Row>
          <h1 className="center">Menu</h1>
        </Row>
        <Row>
          <h2 className="center">Cupcakes</h2>
        </Row>

          <Carousel className="carouselMargins">
            <Carousel.Item>
              <Image className="d-block dimensions imageMargin" src="/images/VanillaCupcake.png" alt="VanillaCupcake" roundedCircle/>

              <Carousel.Caption className="caption">
                <Row>
                  <h3 className="center">Vanilla Cupcake</h3>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image className="d-block dimensions imageMargin" src="/images/MatchaCupcake.png" alt="MatchaCupcake" roundedCircle/>

              <Carousel.Caption className="caption">
                <Row>
                  <h3 className="center">Matcha Cupcake</h3>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>




          </Carousel>
      </Container>
    </div>
  )
}
export default Menus;
