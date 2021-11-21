import React from "react";
import { Container } from "react-bootstrap";
import useStyleProvider, { StyleProvider } from "../../hooks/useStyleProvider";
import "./item.css";

interface Props {
  title: string;
  price: string;
  coverImg: string;
}

function Item({ title, price, coverImg }: Props) {
  const { textColor, primaryColor, secondaryColor }: StyleProvider =
    useStyleProvider("light");

  return (
    <div className="item-container" style={{ backgroundColor: primaryColor }}>
      <div
        className="price-container"
        style={{ backgroundColor: secondaryColor, color: primaryColor }}
      >
        {price}
      </div>
      <div className="position-bottom">
        <h3 className="title text-center" style={{ color: textColor }}>
          {title}
        </h3>
        <img src={coverImg} alt="cover-photo" />
      </div>
    </div>
  );
}

export default Item;
