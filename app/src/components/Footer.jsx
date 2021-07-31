import "../styles/Footer.css";
import React from "react";
import {Navbar, Col, Image} from "react-bootstrap";

function Footer() {

  const PUBLIC_URL = process.env.PUBLIC_URL || null;
  console.log(PUBLIC_URL);

  return(
    <Navbar className="footer">
    <Col/>
    <Col>
      <a href="https://www.instagram.com/toronto.wafflian/">
      <Image className="social" src={PUBLIC_URL ? PUBLIC_URL + "/images/Instagram.png" : "/images/Instagram.png"} alt="logo" rounded/>
      </a>
      <a href="https://www.facebook.com/Wafflian/">
      <Image className="social" src={PUBLIC_URL ? PUBLIC_URL + "/images/Facebook.png" : "/images/Facebook.png"} alt="logo" rounded/>
      </a>
      <a href="https://twitter.com/wafflian">
      <Image className="social" src={PUBLIC_URL ? PUBLIC_URL + "/images/Twitter.png" : "/images/Twitter.png"} alt="logo" rounded/>
      </a>
    </Col>
    <Col>
      Copyright
    </Col>
    </Navbar>
  )
};


export default Footer;
