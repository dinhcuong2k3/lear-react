import React from "react";
import PropTypes from "prop-types";
import "../card/Card.css";

Card.propTypes = {};
function Card(props) {
  const { imageUrl, title, content, shownow } = props;
  return (
    <div className="card">
      <div className="card__picture">
        <img src={imageUrl}></img>
      </div>
      <div className="card__information">
        <h3>{title}</h3>
        <p>{content}</p>
        <a>
          {shownow} <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
