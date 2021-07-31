import React, {useEffect, useState} from 'react';
import "../styles/Menus.css";
import {Container, Row, Col, Image, Carousel} from "react-bootstrap";

function Menus() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
    }, []);

  return (
    <Container className="menu">
      <Row>
        <h1 className="center">Menu</h1>
      </Row>
      <Row>
        <h2 className="center">Cupcakes</h2>
      </Row>
        <Carousel className="carouselMargins">
          {products.map(product => {
            return (
              <Carousel.Item>
                <Image className="d-block dimensions imageMargin" src={product.imagePath} alt={product.name} roundedCircle/>
                <Carousel.Caption className="caption">
                  <Row>
                    <h3 className="center">{product.name}</h3>
                  </Row>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
    </Container>
  )
}
export default Menus;
