import React from "react";
import "./ReviewCard.css";

export default function ReviewCard(props) {
  return (
    <div className="reviewCardContainer">
      <img
        className="reviewCardImage"
        src={props.image}
        alt={`foto perfil ${props.name}`}
      />
      <div className="reviewCardContent">
        <div className="reviewCardName">
          <h2>{props.name}</h2>
          <h1 className="reviewCardNameTrailingContent">”</h1>
        </div>
        <p>{props.review}</p>
      </div>
    </div>
  );
}
