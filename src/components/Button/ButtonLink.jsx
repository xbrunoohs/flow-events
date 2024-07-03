import React from "react";
import "./style.css";

export default function ButtonLink({ children, ...rest }) {
  return (
    <button className="buttonLink" {...rest}>
      {children}
    </button>
  );
}
