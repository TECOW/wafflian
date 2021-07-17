import "../styles/Header.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";


function Header() {
  return(
    <Navbar className="Header">
      <Navbar.Brand className="navbar-brand" href="#home">Home</Navbar.Brand>
      <Navbar.Brand className="navbar-brand" href="#menu">Menu</Navbar.Brand>
      <Navbar.Brand className="navbar-brand" href="#contact">Contact</Navbar.Brand>
      <a href="#home" ><img className="logo" src=".../public/images/WafflianLogo.png" alt="logo"></img></a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  )
};

export default Header;
