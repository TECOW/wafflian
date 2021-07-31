import "../styles/Header.css";
import React from "react";
import {Navbar, Image, Col, Row} from "react-bootstrap";


function Header() {

  const PUBLIC_URL = process.env.PUBLIC_URL || null;
  console.log(PUBLIC_URL);

  return(
    <Navbar className="header">
      <Col style={{textAlign:"left", paddingLeft:"2.5rem"}}>
        <Navbar.Brand className="navbar-brand" href="#home">Home</Navbar.Brand>
        <Navbar.Brand className="navbar-brand" href="#menu">Menu</Navbar.Brand>
        <Navbar.Brand className="navbar-brand" href="#contact">Contact</Navbar.Brand>
      </Col>
    <Col >
      <Image className="logo" src={PUBLIC_URL ? PUBLIC_URL + "/images/WafflianLogo.png" : "/images/WafflianLogo.png"} alt="logo" roundedCircle />
    </Col>

    <Col/>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  )
};

export default Header;
