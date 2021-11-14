import React from "react";
import "./header.css";
import { Container, Row, Col } from "react-bootstrap";
import useStyleProvider, { StyleProvider } from "../../hooks/useStyleProvider";

function Header() {
  const { textColor, bgColor, primaryColor, secondaryColor }: StyleProvider =
    useStyleProvider("light");

  return (
    <Container style={{ backgroundColor: bgColor }}>
      <Row>
        <Col sm={4}>
          <h1 style={{ color: textColor }}>My Online Shop</h1>
        </Col>
        <Col sm={4}>
          <input type="search" style={{ backgroundColor: primaryColor }} />
        </Col>
        <Col sm={4} className="d-flex justify-content-end">
          <i
            className="fas fa-shopping-cart"
            style={{ color: secondaryColor }}
          ></i>
          <i className="fas fa-bars" style={{ color: secondaryColor }}></i>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
