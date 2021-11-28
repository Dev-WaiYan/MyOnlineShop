import React from "react";
import useStyleProvider, {
  StyleProvider,
} from "../../../hooks/useStyleProvider";
import "./price.css";

interface Props {
  price: string;
  width?: string;
}

function Price({ price, width = "70%" }: Props) {
  const { primaryColor, secondaryColor }: StyleProvider =
    useStyleProvider("light");
  return (
    <div
      className="price-container"
      style={{
        backgroundColor: secondaryColor,
        color: primaryColor,
        width: width,
      }}
    >
      {price}
    </div>
  );
}

export default Price;
