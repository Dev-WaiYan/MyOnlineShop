import React from "react";
import "./header.css";
import { Container, Row, Col } from "react-bootstrap";
import useStyleProvider, { StyleProvider } from "../../hooks/useStyleProvider";
import Item from "../../models/Item";

interface Props {
  items: Item[];
  setWorkingItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

function Header({ items, setWorkingItems }: Props) {
  const { textColor, bgColor, primaryColor, secondaryColor }: StyleProvider =
    useStyleProvider("light");

  const handleSearch = (event: any) => {
    setWorkingItems(
      items.filter((item: Item) => item.title.includes(event.target.value))
    );
  };

  return (
    <Container fluid className="p-3" style={{ backgroundColor: bgColor }}>
      <Row>
        <Col sm={4} className="d-flex align-items-center">
          <h1 style={{ color: textColor }}>My Online Shop</h1>
        </Col>
        <Col
          sm={4}
          className="d-flex justify-content-center align-items-center"
        >
          <input
            type="search"
            style={{ backgroundColor: primaryColor }}
            placeholder="Search Items"
            onChange={handleSearch}
          />
        </Col>
        <Col sm={4} className="d-flex justify-content-end align-items-center">
          <i
            className="fas fa-shopping-cart mx-2"
            style={{ color: secondaryColor }}
          ></i>
          <i className="fas fa-bars mx-2" style={{ color: secondaryColor }}></i>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
