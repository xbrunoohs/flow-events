import React from "react";
import "./style.css";

export default function ButtonSecondary({ children, ...rest }) {
  return (
    <button className="buttonSecondary" {...rest}>
      {children}
    </button>
  );
}
