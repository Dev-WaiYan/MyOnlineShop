import React, { MouseEventHandler } from "react";
import useStyleProvider, { StyleProvider } from "../../hooks/useStyleProvider";
import "./btn.css";

interface Props {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Btn({ title, onClick }: Props) {
  const { primaryColor, secondaryColor }: StyleProvider =
    useStyleProvider("light");

  return (
    <button
      style={{ color: primaryColor, backgroundColor: secondaryColor }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Btn;
