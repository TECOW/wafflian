import "../styles/Header.css";
import React from "react";
import {Navbar, Image, Col, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

function Header() {

  const PUBLIC_URL = process.env.PUBLIC_URL || null;
  console.log(PUBLIC_URL);

  return(
    <Navbar className="Header">
      <Col className="links">
        <Navbar.Brand><Link className="navbar-brand" to="/">Home</Link></Navbar.Brand>
        <Navbar.Brand><Link className="navbar-brand" to="/menu">Menu</Link></Navbar.Brand>
        <Navbar.Brand><Link className="navbar-brand" to="/contact">Contact Us</Link></Navbar.Brand>
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
