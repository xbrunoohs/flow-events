import React from "react";
import "./style.css";

export default function ButtonPrimary({ children, ...rest }) {
  return (
    <button className="buttonPrimary" {...rest}>
      {children}
    </button>
  );
}
