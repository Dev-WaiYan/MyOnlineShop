import React from "react";
import useStyleProvider, { StyleProvider } from "../../hooks/useStyleProvider";
import AddToCartBtn from "../AddToCart/AddToCartBtn";
import Price from "./components/Price";
import "./item.css";

interface Props {
  title: string;
  price: string;
  coverImg: string;
  setIsShowItemDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

function Item({ title, price, coverImg, setIsShowItemDetails }: Props) {
  const { textColor, primaryColor, secondaryColor }: StyleProvider =
    useStyleProvider("light");

  const handleItemOnClick = () => {
    setIsShowItemDetails(true);
  };

  return (
    <>
      <div
        className="item-container"
        style={{ backgroundColor: primaryColor }}
        onClick={handleItemOnClick}
      >
        <Price price={price} />
        <div className="position-bottom">
          <h3 className="title text-center" style={{ color: textColor }}>
            {title}
          </h3>
          <img src={coverImg} alt="cover-photo" />
        </div>
      </div>

      <div className="d-flex justify-content-center my-3">
        <AddToCartBtn />
      </div>
    </>
  );
}

export default Item;
