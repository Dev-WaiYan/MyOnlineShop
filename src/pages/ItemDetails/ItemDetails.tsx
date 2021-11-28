import React from "react";
import { Button, Col, Modal, Row, Container } from "react-bootstrap";
import AddToCartBtn from "../../components/AddToCart/AddToCartBtn";
import Btn from "../../components/Btn/Btn";
import Price from "../../components/Item/components/Price";
import useStyleProvider, { StyleProvider } from "../../hooks/useStyleProvider";
import "./itemDetails.css";

interface Props {
  isShowItemDetails: boolean;
  setIsShowItemDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

function ItemDetails({ isShowItemDetails, setIsShowItemDetails }: Props) {
  const handleClose = () => setIsShowItemDetails(false);
  const handleShow = () => setIsShowItemDetails(true);

  const { textColor, bgColor, primaryColor, secondaryColor }: StyleProvider =
    useStyleProvider("light");

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        size="lg"
        show={isShowItemDetails}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Body style={{ backgroundColor: primaryColor }}>
          <h1 className="title text-center my-3" style={{ color: textColor }}>
            Quo Bee
          </h1>
          <Row className="my-5">
            <Col xs="2"></Col>
            <Col xs="8">
              <img
                className="current-preview-img"
                src="https://play-lh.googleusercontent.com/6RHePG2nOLmQhJikJ1TUBi7vrtAcCuUE8PH0bsvwOpaRB_TV7dG0e1DtbZBNzq-Ong"
                alt="photo"
              />
            </Col>
            <Col xs="2"></Col>
          </Row>
          <Row className="my-3">
            <Col xs="12" className="d-flex justify-content-center">
              <Price price="Price 4000 - MMK" width="40%" />
            </Col>
          </Row>
          <p className="p-3" style={{ color: textColor }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            perspiciatis laborum quam atque eum quibusdam, hic architecto
            officiis, consequatur quia eveniet, molestiae cum. Illum ducimus
            soluta eaque dolorum temporibus eum.
          </p>

          <Row className="gallery-container">
            <Col xs="2">
              <img
                src="https://play-lh.googleusercontent.com/6RHePG2nOLmQhJikJ1TUBi7vrtAcCuUE8PH0bsvwOpaRB_TV7dG0e1DtbZBNzq-Ong"
                alt="photo"
              />
            </Col>
            <Col xs="2">
              <img
                src="https://play-lh.googleusercontent.com/6RHePG2nOLmQhJikJ1TUBi7vrtAcCuUE8PH0bsvwOpaRB_TV7dG0e1DtbZBNzq-Ong"
                alt="photo"
              />
            </Col>
            <Col xs="2">
              <img
                src="https://play-lh.googleusercontent.com/6RHePG2nOLmQhJikJ1TUBi7vrtAcCuUE8PH0bsvwOpaRB_TV7dG0e1DtbZBNzq-Ong"
                alt="photo"
              />
            </Col>
            <Col xs="2">
              <img
                src="https://play-lh.googleusercontent.com/6RHePG2nOLmQhJikJ1TUBi7vrtAcCuUE8PH0bsvwOpaRB_TV7dG0e1DtbZBNzq-Ong"
                alt="photo"
              />
            </Col>
            <Col xs="2">
              <img
                src="https://play-lh.googleusercontent.com/6RHePG2nOLmQhJikJ1TUBi7vrtAcCuUE8PH0bsvwOpaRB_TV7dG0e1DtbZBNzq-Ong"
                alt="photo"
              />
            </Col>
            <Col xs="2">
              <img
                src="https://play-lh.googleusercontent.com/6RHePG2nOLmQhJikJ1TUBi7vrtAcCuUE8PH0bsvwOpaRB_TV7dG0e1DtbZBNzq-Ong"
                alt="photo"
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: primaryColor }}>
          <AddToCartBtn />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemDetails;
