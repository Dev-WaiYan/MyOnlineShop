import React from "react";
import Btn from "../Btn/Btn";

function AddToCartBtn() {
  return (
    <Btn
      title={"Add to cart"}
      onClick={() => {
        console.log("press btn");
      }}
    />
  );
}

export default AddToCartBtn;
